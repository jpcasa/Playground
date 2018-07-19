'use strict';

let toybox = { item1: 'car', item2: 'bal', item3: 'frisbee' };

let {item1, item2} = toybox;

console.log(item1);

// EXAMPLE 2
let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

let [a, b, c, ...d] = widgets;

console.log(d);
