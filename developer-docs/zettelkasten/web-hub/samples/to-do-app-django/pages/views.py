from django.shortcuts import render
from tasks.models import List

from django.contrib.auth.views import LoginView

# Create your views here.

def home_view(request, *args, **kwargs):
    list = List.objects.all()
    context = {
        'user': request.user,
        'list': list
    }
    return render(request, 'home.html', context)