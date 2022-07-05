from django.urls import path
from .views import *


app_name = 'tasks'
urlpatterns = [
    # Tasks Routing
    path('', task_view, name='task_view'),
    path('upcoming/<str:range>', task_upcoming, name='task_upcoming'),
    path('<str:list>/', task_by_list, name='task_by_list'),
    path('list/create', new_list, name='new_list'),
    path('edit/<int:id>', task_edit, name='edit_task'),
    path('schedule/<int:id>', task_schedule, name='task_schedule'),
    path('delete/<int:id>', task_delete, name='delete_task')
]
