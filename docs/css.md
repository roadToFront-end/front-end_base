# CSS 学习之路

---

## Less 一个 CSS 预处理器

### 教程

- [Less 教程](https://www.w3cschool.cn/less/)
- [Less It's CSS, with just a little more](https://lesscss.org/)
- [LESS Tutorial](https://www.tutorialspoint.com/less/index.htm)

Lessc 编译 `.less` 文件到 `.css` 文件：

```SHELL
lessc ../css/less.less > ../css/less.css
```

## CSS tips

### CSS 单位的区分

1. `px` 即 `pixel` 的缩写，意为像素，
2. `%` 一般宽泛的讲是相对于父元素，但是并不是十分准确， `100%=width`，意味着和父元素的大小比例是一样；
3. `em` 相对单位，`4em` 元素大小的 4 倍；
4. `rem` `CSS3` 新单位，相对于根元素的大小，`4rem` 根元素大小的 4 倍；
5. `vh` `CSS3` 新单位，视窗高度，`1vh` 等于视窗宽度的 1%；
6. `vw` `CSS3` 新单位，视窗宽度，相对于视口的宽度或高度中较小的那个。

#### CSS 还有哪些长度单位？

`in` 寸，`cm` 厘米，`mm` 毫米，`pt` point、大约 1/72 寸，`pc` pica、大约 6pt、1/6 寸；

对应关系：`1in = 2.54cm = 25.4 mm = 72pt = 6pc = 96px`

### CSS 的定位属性 `postion`

元素可以使用的 `top`，`bottom`，`left` 和 `right` 属性定位。然而，这些属性无法工作，除非是先设定 `position` 属性。他们也有不同的工作方式，这取决于定位方法。

#### `postion` 属性的五种值

```CSS
static   ：静态定位，默认值，即没有定位，遵循正常的文档流对象；
fixed    ：元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的，它也不会移动；
relative ：相对定位元素的定位是相对其正常的位置；
absolute ：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于 <html> ，
           定位使元素的位置与文档流无关，因此不占据空间，
           定位的元素和其他元素重叠；
sticky   ：粘、粘贴，所以可以把它称之为“粘性定位”，
           `position: sticky;` 基于用户的滚动位置来定位，
           粘性定位的元素是依赖于用户的滚动，在 `position:relative` 与 `position:fixed` 定位之间切换，
           它的行为就像 `position:relative;` 而当页面滚动超出目标区域时，它的表现就像 `position:fixed;`，它会固定在目标位置，
           元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
           这个特定阈值指的是 `top`, `right`, `bottom` 或 `left` 之一，换言之，指定 `top`, `right`, `bottom` 或 `left` 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
```

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
