# Tailwind CSS用法

## 文本修饰

$$
在看这篇用法之前，你应该对css属性有所了解🎈🎈
$$

对于本文，与其说它是一片文章，更不如说它是一篇==速查表==

在本文中，列出了很多常用的`tailwind css`用法，详情如下：

## 文字大小

```css
text-[Arbitrary values]
```

|  text-xs  | font-size: 0.75rem; /* 12px */ line-height: 1rem; /* 16px */ |
| :-------: | :----------------------------------------------------------: |
|  text-sm  | font-size: 0.875rem; /* 14px */ line-height: 1.25rem; /* 20px */ |
| text-base | font-size: 1rem; /* 16px */ line-height: 1.5rem; /* 24px */  |
|  text-lg  | font-size: 1.125rem; /* 18px */ line-height: 1.75rem; /* 28px */ |
|  text-xl  | font-size: 1.25rem; /* 20px */ line-height: 1.75rem; /* 28px */ |
| text-2xl  | font-size: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */  |
| text-3xl  | font-size: 1.875rem; /* 30px */ line-height: 2.25rem; /* 36px */ |
| text-4xl  | font-size: 2.25rem; /* 36px */ line-height: 2.5rem; /* 40px */ |
| text-5xl  |         font-size: 3rem; /* 48px */ line-height: 1;          |
| text-6xl  |        font-size: 3.75rem; /* 60px */ line-height: 1;        |
| text-7xl  |        font-size: 4.5rem; /* 72px */ line-height: 1;         |
| text-8xl  |         font-size: 6rem; /* 96px */ line-height: 1;          |
| text-9xl  |         font-size: 8rem; /* 128px */ line-height: 1;         |

 use `hover:text-base` to only apply the `text-base` utility on hover.

```html
<p class="text-sm hover:text-base">   <!-- ... --> </p>
```

### 定义主题

```js
// tailwind.config.js
module.exports = {
  theme: {
+   fontSize: {
+     sm: '0.8rem',
+     base: '1rem',
+     xl: '1.25rem',
+     '2xl': '1.563rem',
+     '3xl': '1.953rem',
+     '4xl': '2.441rem',
+     '5xl': '3.052rem',
+   }
  }
}
```

## 字体族名

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| font-sans  | font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono  | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

## 字体粗细Font Weight

| Class           | Properties        |
| --------------- | ----------------- |
| font-thin       | font-weight: 100; |
| font-extralight | font-weight: 200; |
| font-light      | font-weight: 300; |
| font-normal     | font-weight: 400; |
| font-medium     | font-weight: 500; |
| font-semibold   | font-weight: 600; |
| font-bold       | font-weight: 700; |
| font-extrabold  | font-weight: 800; |
| font-black      | font-weight: 900; |

## 字间距Letter Spacing

| Class            | Properties                |
| ---------------- | ------------------------- |
| tracking-tighter | letter-spacing: -0.05em;  |
| tracking-tight   | letter-spacing: -0.025em; |
| tracking-normal  | letter-spacing: 0em;      |
| tracking-wide    | letter-spacing: 0.025em;  |
| tracking-wider   | letter-spacing: 0.05em;   |
| tracking-widest  | letter-spacing: 0.1em;    |

## 行夹Line Clamp

