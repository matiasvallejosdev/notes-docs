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
        
class TaskFormComplete(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['content', 'task_list', 'is_complete', 'task_schedule']