/*
let val;

val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.all.head;
val = document.all.body;
val = document.all.doctype;
val = document.all.domain;
val = document.all.URL;
val = document.all.characterSet;
val = document.all.contentType;

//selecting element wither selectors

val = document.forms; //returns all the forms available on the document in an array like
val = document.forms[0]; //selects the only form on the doc
val = document.forms[0].id; //selects the its id
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute('src');


////////////

let scriptt = document.scripts;

let scriptsArr = Array.from(scriptt);

scriptsArr.forEach((cur) => {
    console.log(cur.getAttribute("src"));
})



console.log(val); 
*/

//single element selectors:

// 1) document.getElementById( )
// 2) document.querySelector(): when using it to select tag name, it would jsut selct only the first one

// document.querySelector('#task-title'); //selects the element id
// document.querySelector('.task-title'); //selects the element class
// document.querySelector('h5'); //selects the first h5

// //styling
// document.querySelector('li').style.color = 'green'; 
// document.querySelector('ul li').style.color = 'blue'; 

// document.querySelector("li:last-child").style.color = "blue"; 
// document.querySelector("li:nth-child(4)").style.color = "blue"; 

// // because querySelector is a single element selector, if we use even and odd on the nth-child, it would only select the first

// document.querySelector("li:nth-child(even)").style.background = "blue"; 


//////Mulltiple Selectors: getElementsByClassName
//on Global scale
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.background = 'yellow';
// items[0].textContent = 'Eebru';
 
// //this is more particular to the class names inside of the ul
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// // getElementByTagName:
// document.getElementsByTagName('li');



//querySelectorAll: returns a nodeList

// document.querySelectorAll('ul.collection li.collection-item'); //it accepts typical css selection, somearray methods can be used on it, but it's stilla not an array

//   const liEven = document.querySelectorAll('li:nth-child(even)');
//   const liOdd = document.querySelectorAll('li:nth-child(odd)');

// liEven.forEach(cur => {
//     cur.style.background = '#f4f4f4'
// })

// for (let i = 0; i < liOdd.length; i++) liOdd[i].style.background = '#ccc'


 /////Traversing the DOM
 let val;

const list = document.querySelector('ul.collection');
const listItems = document.querySelector('li.collection-item:first-child');

val = listItems;
val = list;

//childnodes, which includes all the line-breaks
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;


//meaning of numbers that nodeType returns
//1: Element
//2: Attribute (deprecated)
//3: Text node
//8: comment
//9: Document itself
//10: Doctype

//children, which returns HTML collection
val = list.children;
val = list.children[1].textContent = 'Eebru'; //on index 1

///Children of children
val = list.children[0].children[0].id = 'Test'; 
val = list.children[0].children[0]; 

//firstChild
val = list.firstChild;
val = list.firstElementChild;

//lastchild
val = list.lastChild;
val = list.lastElementChild;

//counting child element
val = list.childElementCount;


///////////Parent Nodes
val = listItems.parentNode;
val = listItems.parentElement;
val = listItems.parentElement.parentElement;


////Next siblings
val = listItems.nextSibling;
val = listItems.nextElementSibling;
val = listItems.nextElementSibling.nextElementSibling;

//Previous sibling
val = listItems.previousSibling;
val = listItems.previousElementSibling;
// val = listItems.previousElementSibling.nextElementSibling;


console.log(val); 