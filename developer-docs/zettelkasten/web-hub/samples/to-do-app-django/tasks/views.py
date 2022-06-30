from django.shortcuts import get_object_or_404, redirect, render

# Import models
from .models import List, Task

# Import forms models
from .forms import ListForm, TaskFormSimple, TaskFormComplete
    

def task_view(request, *args, **kwargs):
    lst = List.objects.all()
    tasks = Task.objects.all().order_by('-created_at').order_by('is_complete')
    form = TaskFormSimple(request.POST or None)
    
    if 'complete-task-submit' in request.POST:
        print('[POST] Checkbox Operation')
        is_checked = request.POST.get('complete-task-submit')
        id = request.POST.get('id')
        task = get_object_or_404(Task, id=id)
    
        if '1' == is_checked[0]:
            task.is_complete = True 
            print('{task} is completed'.format(task=str(task)))
        else:
            task.is_complete = False 
            print('{task} is not completed'.format(task=str(task)))
        task.save()
        return redirect('./#task-{id}'.format(id=task.id))
    
    if 'new-task-submit' in request.POST:    
        print('[POST] New Task Operation')
        if form.is_valid():
            form.save()
            return redirect("./")
        
    context = {
        'title': 'Your tasks',
        'form': form,
        'list': lst,
        'tasks': tasks,
    }
    return render(request, 'task_view.html', context)

def task_by_list(request, *args, **kwargs):
    list_requested = kwargs.get('list')
    
    lst = List.objects.all()
    tasks = Task.objects.all()
    form = TaskFormSimple(request.POST or None)
    
    if 'complete-task-submit' in request.POST:
        print('[POST] Checkbox Operation')
        is_checked = request.POST.get('complete-task-submit')
        id = request.POST.get('id')
        task = get_object_or_404(Task, id=id)
    
        if '1' == is_checked[0]:
            task.is_complete = True 
            print('{task} is completed'.format(task=str(task)))
        else:
            task.is_complete = False 
            print('{task} is not completed'.format(task=str(task)))
        task.save()
        return redirect('./#task-{id}'.format(id=task.id))
    
    if 'new-task-submit' in request.POST:    
        print('[POST] New Task Operation')    
        if form.is_valid():
            form.save()
            form = TaskFormSimple(request.POST or None)
            return redirect("./")
    
    if list_requested != '':
        tasks = tasks.filter(task_list__name = str(list_requested))    
        
    context = {
        'title': str(list_requested).capitalize(),
        'list': lst,
        'tasks': tasks,
        'form': form
    }
    return render(request, 'task_view.html', context)

def task_delete(request, *args, **kwargs):
    id = kwargs.get('id')
    lst = List.objects.all()
    
    task = get_object_or_404(Task, id=id)
    
    if(request.method == "POST"):
        task.delete()
        return redirect('../')

    context = {
        'list': lst,
        'task': task
    }

    return render(request, 'task_delete.html', context)

def task_edit(request, *args, **kwargs):
    id = kwargs.get('id')
    task = get_object_or_404(Task, id=id)
    lst = List.objects.all()
    
    form = TaskFormComplete(request.POST or None, instance=task)
    
    if form.is_valid():
        form.save()
        form = TaskFormComplete(request.POST or None)
        return redirect('../')
    
    context = {
        'request': request,
        'form': form,
        'list': lst
    }
        
    return render(request, 'task_edit.html', context)

def new_list(request, *args, **kwargs):
    lst = List.objects.all()
    form = ListForm(request.POST or None)
    
    if form.is_valid():
        form.save()
        form = ListForm(request.POST or None)
        return redirect('../')
    
    context = {
        'request': request,
        'form': form,
        'list': lst
    }
        
    return render(request, 'new_list.html', context)
    