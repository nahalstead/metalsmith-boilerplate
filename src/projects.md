---
title: Projects
description: A collection of recent work.
layout: projects.hbs
menu-order: 5
---

Recent work:
{{#each project in projects}}
	<h1>{{project.title}}</h1>
	<ul>
		{{#each image in project.images}}
			<li><img src="{{image}}"/></li>
		{{/each}}
	</ul>
{{/each}}
