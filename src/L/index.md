![L](../../assets/letters/L.png)

{% assign sorted_pages = (site.pages | sort: 'title') %}
{% assign found = false %}
{% for page in sorted_pages %}
  {% if page.path contains 'src/L/' and page.path != 'src/L/index.md' %}
    {% assign found = true %}
    ### [{{ page.title | remove: '.md' }}]({{ page.url | relative_url }})
  {% endif %}
{% endfor %}

{% unless found %}
  ### Oups...

Il n'y a pas encore de lexique commençant par cette lettre, mais tu peux être le premier à le faire !
Rend toi sur la page [Contribuer](https://github.com/CryptoLexique/CryptoLexique/blob/main/.github/CONTRIBUTING.md) pour commencer l'aventure =)

{% endunless %}