{% assign sorted_pages = site.pages | sort: 'title' %}
{% assign folders = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" %}

{% for folder in folders %}
    {% for page in sorted_pages %}
{% if page.path contains '/src/{{ folder }}/' and page.name != 'index.md' %}
### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
      {% endif %}
    {% endfor %}
    {% endfor %}