把[块容器](https://developer.mozilla.org/zh-CN/docs/Glossary/Block)中的内容限制为指定的行数。

| Class           | Properties                                                   |
| --------------- | ------------------------------------------------------------ |
| line-clamp-1    | overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; |
| line-clamp-2    | overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; |
| line-clamp-3    | overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; |
| line-clamp-4    | overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; |
| line-clamp-5    | overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5; |
| line-clamp-6    | overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6; |
| line-clamp-none | overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none; |

## 行高Line Height

| Class           | Properties                       |
| --------------- | -------------------------------- |
| leading-3       | line-height: .75rem; /* 12px */  |
| leading-4       | line-height: 1rem; /* 16px */    |
| leading-5       | line-height: 1.25rem; /* 20px */ |
| leading-6       | line-height: 1.5rem; /* 24px */  |
| leading-7       | line-height: 1.75rem; /* 28px */ |
| leading-8       | line-height: 2rem; /* 32px */    |
| leading-9       | line-height: 2.25rem; /* 36px */ |
| leading-10      | line-height: 2.5rem; /* 40px */  |
| leading-none    | line-height: 1;                  |
| leading-tight   | line-height: 1.25;               |
| leading-snug    | line-height: 1.375;              |
| leading-normal  | line-height: 1.5;                |
| leading-relaxed | line-height: 1.625;              |
| leading-loose   | line-height: 2;                  |

## List Style Image列表图标

用于控制列表项的标记图像

|       Class        |          Properties           |
| :----------------: | :---------------------------: |
|  list-image-none   |    list-style-image: none;    |
| list-image-[(url)] | list-style-image: url(......) |

## List Style Position列表图标位置

|    Class     |          Properties           |
| :----------: | :---------------------------: |
| list-inside  | list-style-position: inside;  |
| list-outside | list-style-position: outside; |

## Text Align文本对齐

|    Class     |      Properties      |
| :----------: | :------------------: |
|  text-left   |  text-align: left;   |
| text-center  | text-align: center;  |
|  text-right  |  text-align: right;  |
| text-justify | text-align: justify; |
|  text-start  |  text-align: start;  |
|   text-end   |   text-align: end;   |

## Text Color文本颜色

| Class            | Properties               |
| ---------------- | ------------------------ |
| text-inherit     | color: inherit;          |
| text-current     | color: currentColor;     |
| text-transparent | color: transparent;      |
| text-black       | color: rgb(0 0 0);       |
| text-white       | color: rgb(255 255 255); |
| text-red-600     | color: rgb(220 38 38);   |
| text-yellow-400  | color: rgb(250 204 21);  |
| text-green-500   | color: rgb(34 197 94);   |
| text-sky-500     | color: rgb(14 165 233);  |

······

## Text Decoration文本修饰

| underline    | text-decoration-line: underline;    |
| ------------ | ----------------------------------- |
| overline     | text-decoration-line: overline;     |
| line-through | text-decoration-line: line-through; |
| no-underline | text-decoration-line: none;         |

······

## Text Decoration Color**文本修饰的颜色**

| Class                  | Properties                           |
| ---------------------- | ------------------------------------ |
| decoration-inherit     | text-decoration-color: inherit;      |
| decoration-current     | text-decoration-color: currentColor; |
| decoration-transparent | text-decoration-color: transparent;  |
| decoration-black       | text-decoration-color: #000;         |
| decoration-white       | text-decoration-color: #fff;         |
| decoration-slate-50    | text-decoration-color: #f8fafc;      |

······

## Text Decoration Style文本修饰的样式

| decoration-solid  | text-decoration-style: solid;  |
| ----------------- | ------------------------------ |
| decoration-double | text-decoration-style: double; |
| decoration-dotted | text-decoration-style: dotted; |
| decoration-dashed | text-decoration-style: dashed; |
| decoration-wavy   | text-decoration-style: wavy;   |

## Text Decoration Thickness文字装饰厚度

| Class                | Properties                            |
| -------------------- | ------------------------------------- |
| decoration-auto      | text-decoration-thickness: auto;      |
| decoration-from-font | text-decoration-thickness: from-font; |
| decoration-0         | text-decoration-thickness: 0px;       |
| decoration-1         | text-decoration-thickness: 1px;       |
| decoration-2         | text-decoration-thickness: 2px;       |
| decoration-4         | text-decoration-thickness: 4px;       |
| decoration-8         | text-decoration-thickness: 8px;       |

## Text Transform文本转换

| Class       | Properties                  |
| ----------- | --------------------------- |
| uppercase   | text-transform: uppercase;  |
| lowercase   | text-transform: lowercase;  |
| capitalize  | text-transform: capitalize; |
| normal-case | text-transform: none;       |

## Text Overflow文本超出

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| truncate      | overflow: hidden; <br />text-overflow: ellipsis;<br /> white-space: nowrap; |
| text-ellipsis | text-overflow: ellipsis;                                     |
| text-clip     | text-overflow: clip;                                         |

## Text Indent文本缩进

| Class      | Properties                       |
| ---------- | -------------------------------- |
| indent-0   | text-indent: 0px;                |
| indent-px  | text-indent: 1px;                |
| indent-0.5 | text-indent: 0.125rem; /* 2px */ |
| indent-1   | text-indent: 0.25rem; /* 4px */  |
| indent-1.5 | text-indent: 0.375rem; /* 6px */ |

## Vertical Align垂直对齐

| Class             | Properties                   |
| ----------------- | ---------------------------- |
| align-baseline    | vertical-align: baseline;    |
| align-top         | vertical-align: top;         |
| align-middle      | vertical-align: middle;      |
| align-bottom      | vertical-align: bottom;      |
| align-text-top    | vertical-align: text-top;    |
| align-text-bottom | vertical-align: text-bottom; |
| align-sub         | vertical-align: sub;         |
| align-super       | vertical-align: super;       |

# size尺寸

## Width宽度

值类型宽度

| Class        | Properties                 |
| ------------ | -------------------------- |
| w-0          | width: 0px;                |
| w-px         | width: 1px;                |
| w-0.5        | width: 0.125rem; /* 2px */ |
| w-auto       | width: auto;               |
| w-1/2        | width: 50%;                |
| w-{fraction} | width: n%;                 |

特殊类型宽度

| Class    | Properties          |
| -------- | ------------------- |
| w-full   | width: 100%;        |
| w-screen | width: 100vw;       |
| w-min    | width: min-content; |
| w-max    | width: max-content; |
| w-fit    | width: fit-content; |

## Min-Width最小宽度

| Class      | Properties              |
| ---------- | ----------------------- |
| min-w-0    | min-width: 0px;         |
| min-w-full | min-width: 100%;        |
| min-w-min  | min-width: min-content; |
| min-w-max  | min-width: max-content; |
| min-w-fit  | min-width: fit-content; |

## Max-Width最大宽度

| Class      | Properties                    |
| ---------- | ----------------------------- |
| max-w-0    | max-width: 0rem; /* 0px */    |
| max-w-none | max-width: none;              |
| max-w-xs   | max-width: 20rem; /* 320px */ |
| max-w-full | max-width: 100%;              |
| max-w-min  | max-width: min-content;       |
| max-w-max  | max-width: max-content;       |
| max-w-fit  | max-width: fit-content;       |

下面这些挺适合用在@media 媒体查询时使用的

| max-w-screen-sm  | max-width: 640px;  |
| ---------------- | ------------------ |
| max-w-screen-md  | max-width: 768px;  |
| max-w-screen-lg  | max-width: 1024px; |
| max-w-screen-xl  | max-width: 1280px; |
| max-w-screen-2xl | max-width: 1536px; |

## Height高度

| Class    | Properties                  |
| -------- | --------------------------- |
| h-0      | height: 0px;                |
| h-px     | height: 1px;                |
| h-0.5    | height: 0.125rem; /* 2px */ |
| h-auto   | height: auto;               |
| h-1/2    | height: 50%;                |
| h-full   | height: 100%;               |
| h-screen | height: 100vh;              |
| h-min    | height: min-content;        |
| h-max    | height: max-content;        |

## Min-Height最小高度

| Class        | Properties               |
| ------------ | ------------------------ |
| min-h-0      | min-height: 0px;         |
| min-h-full   | min-height: 100%;        |
| min-h-screen | min-height: 100vh;       |
| min-h-min    | min-height: min-content; |
| min-h-max    | min-height: max-content; |
| min-h-fit    | min-height: fit-content; |

## Max-Height最大高度

| Class        | Properties                      |
| ------------ | ------------------------------- |
| max-h-0      | max-height: 0px;                |
| max-h-px     | max-height: 1px;                |
| max-h-0.5    | max-height: 0.125rem; /* 2px */ |
| max-h-none   | max-height: none;               |
| max-h-full   | max-height: 100%;               |
| max-h-screen | max-height: 100vh;              |
| max-h-min    | max-height: min-content;        |
| max-h-max    | max-height: max-content;        |
| max-h-fit    | max-height: fit-content;        |

# bg背景

## background背景

| Class     | Properties                     |
| --------- | ------------------------------ |
| bg-fixed  | background-attachment: fixed;  |
| bg-local  | background-attachment: local;  |
| bg-scroll | background-attachment: scroll; |

## Background Clip

[background-clip - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-clip-border  | background-clip: border-box;  |
| bg-clip-padding | background-clip: padding-box; |
| bg-clip-content | background-clip: content-box; |
| bg-clip-text    | background-clip: text;        |

## Background Color背景颜色

| Class          | Properties                          |
| -------------- | ----------------------------------- |
| bg-inherit     | background-color: inherit;          |
| bg-current     | background-color: currentColor;     |
| bg-transparent | background-color: transparent;      |
| bg-black       | background-color: rgb(0 0 0);       |
| bg-white       | background-color: rgb(255 255 255); |
| bg-red-500     | background-color: rgb(239 68 68);   |

## Background Origin

[background-origin - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin)

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| bg-origin-border  | background-origin: border-box;  |
| bg-origin-padding | background-origin: padding-box; |
| bg-origin-content | background-origin: content-box; |

## Background Position

| Class           | Properties                         |
| --------------- | ---------------------------------- |
| bg-bottom       | background-position: bottom;       |
| bg-center       | background-position: center;       |
| bg-left         | background-position: left;         |
| bg-left-bottom  | background-position: left bottom;  |
| bg-left-top     | background-position: left top;     |
| bg-right        | background-position: right;        |
| bg-right-bottom | background-position: right bottom; |
| bg-right-top    | background-position: right top;    |
| bg-top          | background-position: top;          |

## Background Repeat

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-repeat       | background-repeat: repeat;    |
| bg-no-repeat    | background-repeat: no-repeat; |
| bg-repeat-x     | background-repeat: repeat-x;  |
| bg-repeat-y     | background-repeat: repeat-y;  |
| bg-repeat-round | background-repeat: round;     |
| bg-repeat-space | background-repeat: space;     |

## Background Size

| Class      | Properties                |
| ---------- | ------------------------- |
| bg-auto    | background-size: auto;    |
| bg-cover   | background-size: cover;   |
| bg-contain | background-size: contain; |

## Background Image

| Class             | Properties                                                   |
| ----------------- | ------------------------------------------------------------ |
| bg-none           | background-image: none;                                      |
| bg-gradient-to-t  | background-image: linear-gradient(to top, var(--tw-gradient-stops)); |
| bg-gradient-to-tr | background-image: linear-gradient(to top right, var(--tw-gradient-stops)); |
| bg-gradient-to-r  | background-image: linear-gradient(to right, var(--tw-gradient-stops)); |
| bg-gradient-to-br | background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); |
| bg-gradient-to-b  | background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); |
| bg-gradient-to-bl | background-image: linear-gradient(to bottom left, var(--tw-gradient-stops)); |
| bg-gradient-to-l  | background-image: linear-gradient(to left, var(--tw-gradient-stops)); |
| bg-gradient-to-tl | background-image: linear-gradient(to top left, var(--tw-gradient-stops)); |

