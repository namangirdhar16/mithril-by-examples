---
title: Simple Modal
date: 2020-09-24
tags: [modal]
level: beginner
version: 2.0.4
author: osban
layout: layouts/example.html
---

## JS

~~~js
let showmodal = false

const Modal = {
  view: v => [
    m('div.modal',
      m('div.c1',
        m('div.c2', v.attrs.text),
        m('button', {onclick: () => showmodal = false}, "OK")
      )
    )
  ]
}

const App = {
  view: () => [
    m('h1', "TEST"),
    m('button', {onclick: () => showmodal = true}, "show modal"),
    showmodal && m(Modal, {text: "This is a modal"})
  ]
}

m.mount(document.body, App)
~~~

## CSS

~~~css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.c1 {
  text-align: center;
  padding-bottom: 40px;
  width: 200px;
  height: 100px;
  background: white
}

.c2 {
  padding-top: 40px;
  margin-bottom: 20px
}
~~~
