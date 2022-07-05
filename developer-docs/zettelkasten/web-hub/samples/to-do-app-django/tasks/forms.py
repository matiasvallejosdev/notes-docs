from django import forms
from .models import List, Task

# That is a typcally forma using models and forms
class ListForm(forms.ModelForm):
    class Meta:
        model = List
        fields = ['name']

class TaskFormSimple(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['content', 'task_list']
        widgets = {
            'task_schedule': forms.DateInput(attrs={'type': 'date'})
        }
    
    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super().__init__(*args, **kwargs)
        if self.user:
            self.fields['task_list'].queryset = List.objects.filter(user=self.user)
            
    def form_valid(self, form):
        form.instance.user = self.user
        return super().form_valid(form)     

class TaskFormSchedule(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['task_schedule']
        widgets = {
            'task_schedule': forms.DateInput(attrs={'type': 'date'})
        }
        
class TaskFormComplete(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['content', 'task_list', 'is_complete', 'task_schedule']
        widgets = {
            'task_schedule': forms.DateInput(attrs={'type': 'date'})
        }