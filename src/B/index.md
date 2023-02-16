![B](../../assets/letters/B.png)


{% assign sorted_pages = site.pages | where: "path", "src/B/" | sort: "title" %}

{% for page in sorted_pages %}
  {% if page.path != 'src/B/index.md' %}
    ### [{{ page.title }}]({{ page.url | relative_url }})
  {% endif %}
{% endfor %}
