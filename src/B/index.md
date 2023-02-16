![B](../../assets/letters/B.png)


{% assign sorted_pages = site.static_files | where: "path", "src/B/" | sort: "name" %}

{% for page in sorted_pages %}
  {% if page.path != 'src/B/index.md' and page.extname == '.md' %}
    ### [{{ page.name | remove: '.md' }}]({{ page.path | relative_url }})
  {% endif %}
{% endfor %}
