![D](../../assets/letters/D.png)

{% assign sorted_pages = (site.pages | sort: 'title') %}
{% assign found = false %}
{% for page in sorted_pages %}
  {% if page.path contains 'src/D/' and page.path != 'src/D/index.md' %}
    {% assign found = true %}
    ### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
  {% endif %}
{% endfor %}

{% unless found %}
  Il n'y a pas encore de lexique.
{% endunless %}