## Gradient Color Stops 渐变色

[Gradient Color Stops](https://www.tailwindcss.cn/docs/gradient-color-stops)

```css
bg-gradient-to-l from-red-500 to-sky-500
```

## Border Width

| Class      | Properties                                       |
| ---------- | ------------------------------------------------ |
| border-0   | border-width: 0px;                               |
| border-2   | border-width: 2px;                               |
| border     | border-width: 1px;                               |
| border-x-0 | border-left-width: 0px; border-right-width: 0px; |
| border-x-2 | border-left-width: 2px; border-right-width: 2px; |
| border-s-4 | border-inline-start-width: 4px;                  |
| border-e-8 | border-inline-end-width: 8px;                    |
| border-t   | border-top-width: 1px;                           |
| border-r-0 | border-right-width: 0px;                         |

## Border Color 边框颜色

| Class               | Properties                             |
| ------------------- | -------------------------------------- |
| border-inherit      | border-color: inherit;                 |
| border-current      | border-color: currentColor;            |
| border-transparent  | border-color: transparent;             |
| border-black        | border-color: rgb(0 0 0);              |
| border-white        | border-color: rgb(255 255 255);        |
| border-t-red-500    | border-top-color: rgb(239 68 68);      |
| border-r-gray-400   | border-right-color: rgb(156 163 175);  |
| border-b-yellow-200 | border-bottom-color: rgb(254 240 138); |
| border-b-cyan-100   | border-bottom-color: rgb(207 250 254); |

## Border Style边框样式

| Class         | Properties            |
| ------------- | --------------------- |
| border-solid  | border-style: solid;  |
| border-dashed | border-style: dashed; |
| border-dotted | border-style: dotted; |
| border-double | border-style: double; |
| border-hidden | border-style: hidden; |
| border-none   | border-style: none;   |

## Divide Width

在两元素之间添加border

| Class            | Properties                                       |
| ---------------- | ------------------------------------------------ |
| divide-x-0       | border-right-width: 0px; border-left-width: 0px; |
| divide-x-2       | border-right-width: 0px; border-left-width: 2px; |
| divide-y-0       | border-top-width: 0px; border-bottom-width: 0px; |
| divide-y-2       | border-top-width: 2px; border-bottom-width: 0px; |
| divide-y-reverse | --tw-divide-y-reverse: 1;                        |
| divide-x-reverse | --tw-divide-x-reverse: 1;                        |

## Divide Color

在两元素之间添加的border的颜色

| Class              | Properties                      |
| ------------------ | ------------------------------- |
| divide-inherit     | border-color: inherit;          |
| divide-current     | border-color: currentColor;     |
| divide-transparent | border-color: transparent;      |
| divide-black       | border-color: rgb(0 0 0);       |
| divide-white       | border-color: rgb(255 255 255); |

## Divide Style

在两元素之间添加的border的样式

| Class                 | Properties            |
| --------------------- | --------------------- |
| divide-solid > * + *  | border-style: solid;  |
| divide-dashed > * + * | border-style: dashed; |
| divide-dotted > * + * | border-style: dotted; |
| divide-double > * + * | border-style: double; |
| divide-none > * + *   | border-style: none;   |

## outline轮廓

[outline | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)

| Class     | Properties          |
| --------- | ------------------- |
| outline-0 | outline-width: 0px; |
| outline-1 | outline-width: 1px; |
| outline-2 | outline-width: 2px; |
| outline-4 | outline-width: 4px; |
| outline-8 | outline-width: 8px; |

## Outline Color轮廓颜色

| Class               | Properties                   |
| ------------------- | ---------------------------- |
| outline-inherit     | outline-color: inherit;      |
| outline-current     | outline-color: currentColor; |
| outline-transparent | outline-color: transparent;  |
| outline-black       | outline-color: #000;         |
| outline-white       | outline-color: #fff;         |

## Outline Style轮廓的样式

| Class          | Properties                                           |
| -------------- | ---------------------------------------------------- |
| outline-none   | outline: 2px solid transparent; outline-offset: 2px; |
| outline        | outline-style: solid;                                |
| outline-dashed | outline-style: dashed;                               |
| outline-dotted | outline-style: dotted;                               |
| outline-double | outline-style: double;                               |

## Outline Offset 轮廓偏移量

| Class            | Properties           |
| ---------------- | -------------------- |
| outline-offset-0 | outline-offset: 0px; |
| outline-offset-1 | outline-offset: 1px; |
| outline-offset-2 | outline-offset: 2px; |
| outline-offset-4 | outline-offset: 4px; |
| outline-offset-8 | outline-offset: 8px; |

## Ring Width阴影轮廓环

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| ring-0     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-1     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-2     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring       | box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-4     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-8     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-inset | --tw-ring-inset: inset;                                      |

## Ring Color阴影轮廓环颜色

| Class            | Properties                         |
| ---------------- | ---------------------------------- |
| ring-inherit     | --tw-ring-color: inherit;          |
| ring-current     | --tw-ring-color: currentColor;     |
| ring-transparent | --tw-ring-color: transparent;      |
| ring-black       | --tw-ring-color: rgb(0 0 0);       |
| ring-white       | --tw-ring-color: rgb(255 255 255); |
| ring-emerald-500 | --tw-ring-color: rgb(16 185 129);  |
| ring-sky-100     | --tw-ring-color: rgb(224 242 254); |
| ring-purple-200  | --tw-ring-color: rgb(233 213 255); |
| ring-rose-900    | --tw-ring-color: rgb(136 19 55);   |

## Ring Offset Width阴影轮廓环偏移

[Ring Offset Width | TailwindCSS中文网](https://www.tailwindcss.cn/docs/ring-offset-width)

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| ring-offset-0 | --tw-ring-offset-width: 0px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-1 | --tw-ring-offset-width: 1px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-2 | --tw-ring-offset-width: 2px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-4 | --tw-ring-offset-width: 4px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-8 | --tw-ring-offset-width: 8px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |

## Ring Offset Width偏移阴影轮廓环颜色

| Class                   | Properties                                                   |
| ----------------------- | ------------------------------------------------------------ |
| ring-offset-inherit     | --tw-ring-offset-color: inherit; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-current     | --tw-ring-offset-color: currentColor; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-transparent | --tw-ring-offset-color: transparent; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-black       | --tw-ring-offset-color: #000; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-white       | --tw-ring-offset-color: #fff; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |

# Effects

## Box Shadow盒子阴影

| Class        | Properties                                                   |
| ------------ | ------------------------------------------------------------ |
| shadow-sm    | box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);                   |
| shadow       | box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); |
| shadow-md    | box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); |
| shadow-lg    | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); |
| shadow-xl    | box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); |
| shadow-2xl   | box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);             |
| shadow-inner | box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);             |
| shadow-none  | box-shadow: 0 0 #0000;                                       |

