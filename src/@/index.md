{% assign folders = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" | split: "" %}
{% for folder in folders %}
    {% for file in site.static_files %}
      {% if file.path contains '/src/' and file.path contains '/'+folder+'/' and file.extname == '.md' and file.name != 'index.md' %}
### {{ file.basename }}
      {% endif %}
    {% endfor %}
{% endfor %}