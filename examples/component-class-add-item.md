---
title: Component Class Add Item
date: 2020-09-24
tags: [component, class, state]
level: beginner
version: 2.0.4
author: osban
layout: layouts/example.html
---

This is not recommended, but if you have to:
Class based example for state management.

~~~js
class app {
  constructor() {
    this.els = ["first item"]
  }

  view() {
    return [
      m('div',
        m('button', {
          onclick: () => {this.els.push('another item')}
        }, 'add item'),

        m('ul', this.els.map(item => m('li', item)))
      )
    ]
  }
}

m.mount(document.body, app)
~~~
