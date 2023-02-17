{% for file in site.html_files %}
  {% if file.path contains '/src/' and file.extname == '.html' and file.name != 'index.html' %}
### [{{ file.name | remove: '.html' | capitalize }}]({{ file.path | relative_url }})
  {% endif %}
{% endfor %}