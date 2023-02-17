{% for file in site.static_files %}
    {% if file.path contains '/src/' and file.extname == '.md' and file.name != 'index.md' %}
### {{ file.name | remove: '.md' | capitalize }}
    {% endif %}
{% endfor %}