## Box Shadow Color盒子阴影颜色

| Class              | Properties                       |
| ------------------ | -------------------------------- |
| shadow-inherit     | --tw-shadow-color: inherit;      |
| shadow-current     | --tw-shadow-color: currentColor; |
| shadow-transparent | --tw-shadow-color: transparent;  |
| shadow-black       | --tw-shadow-color: #000;         |
| shadow-white       | --tw-shadow-color: #fff;         |

## Opacity透明

| Class      | Properties     |
| ---------- | -------------- |
| opacity-0  | opacity: 0;    |
| opacity-5  | opacity: 0.05; |
| opacity-10 | opacity: 0.1;  |
| opacity-20 | opacity: 0.2;  |
| opacity-25 | opacity: 0.25; |

## Mix Blend Mode混合模式

非常有意思的一个属性，可以考虑一下抖音的图标如何利用这个来实现

<img src="https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/logo-horizontal-small.svg" alt="抖音logo" style="zoom:200%;" />

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| mix-blend-normal       | mix-blend-mode: normal;       |
| mix-blend-multiply     | mix-blend-mode: multiply;     |
| mix-blend-screen       | mix-blend-mode: screen;       |
| mix-blend-overlay      | mix-blend-mode: overlay;      |
| mix-blend-darken       | mix-blend-mode: darken;       |
| mix-blend-lighten      | mix-blend-mode: lighten;      |
| mix-blend-color-dodge  | mix-blend-mode: color-dodge;  |
| mix-blend-color-burn   | mix-blend-mode: color-burn;   |
| mix-blend-hard-light   | mix-blend-mode: hard-light;   |
| mix-blend-soft-light   | mix-blend-mode: soft-light;   |
| mix-blend-difference   | mix-blend-mode: difference;   |
| mix-blend-exclusion    | mix-blend-mode: exclusion;    |
| mix-blend-hue          | mix-blend-mode: hue;          |
| mix-blend-saturation   | mix-blend-mode: saturation;   |
| mix-blend-color        | mix-blend-mode: color;        |
| mix-blend-luminosity   | mix-blend-mode: luminosity;   |
| mix-blend-plus-lighter | mix-blend-mode: plus-lighter; |

