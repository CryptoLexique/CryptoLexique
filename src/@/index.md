{% assign alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" %}
{% assign sorted_pages = (site.pages | sort: 'title') %}

{% for letter in alphabet %}
{% for page in sorted_pages %}
{% if page.path contains 'src/{{ letter }}/' and page.path != 'src/{{ letter }}/index.md' %}
### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
{% endif %}
{% endfor %}
{% endfor %}