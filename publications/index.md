---
layout: page
title: Publications
description: Papers, posters, presentations
header-img: images/software-0.jpg
comments: false
date: 2018-03-08
modified: 2018-03-09
---

<div markdown="0">
    <a href="https://scholar.google.ch/citations?user=goU84qYAAAAJ&hl=en" class="btn btn-info">Google Scholar</a>
</div>

## Articles
-----

<div class='panel-pub'>
<ol>
{% for article in site.data.articles %}
    <li>
    <div class="title">
    <span class="title">{{ article.title }}</span>
    {% if article.fulltext %}
        <a title="fulltext" href="{{ site.url }}/downloads/articles/{{ article.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
    {% endif %}
    </div>
    <div class='author'>
    {% for author in article.author %}
        <span class='{{ author.role }}'>{{ author.family }}, {{ author.given_initial }}{% if author.role contains 'corr' %}*{% endif %}, </span>
    {% endfor %}
    </div>
    <div class="pubinfo">
    <span class="source">{{ article.journal.abbreviation }} </span><span class="year">{{ article.year }}{% if article.volume %}, </span><span class="volume">{{ article.volume }}{% endif %}{% if article.page %}, </span><span class="page">{{ article.page }}{% endif %}.</span>
    </div>
    <div class="url">
        (<a href="{{ article.URL }}">URL</a>
        {% if article.code %}
            | <a href="{{ article.code }}">code</a>
        {% endif %})
    </div>
    </li>
{% endfor %}
</ol>
</div>

## Presentations and Posters
-----

<div class='panel-pub'>
<ol>
{% for presentation in site.data.presentations %}
    <li>
    <div class="title">
    <span class="title">{{ presentation.title }}</span>
    {% if presentation.fulltext %}
        <a title="fulltext" href="{{ site.url }}/downloads/presentations/{{ presentation.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
    {% endif %}
    </div>
    <div class='author'>
    {% for author in presentation.author %}
        <span class='{{ author.role }}'>{{ author.family }}, {{ author.given_initial }}, </span>
    {% endfor %}
    </div>
    <div class="pubinfo">
    <span class="source">{{ presentation.source }} </span><span class="city">{{ presentation.city }}, </span><span class="year">{{ presentation.year }}.</span>
    </div>
    </li>
{% endfor %}
</ol>
</div>

## Thesis and other reports
-----

<div class='panel-pub'>
<ol>
{% for thesis in site.data.thesis %}
    <li>
    <div class="title">
    <span class="title">{{ thesis.title }}</span>
    {% if thesis.fulltext %}
        <a title="fulltext" href="{{ site.url }}/downloads/thesis/{{ thesis.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
    {% endif %}
    </div>
    <div class='author'>
    {% for author in thesis.author %}
        <span class='{{ author.role }}'>{{ author.family }}, {{ author.given_initial }}</span>
    {% endfor %}
    </div>
    {% for advisor in thesis.advisor %}
        <span class='advisor'>{{ advisor.role }}: {{ advisor.family }}, {{ advisor.given_initial }}</span>
    {% endfor %}
    <div class="pubinfo">
    <span class="source">{{ thesis.source }} </span><span class="publisher">{{ thesis.publisher }}, </span><span class="year">{{ thesis.year }}.</span>
    </div>
    </li>
{% endfor %}
</ol>
</div>
