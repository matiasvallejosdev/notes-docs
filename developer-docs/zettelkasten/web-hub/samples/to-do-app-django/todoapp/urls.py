from django.contrib import admin
from django.urls import path, include

# Import views
from pages.views import *

urlpatterns = [
    path('', home_view, name='home'),
    path('tasks/', include('tasks.urls')),
    path('users/', include('users.urls')),
    path('admin/', admin.site.urls),
]
