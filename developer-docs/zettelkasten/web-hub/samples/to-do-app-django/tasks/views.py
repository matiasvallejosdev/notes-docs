import datetime

from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.decorators import login_required

from .models import List, Task

from .forms import ListForm, TaskFormSimple, TaskFormComplete, TaskFormSchedule
from django.urls import reverse_lazy

@login_required
def task_view(request, *args, **kwargs):
    lst = List.objects.all()
    tasks = Task.objects.all().order_by('-created_at').order_by('is_complete')
    form = TaskFormSimple(request.POST or None, user=request.user)
    
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
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect("./")
        
    context = {
        'title': 'Your tasks',
        'form': form,
        'list': lst.filter(user=request.user),
        'tasks': tasks.filter(user=request.user),
    }
    return render(request, 'task_view.html', context)

def task_upcoming(request, *args, **kwargs):
    upcoming =  kwargs.get('range')
    
    lst = List.objects.all()
    tasks = Task.objects.all().order_by('-created_at').order_by('is_complete')
    form = TaskFormSimple(request.POST or None, user=request.user)
    
    if upcoming == 'week':
        tasks = tasks.exclude(task_schedule__isnull=True)
        start = datetime.date.today()
        end = start + datetime.timedelta(days=7)      
        tasks = tasks.filter(task_schedule__range=[start, end]) # week upcoming setting up by default
    
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
        return redirect('../upcoming/week#task-{id}'.format(id=task.id))
    
    if 'new-task-submit' in request.POST:    
        print('[POST] New Task Operation')
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect("./")
    
    context = {
        'title': 'Your tasks',
        'form': form,
        'list': lst.filter(user=request.user),
        'tasks': tasks.filter(user=request.user),
    }
    return render(request, 'task_view.html', context)
    

@login_required
def task_by_list(request, *args, **kwargs):
    list_requested = kwargs.get('list')
    
    lst = List.objects.all()
    tasks = Task.objects.all()
    form = TaskFormSimple(request.POST or None, user=request.user)
    
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
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect("./")
    
    if list_requested != '':
        tasks = tasks.filter(task_list__name = str(list_requested))    
        
    context = {
        'title': str(list_requested).capitalize(),
        'list': lst.filter(user = request.user),
        'tasks': tasks.filter(user=request.user),
        'form': form
    }
    return render(request, 'task_view.html', context)

@login_required
def task_delete(request, *args, **kwargs):
    id = kwargs.get('id')
    lst = List.objects.all()
    
    task = get_object_or_404(Task, id=id, user=request.user)
    
    if(request.method == "POST"):
        task.delete()
        return redirect('../')

    context = {
        'list': lst.filter(user=request.user),
        'task': task
    }

    return render(request, 'task_delete.html', context)

@login_required
def task_edit(request, *args, **kwargs):
    id = kwargs.get('id')
    task = get_object_or_404(Task, id=id)
    lst = List.objects.all()
    
    form = TaskFormComplete(request.POST or None, instance=task)
    
    if form.is_valid():
        form.save()
        return redirect('../')
    
    context = {
        'request': request,
        'form': form,
        'list': lst.filter(user=request.user)
    }
        
    return render(request, 'task_edit.html', context)

@login_required
def task_schedule(request, *args, **kwargs):
    id = kwargs.get('id')
    task = get_object_or_404(Task, id=id)
    lst = List.objects.all()
    
    form = TaskFormSchedule(request.POST or None, instance=task)
    
    if form.is_valid():
        form.save()
        return redirect('../upcoming/week')
    
    context = {
        'request': request,
        'form': form,
        'list': lst.filter(user=request.user)
    }

    return render(request,'task_edit.html', context)   

@login_required
def new_list(request, *args, **kwargs):
    lst = List.objects.all()
    form = ListForm(request.POST or None)
    
    if form.is_valid():
        task = form.save(commit=False)
        task.user = request.user
        task.save()
        return redirect('../', upcoming='week')
    
    context = {
        'request': request,
        'form': form,
        'list': lst.filter(user=request.user)
    }
        
    return render(request, 'new_list.html', context)

