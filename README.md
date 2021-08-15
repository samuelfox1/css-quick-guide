# CSS Quick Guide
- Notes from the [codeacademy.com](https://www.codeacademy.com/courses/learn-css) course

# Table of Contents
1. [CSS Anatomy](#css-anatomy)
0. [Selectors](#selectors)
0. - [Type](#type)
0. - [Class](#class)
0. - [Id](#id)
0. - [Attrobute](#attribute)
0. - [Pseudo-class](#pseudo-class)
0. [Selector Chaining](#selector-chaining)
0. [Descendant Combinator](#descendant-combinator)
0. [Multiple Selectors](#multiple-selectors)
0. [Selector Specificity](#selector-specificity)
<!-- 0. [](#) -->


## CSS Anatomy
><img src='https://static-assets.codecademy.com/Courses/Learn-CSS/Setup-and-Syntax/CSS_Anatomy-v2-nobgfill.svg' width='600'>

<br>

## Selectors
>### Universal
>- All elements on the page
>```
>* { 
>  font-family: Verdana;
>}
>```
>
>### Type
>- All p elements on the page
>```
>p {
>    visibility: hidden;
>} 
>```
>
>### Class 
>- All elements with the class name.
>- '.' prepends the class name.
>- Elements can have multiple classes, with class names seperated by >a space. 
>```
><p class="green bold">Hello World!</p>
>```
>```
>.green {
>  color: green;
>}
> 
>.bold {
>  font-weight: bold;
>}
>```
>
>### Id
>- A single element with the id name
>- '#' prepends the id name.
>- An id name must be unique for each element.
>```
><h1 id='article-title'> CSS Notes </h1>
>```
>```
>#article-title {
> font-family: cursive;
>}
>```
>
>### Attribute
>- The attribute selector can be used to target HTML elements that >already contain attributes.
>```
><img src='/images/seasons/cold/winter.jpg'>
><img src='/images/seasons/warm/summer.jpg'>
>```
>```
>img[src*='winter'] {
>  height: 50px;
>}
> 
>img[src*='summer'] {
>  height: 100px;
>}
>```
>
>### Pseudo-class
>- Apply styling based on user interaction.
>- Make background color lime when user hovers over all p elements.
>```
>p:hover {
>  background-color: lime;
>}
>```
>---


## Selector Chaining
>- Combining multiple selectors to increase specificity
>- Target all p elements with the class of bold
>```
>p.bold {
>    background-color: yellow;
>}
>``` 
>---

## Descendant Combinator
>- Selecting elements that are nested within other HTML elements, also known as descendants.
>```
><ul class='main-list'>
>  <li> one </li>
>  <li> two </li>
>  <li> three </li>
></ul>
>```
>- select all li decendants of the element with a class name of main-list 
>```
>.main-list li {
>    color: red;
>}
>```
> ---

## Multiple Selectors
>- apply declarations to multible selectors.
>- selectors seperated with a comma 
>```
>p, h1 {
>    font-family: Georgia;
>}
>```
>---

## Selector Specificity
>- Specificity is the order by which the browser decides which CSS >styles will be displayed. A best practice in CSS is to style >elements while using the lowest degree of specificity so that if an >element needs a new style, it is easy to override.
>
>
>| - | selector |  overrides |
>|---|---|---|
>| 1 | chaining | id, class, type |
>| 2 | id | class, type |
>| 3 | class | type |
>| 4 | type | - |
>---

#### [Back to the top ^ ](#css-quick-guide)