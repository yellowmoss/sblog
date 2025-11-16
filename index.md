---
layout: default
title: "Home"
---
# Welcome to My Simple Blog
Here are my posts:
{% for post in site.posts %}
<a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
{% endfor %}

<pre id="search-debug-output" style="background:#eee; padding:1em;"></pre>
<script src="{{ '/assets/javascript/script.js' | relative_url }}"></script>
