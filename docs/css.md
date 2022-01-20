# CSS 学习之路

---

## CSS 学习笔记

### 1. CSS 语法

```css
Selector Declaration   Declaration
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
