# Django Templates

**Tags:** #django-templates #django #django-views

**Inspired by**
- [Django views](20220602100403_django-views.md)

**Links**
- [Settings code](../first-django-project/firstproject/settings.py)

## Content

Django has a template search path, which allows you to minimize redundancy among templates. In your Django settings, you specify a list of directories to check for templates with DIRS. If a template doesn’t exist in the first directory, it checks the second, and so on.

Django template it's the way that you via request url of the user send a response with a custom template saving code and minimize redundant code. That view could be an html template, xml document or whatever you want.

```python
from django.shortcuts import render

from .models import Article

def year_archive(request, year):
    a_list = Article.objects.filter(pub_date__year=year)
    context = {'year': year, 'article_list': a_list}
    return render(request, 'news/year_archive.html', context)
```

To design your own template you need to build your file document and use it in your views adding your `path directory` to use it as a template inside of your `DIR` in settings.py

```django html
<html>
<head>
    <title>{% block title %}{% endblock %}</title>
</head>
<body>
    <img src="{% static 'images/sitelogo.png' %}" alt="Logo">
    {% block content %}{% endblock %}
</body>
</html>
```

Note that you don’t have to use Django’s template system if you prefer another system. While Django’s template system is particularly well-integrated with Django’s model layer, nothing forces you to use it. For that matter, you don’t have to use Django’s database API, either. You can use another database abstraction layer, you can read XML files, you can read files off disk, or anything you want. Each piece of Django – models, views, templates – is decoupled from the next.