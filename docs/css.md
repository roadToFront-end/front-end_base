# CSS 学习之路

---

## CSS 学习笔记

### 1. CSS 语法

```css
选择器  声明           声明   
            属性:值        属性:值  
H1       { color:blue; font-size: 12px; }
```

### 2. CSS 和 HTML 嵌入的三种方式

1. 外置独立的 CSS 文件

    ```HTML
    <head>
        <meta charset="utf-8”>
        <title>Document</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/mini.css">
    </head>
    ```

2. 内置在 HTML 文件中

    ```HTML
    <head>
        <meta charset="utf-8”>
        <title>Document</title>
        <style> title { color:red; }</style>
    </head>
    ```

3. HTML 文件内行内定义 CSS

    ```HTML
    <head>
        <meta charset="utf-8”>
        <title style="color: red;">Document</title>
    </head>
    ```

### 3. CSS 层叠样式的选择顺序

```HTML
Inline CSS  >>> External CSS & Internal CSS
```

### 4. 常见选择器的属性

#### 4.1 文本

``` CSS
color
font
font-family
font-size
font-weight
letter-spacing
line-height
text-align
text-decoration
text-indent
text-transform
vertical-align
```

#### 4.2 列表

``` CSS
list-style
list-style-image
list-style-position
list-style-type
```

#### 4.3 背景

``` CSS
backgrooud
background-attachment
background-color
background-image
background-position
background-repeat
```

#### 4.4 显示

``` CSS
display
float
clear
overflow
visibility
```

#### 4.5 位置

``` CSS
position
top
bottom
left
right
z-index
```

#### 4.6 框盒

``` CSS
border
border-color
border-style
border-width
height
margin
padding
width
box-sizing
```