## Background Blend Mode背景混合模式

| Class                | Properties                          |
| -------------------- | ----------------------------------- |
| bg-blend-normal      | background-blend-mode: normal;      |
| bg-blend-multiply    | background-blend-mode: multiply;    |
| bg-blend-screen      | background-blend-mode: screen;      |
| bg-blend-overlay     | background-blend-mode: overlay;     |
| bg-blend-darken      | background-blend-mode: darken;      |
| bg-blend-lighten     | background-blend-mode: lighten;     |
| bg-blend-color-dodge | background-blend-mode: color-dodge; |
| bg-blend-color-burn  | background-blend-mode: color-burn;  |
| bg-blend-hard-light  | background-blend-mode: hard-light;  |
| bg-blend-soft-light  | background-blend-mode: soft-light;  |
| bg-blend-difference  | background-blend-mode: difference;  |
| bg-blend-exclusion   | background-blend-mode: exclusion;   |
| bg-blend-hue         | background-blend-mode: hue;         |
| bg-blend-saturation  | background-blend-mode: saturation;  |
| bg-blend-color       | background-blend-mode: color;       |
| bg-blend-luminosity  | background-blend-mode: luminosity;  |

# Filters过滤器，又名滤镜

## Blur模糊

| Class     | Properties          |
| --------- | ------------------- |
| blur-none | filter: blur(0);    |
| blur-sm   | filter: blur(4px);  |
| blur      | filter: blur(8px);  |
| blur-md   | filter: blur(12px); |
| blur-lg   | filter: blur(16px); |
| blur-xl   | filter: blur(24px); |
| blur-2xl  | filter: blur(40px); |
| blur-3xl  | filter: blur(64px); |

