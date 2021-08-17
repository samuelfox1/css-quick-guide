# Selectors

- [Universal](#universal)
- [Type](#type)
- [Class](#class)
- [Id](#id)
- [Attribute](#attribute)
- [Pseudo-class](#pseudo-class)

<br>

### Universal
- All elements on the page
```
* { 
    property: value;
}
```

### Type
- All p elements on the page
```
p {
    property: value;
} 
```

### Class 
- All elements with the class name.
- '.' prepends the class name.
- Elements can have multiple classes, with class names seperated by >a space. 
```
<p class="green bold">Hello World!</p>
```
```
.green {
  color: green;
}
 
.bold {
  font-weight: bold;
}
```

### Id
- A single element with the id name
- '#' prepends the id name.
- An id name must be unique for each element.
```
<h1 id='article-title'> CSS Notes </h1>
```
```
#article-title {
    property: value;
}
```

### Attribute
- The attribute selector can be used to target HTML elements that >already contain attributes.
```
<img src='/images/seasons/cold/winter.jpg'>
<img src='/images/seasons/warm/summer.jpg'>
```
```
img[src*='winter'] {
    property: value;
}
 
img[src*='summer'] {
    property: value;
}
```

### Pseudo-class
- Apply styling based on user interaction.
- Make background color lime when user hovers over all p elements.
```
p:hover {
  background-color: lime;
}
```
---

#### [Back](../readme.md#css-quick-guide) (IDE)
#### [Back](https://github.com/samuelfox1/css-quick-guide/) (gitHub)