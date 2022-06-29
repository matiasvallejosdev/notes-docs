from django.db import models

# Create your models here.

class List(models.Model):
    name = models.CharField(max_length=60)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class Task(models.Model):
    content = models.CharField(max_length=255)
    task_list = models.ForeignKey('List', on_delete=models.CASCADE, null=True)
    is_complete = models.BooleanField(default=False)
    task_schedule = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.content;