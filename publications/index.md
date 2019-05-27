---
layout: page
title: Publications
description:
header-img:
date: 2018-03-08
modified: 2018-05-27
---

{% if site.data.peer-reviewed %}

## Peer-reviewed
-----

<div>
    <ol>
    {% for pub in site.data.peer-reviewed %}
        <li>
            <div>
                <span>{{ pub.title }}</span>
                {% if pub.fulltext %}
                    <a title="fulltext" href="{{ site.url }}/downloads/peer-reviewed/{{ pub.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
                {% endif %}
                </div>
                <div>
                {% for author in pub.author %}
                    <span>{{ author.family }}, {{ author.given_initial }}{% if author.role contains 'corr' %}*{% endif %}, </span>
                {% endfor %}
                </div>
                <div>
                <span>{{ pub.journal.abbreviation }} </span><span>{{ pub.year }}{% if pub.volume %}, </span><span>{{ pub.volume }}{% endif %}{% if pub.page %}, </span><span>{{ pub.page }}{% endif %}.</span>
            </div>
            <div>
                (<a href="{{ pub.URL }}">URL</a>
                {% if pub.code %}
                    | <a href="{{ pub.code }}">code</a>
                {% endif %})
            </div>
        </li>
    {% endfor %}
    </ol>
</div>

{% endif %}

{% if site.data.pre-print %}

## Pre-prints
-----

<div>
    <ol>
        {% for pub in site.data.pub-pre-print %}
        <li>
            <div>
            <span>{{ pub.title }}</span>
            {% if pub.fulltext %}
                <a title="fulltext" href="{{ site.url }}/downloads/pre-print/{{ pub.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
            {% endif %}
            </div>
            <div>
            {% for author in pub.author %}
                <span>{{ author.family }}, {{ author.given_initial }}</span>
            {% endfor %}
            </div>
            {% for advisor in pub.advisor %}
                <span>{{ advisor.role }}: {{ advisor.family }}, {{ advisor.given_initial }}</span>
            {% endfor %}
            <div>
                <span>{{ pub.source }} </span><span>{{ pub.publisher }}, </span><span>{{ pub.year }}.</span>
            </div>
        </li>
    {% endfor %}
    </ol>
</div>

{% endif %}

{% if site.data.thesis %}

## Thesis
-----

<div>
    <ol>
        {% for pub in site.data.thesis %}
        <li>
            <div>
            <span>{{ pub.title }}</span>
            {% if pub.fulltext %}
                <a title="fulltext" href="{{ site.url }}/downloads/thesis/{{ pub.fulltext }}"><i class="fa fa-file-pdf-o"></i></a>
            {% endif %}
            </div>
            <div>
            {% for author in pub.author %}
                <span>{{ author.family }}, {{ author.given_initial }}</span>
            {% endfor %}
            </div>
            {% for advisor in pub.advisor %}
                <span>{{ advisor.role }}: {{ advisor.family }}, {{ advisor.given_initial }}</span>
            {% endfor %}
            <div>
                <span>{{ pub.source }} </span><span>{{ pub.publisher }}, </span><span>{{ pub.year }}.</span>
            </div>
        </li>
    {% endfor %}
    </ol>
</div>

{% endif %}
