![B](../../assets/letters/B.png)


{% assign sorted_pages = site.pages | where: "path", "src/B/" | sort: "name" %}

{% for page in sorted_pages %}
  {% if page.path != 'src/B/index.md' %}
    ### [{{ page.name | remove: '.md' }}]({{ page.url | relative_url }})
  {% endif %}
{% endfor %}
