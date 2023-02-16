![B](../../assets/letters/B.png)


{% assign sorted_pages = (site.pages | sort: 'title') %}

{% for page in sorted_pages %}
  {% if page.path contains 'src/B/' and page.path != 'src/B/index.md' %}
### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
  {% endif %}
{% endfor %}
