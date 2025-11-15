---
layout: default
title: "Home"
---
# Welcome to My Simple Blog
Here are my posts:
{% for post in site.posts %}
<a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
{% endfor %}
