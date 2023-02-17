{% assign sorted_pages = site.pages | sort: 'title' %}

{% for page in sorted_pages %}
  {% if page.path contains '/src/' and page.path != '/src/index.md' and page.path contains '.md' and page.path contains '/index.md' == false %}
### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
  {% endif %}
{% endfor %}
