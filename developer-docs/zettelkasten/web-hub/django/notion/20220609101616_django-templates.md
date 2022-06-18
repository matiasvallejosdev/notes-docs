# Django Templates

**Tags:** #django-templates #django #django-views

**Inspired by**
- [Django views](20220602100403_django-views.md)

**Links**
- [Settings code](../first-django-project/firstproject/settings.py)

## Content

Django has a template search path, which allows you to minimize redundancy among templates. In your Django settings, you specify a list of directories to check for templates with DIRS. If a template doesn’t exist in the first directory, it checks the second, and so on.

Django template it's the way that you via request url of the user send a response with a custom template saving code and minimize redundant code. That view could be an html template, xml document or whatever you want.

### Rendering context

Django templates allow you to render some context depending on the request. The context is a dictionary that is passed to the template.

```python
from django.shortcuts import render

from .models import Article

def year_archive(request, year):
    a_list = Article.objects.filter(pub_date__year=year)
    context = {'year': year, 'article_list': a_list}
    return render(request, 'news/year_archive.html', context)
```

To design your own template you need to build your file document and use it in your views adding your `path directory` to use it as a template inside of your `DIR` in settings.py

### Template tags

Django allows you to include your own template tags in your templates. That is important because you could use and extend the tags that are built into Django. For example, you could use your custom tag block content to render the base webpage. That allow you to extends from that file and use that block content to render your own template.

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

Django allows you nested blocks. That is, you can use a block inside of another block. For example, you could use a block to render a header and a footer. Django allows you to use the same block name in different templates.

> Note that you don’t have to use Django’s template system if you prefer another system. While Django’s template system is particularly well-integrated with Django’s model layer, nothing forces you to use it. For that matter, you don’t have to use Django’s database API, either. 

You can use another database abstraction layer, you can read XML files, you can read files off disk, or anything you want. Each piece of Django – models, views, templates – is decoupled from the next.

### For loops

In django templates if you need to define some list or iterate some data you can use the `for` tag. Django for loops are useful if you need to iterate over a list of items.

```django html
<ul>
    {% for task in tasks %}
        <li>{{task}}</li>
    {% endfor %}
</ul>   
```

### Conditions

Conditions if else are useful to decide depending on the request. That is really important when you manage your code.

```django html
{% if user.is_authenticated %}
    <p>Welcome, {{user.username}}</p>
{% else %}
    <p>Please log in</p>
{% endif %}
```

### Filters

- [Django filters](https://docs.djangoproject.com/en/4.0/ref/templates/builtins/)

Filters are used to format the data. For example, you can use the `lower` filter to make a string lowercase. Filters the contents of the block through one or more filters. Multiple filters can be specified with pipes and filters can have arguments, just as in variable syntax.

```django html 
<p>{{message|lower}}</p>
```

With that you could center, capitalize, or lowercase a string. You can also use the `truncate` filter to truncate a string. Safe filter render the string with HTML tags. 