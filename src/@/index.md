{% assign folders = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" | split: "" %}
{% for folder in folders %}
    {% for file in site.static_files %}
      {% if file.path contains '/src/{{ folder }}' and file.extname == '.md' and file.name != 'index.md' %}
### {{ file.name | remove: '.md' }}
      {% endif %}
    {% endfor %}
{% endfor %}