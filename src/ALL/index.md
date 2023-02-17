{% assign sorted_pages = site.pages | sort: 'title' %}
{% assign folders = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" | split: "" %}

{% for folder in folders %}
  {% assign found = false %}
    {% for page in sorted_pages %}
      {% if page.path contains '/src/' and page.path contains '/'+folder+'/' and page.name != 'index.md' %}
        {% assign found = true %}
        ### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
      {% endif %}
    {% endfor %}
