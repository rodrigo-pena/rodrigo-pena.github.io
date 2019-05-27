---
layout: page
title: Presentations
description:
header-img:
date: 2018-03-08
modified: 2018-05-27
---

{% if site.data.posters %}
## Posters
-----

<div>
    <ol>
    {% for poster in site.data.posters %}
        <li>
        <div>
        <span>{{ poster.title }}</span>
        {% if poster.fulltext %}
            <a title="fulltext" href="{{ site.url }}/downloads/posters/{{ poster.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
        {% endif %}
        </div>
        <div>
        {% for author in poster.author %}
            <span>{{ author.family }}, {{ author.given_initial }}, </span>
        {% endfor %}
        </div>
        <div>
        <span>{{ poster.source }} </span><span class="city">{{ poster.city }}, </span><span class="year">{{ poster.year }}.</span>
        </div>
        </li>
    {% endfor %}
    </ol>
</div>
{% endif %}