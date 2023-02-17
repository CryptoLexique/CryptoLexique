{% assign alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" %}

{% for letter in alphabet %}
  {% assign folder = '/src/' | append: letter | append: '/' %}
  {% assign pages = site.pages | where: "path", folder %}
  {% assign markdown_pages = pages | where: "extname", ".md" %}
  {% assign sorted_pages = markdown_pages | sort: "name" %}
  
  {% if sorted_pages.size > 1 %}
      {% for page in sorted_pages %}
        {% if page.name != 'index.md' %}
### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
        {% endif %}
      {% endfor %}
  {% endif %}
{% endfor %}