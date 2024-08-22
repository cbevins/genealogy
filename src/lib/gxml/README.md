# Gxml - Generic XML

Gxml is a tiny set of functions for programatically creating generic, nested
XML-like structures that are subsequently converted into HTML, SVG, or other XML code and displayed in a browser or written to a file.

Gxml was specifically designed to make the creation of detailed, complex SVG structures simpler and more manageable.  The driving use-case for Gxml is the construction of SVG elements that may be both:

- displayed within an HTML document (using Svelte's @HTML directive), and
- downloaded to the local file system as an SVG image file.

However, it is just as adept at creating any HTML or other XML-compliant instruction or data set.

##  Basics

Gxml is based entirely upon a very simple Javascript data object, the 'el' (for 'element'):

```js
const el = {el: <string>, els[]}
```

The <code>el</code> is any valid SVG/HTML/XML element name, like <code>svg</code>, <code>rect</code>, <code>circle</code>, <code>line</code>, <code>path</code>, <code>text</code>, <code>defs</code>, <code>g</code>, etc.  Similary, it could also be an HTML element such as <code>div</code>, <code>p</code>, <code>h1</code>, <code>button</code>, and so forth.

The <code>els</code> is an array of its child <code>el<code>.

You may supply any other attributes as appropriate to the <code>el</code>.  For  example:

```js
const flag = {el: 'rect', width: 200, height: 100, fill: 'blue', stroke: 'black', els: [
    {el: 'rect', width: 200, height: 50, x: 0, y: 50, fill: 'green', els: []},
    {el: 'circle', cx: 50, cy: 50, r: 50, fill: 'yellow', els: []},
    {el: 'text', x: 100, y: 75, 'text-anchor': 'middle', 'font-size': 24, els: [
        {el: 'inner', content: 'Live Free or Die'}]
    }
]}
```

creates a simple flag from a &lt;rect&gt; that contains a nested &lt;rect&gt;, &lt;circle&gt;, and some &lt;text&gt;.

The Gxml elements can be composed in any order, traversed to locate child object by their 'id' (or any other) attribute, and created using logical and looping structures.

## gxmlStr()

The **gxmlStr()** function (in **gxmlStr.js**) generates XML text from an array of Gxml objects:

```js
const xml = gxmlStr(gxmlArray, indent=0, eol='\n)
```
where:
- **gxmlArray** is a reference to the toplevel gxml object,
- **indent** is the number of spaces to indent each nesting level, and
- **eol** is the end-of-line character added to the end of each element (change **eol** to '' for no line breaks)

## runNestedExampleGxml.js

**nestedExampleGxml.js** defines some nested, scaled, and rotated SVG content.

**runNestedExampleGxml.js** uses the above to write resultant XML (SVG) to stdout:

```bash
node runNestedExampleGxml.js > nestedExampleGxml.svg
```

## runPortrait.js

This script generates an SVG formatted as a poster (in portrait mode) that scales
its arbitrary content to fit a specific sheet width and variable height.

**portraitLayoutSpecs.js** defines the general layout of a poster with sheet, border,
header, footer, left, right, and content regions.

**gridContentExampleGxml.js** defines some example content (a grid with cell coordinates)to be embedded within the poster's 'content' region.

**portraitLayout.js** computes the final geometry of the poster and scales the
provided content to fit within the poster's content region.

**portraitGxml.js** uses the final layout and the example content Gxml to generate the final poster Gxml containing the nested SVG regions.

**runPortrait.js** demonstrates how to perform the above actions and generates the
final SVG in 6 statements.  The resultant file may be read by Inkscape or used
within a browser.

```bash
node runPortrait.js > portrait.svg
```
