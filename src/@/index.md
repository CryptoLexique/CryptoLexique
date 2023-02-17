{% assign alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" %}

{% for letter in alphabet %}
{% if page.path contains 'src/{{ letter }}/' and page.path != 'src/{{ letter }}/index.md' %}
### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
{% endif %}
{% endfor %}