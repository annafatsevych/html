'use strict';

function hello() {
   alert("Hello, World");
};

function changeStyle() {
    document.getElementById('myButton').setAttribute("style", "background:deeppink; border: 1px solid purple;");   
};

function add(x = 5,y = 5) {
   return x + y;
}