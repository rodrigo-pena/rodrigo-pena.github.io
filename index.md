---
layout: base
---

<div class="wrapper">
    <header>
        {% if site.owner.logo %}
        <div class="logo-container">
          <a class="logo" href="{{ page.baseurl }}" style="background-image: url('{{ site.baseurl }}{{ site.owner.logo }}')"></a>
        </div>
        {% endif %}

        {% if site.owner.author %}
        <div class="author-container"><h1>{{ site.owner.author }}</h1></div>
        {% endif %}

        {% if site.owner.tagline %}
        <div class="tagline-container"><p>{{ site.owner.tagline }}</p></div>
        {% endif %}
    </header>
    <main>
      {% if site.owner.include_landing %}
      <div class="content">
        {% include landing.html %}
      </div>
      {% endif %}
    </main>
</div>