## Brightness亮度

| Class          | Properties                     |
| -------------- | ------------------------------ |
| brightness-0   | filter: brightness(0);         |
| brightness-50  | filter: brightness(.5);        |
| brightness-75  | filter: brightness(.75);       |
| brightness-90  | filter: brightness(.9);        |
| brightness-95  | filter: brightness(.95);       |
| brightness-100 | filter: brightness(1);Contrast |

## Contrast对比度

| Class        | Properties              |
| ------------ | ----------------------- |
| contrast-0   | filter: contrast(0);    |
| contrast-50  | filter: contrast(.5);   |
| contrast-75  | filter: contrast(.75);  |
| contrast-100 | filter: contrast(1);    |
| contrast-125 | filter: contrast(1.25); |
| contrast-150 | filter: contrast(1.5);  |
| contrast-200 | filter: contrast(2);    |

## Drop Shadow阴影

| Class            | Properties                                                   |
| ---------------- | ------------------------------------------------------------ |
| drop-shadow-sm   | filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));            |
| drop-shadow      | filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06)); |
| drop-shadow-md   | filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); |
| drop-shadow-lg   | filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); |
| drop-shadow-xl   | filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)); |
| drop-shadow-2xl  | filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));          |
| drop-shadow-none | filter: drop-shadow(0 0 #0000);                              |

## Grayscale灰度

| Class       | Properties               |
| ----------- | ------------------------ |
| grayscale-0 | filter: grayscale(0);    |
| grayscale   | filter: grayscale(100%); |

## Hue Rotate色调

| Class          | Properties                  |
| -------------- | --------------------------- |
| hue-rotate-0   | filter: hue-rotate(0deg);   |
| hue-rotate-15  | filter: hue-rotate(15deg);  |
| hue-rotate-30  | filter: hue-rotate(30deg);  |
| hue-rotate-60  | filter: hue-rotate(60deg);  |
| hue-rotate-90  | filter: hue-rotate(90deg);  |
| hue-rotate-180 | filter: hue-rotate(180deg); |

## Invert反转

| Class    | Properties            |
| -------- | --------------------- |
| invert-0 | filter: invert(0);    |
| invert   | filter: invert(100%); |

## Saturate饱和度

| Class        | Properties             |
| ------------ | ---------------------- |
| saturate-0   | filter: saturate(0);   |
| saturate-50  | filter: saturate(.5);  |
| saturate-100 | filter: saturate(1);   |
| saturate-150 | filter: saturate(1.5); |
| saturate-200 | filter: saturate(2);   |

## Sepia怀旧

| Class   | Properties           |
| ------- | -------------------- |
| sepia-0 | filter: sepia(0);    |
| sepia   | filter: sepia(100%); |

## Backdrop Blur背景模糊

| Class              | Properties                   |
| ------------------ | ---------------------------- |
| backdrop-blur-none | backdrop-filter: blur(0);    |
| backdrop-blur-sm   | backdrop-filter: blur(4px);  |
| backdrop-blur      | backdrop-filter: blur(8px);  |
| backdrop-blur-md   | backdrop-filter: blur(12px); |
| backdrop-blur-lg   | backdrop-filter: blur(16px); |
| backdrop-blur-xl   | backdrop-filter: blur(24px); |
| backdrop-blur-2xl  | backdrop-filter: blur(40px); |
| backdrop-blur-3xl  | backdrop-filter: blur(64px); |

## backdrop-filter背景亮度

| Class                   | Properties                         |
| ----------------------- | ---------------------------------- |
| backdrop-brightness-0   | backdrop-filter: brightness(0);    |
| backdrop-brightness-50  | backdrop-filter: brightness(.5);   |
| backdrop-brightness-75  | backdrop-filter: brightness(.75);  |
| backdrop-brightness-90  | backdrop-filter: brightness(.9);   |
| backdrop-brightness-95  | backdrop-filter: brightness(.95);  |
| backdrop-brightness-100 | backdrop-filter: brightness(1);    |
| backdrop-brightness-105 | backdrop-filter: brightness(1.05); |
| backdrop-brightness-110 | backdrop-filter: brightness(1.1);  |
| backdrop-brightness-125 | backdrop-filter: brightness(1.25); |
| backdrop-brightness-150 | backdrop-filter: brightness(1.5);  |
| backdrop-brightness-200 | backdrop-filter: brightness(2);    |

## Backdrop Contrast背景对比度

| Class                 | Properties                       |
| --------------------- | -------------------------------- |
| backdrop-contrast-0   | backdrop-filter: contrast(0);    |
| backdrop-contrast-50  | backdrop-filter: contrast(.5);   |
| backdrop-contrast-75  | backdrop-filter: contrast(.75);  |
| backdrop-contrast-100 | backdrop-filter: contrast(1);    |
| backdrop-contrast-125 | backdrop-filter: contrast(1.25); |
| backdrop-contrast-150 | backdrop-filter: contrast(1.5);  |
| backdrop-contrast-200 | backdrop-filter: contrast(2);    |

## Backdrop Grayscale北京灰度

| Class                | Properties                        |
| -------------------- | --------------------------------- |
| backdrop-grayscale-0 | backdrop-filter: grayscale(0);    |
| backdrop-grayscale   | backdrop-filter: grayscale(100%); |

## Backdrop Hue Rotate背景色调

| Class                   | Properties                           |
| ----------------------- | ------------------------------------ |
| backdrop-hue-rotate-0   | backdrop-filter: hue-rotate(0deg);   |
| backdrop-hue-rotate-15  | backdrop-filter: hue-rotate(15deg);  |
| backdrop-hue-rotate-30  | backdrop-filter: hue-rotate(30deg);  |
| backdrop-hue-rotate-60  | backdrop-filter: hue-rotate(60deg);  |
| backdrop-hue-rotate-90  | backdrop-filter: hue-rotate(90deg);  |
| backdrop-hue-rotate-180 | backdrop-filter: hue-rotate(180deg); |

## Backdrop Invert背景色反向

| Class             | Properties                     |
| ----------------- | ------------------------------ |
| backdrop-invert-0 | backdrop-filter: invert(0);    |
| backdrop-invert   | backdrop-filter: invert(100%); |

## Backdrop Opacity背景透明

| Class               | Properties                      |
| ------------------- | ------------------------------- |
| backdrop-opacity-0  | backdrop-filter: opacity(0);    |
| backdrop-opacity-5  | backdrop-filter: opacity(0.05); |
| backdrop-opacity-10 | backdrop-filter: opacity(0.1);  |
| backdrop-opacity-20 | backdrop-filter: opacity(0.2);  |
| backdrop-opacity-25 | backdrop-filter: opacity(0.25); |
| backdrop-opacity-30 | backdrop-filter: opacity(0.3);  |
| backdrop-opacity-40 | backdrop-filter: opacity(0.4);  |
| backdrop-opacity-50 | backdrop-filter: opacity(0.5);  |

## Backdrop Saturate背景饱和度

| Class                 | Properties                      |
| --------------------- | ------------------------------- |
| backdrop-saturate-0   | backdrop-filter: saturate(0);   |
| backdrop-saturate-50  | backdrop-filter: saturate(.5);  |
| backdrop-saturate-100 | backdrop-filter: saturate(1);   |
| backdrop-saturate-150 | backdrop-filter: saturate(1.5); |
| backdrop-saturate-200 | backdrop-filter: saturate(2);   |

## Backdrop Sepia背景暖色

| Class            | Properties                    |
| ---------------- | ----------------------------- |
| backdrop-sepia-0 | backdrop-filter: sepia(0);    |
| backdrop-sepia   | backdrop-filter: sepia(100%); |
