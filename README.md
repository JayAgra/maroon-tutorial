# maroon-tutorial

## Writing the cursed XML pages

### The boilerplate 😔
ok its not really boilerplate but you must title pages

```html
<h1>page title</h1>
```
<hr>

### Plaintext

To insert plain text, use the following HTML tags
`<p></p>`, `<h1></h1>`, `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>`, `<h6></h6>`. The sizes of each are shown below. Note: the underline in h1 is created by markdown and will not be created by html renderers.

<ul>
<li><h1>h1</h1></li>
<li><h2>h2</h2></li>
<li><h3>h3</h3></li>
<li><h4>h4</h4></li>
<li><h5>h5</h5></li>
<li><h6>h6</h6></li>
<li><p>p</p></li>
</ul>
<br><hr>

### Code Blocks<br>

To insert a code block, use the following formula:

```html
<pre>
<code class="language-@@">
</code>
</pre>
```

In this formula, `@@` represents the language to use. Valid options include `js`, `java`, `sh`, `cpp`, `html`, `xml`, `md`, `text`, and many, [many more](https://highlightjs.readthedocs.io/en/latest/supported-languages.html). _The code within the `code` tags must be tabbed as it should be displayed, not to look proper in the XML._
<br><hr>

### Quiz Sections

**the quiz system is all to be re-written (simplification and removal of IDs)**

```html
<div class="quizSect">
    <span class="qtitle">quiz</span>&emsp;@@<br><br>
    <div class="mcqDiv" id="$$$" data-answer="%%">
        <span>&emsp;<input type="radio" name="$$$-radio" value="a"> &&</span><br>
        <span>&emsp;<input type="radio" name="$$$-radio" value="b"> &&</span><br>
        <span>&emsp;<input type="radio" name="$$$-radio" value="c"> &&</span><br>
        <span>&emsp;<input type="radio" name="$$$-radio" value="d"> &&</span>
    </div>
    <br><button onclick="runQuiz('$$$', this)" data-attempts="0">check</button>
</div>
```

Insert the following where placeholders are:<br>
Where `@@` is present, write the quiz question<br>
Where `$$$` is present, place a random ID. To generate a string to use, you can run `echo "<smash the keyboard here>" | shasum -a 256` and pick a portion of the output to use.<br>
Where `%%` is present, place the answer (a, b, c, or d)<br>
Where `&&`s are present, place the multiple choice options
<br><hr>

### Embedding Remote Content

To embed remote content, use the HTML `iframe` element. Ex: `<iframe src="https://github.com/" width="100%"></iframe>`. Currently, there is no default styling for iframes.<br><hr>

### Registering created pages

For pages to be displayed in the table of contents and to be integrated with the progress-saving mechanism, all created pages must be added to the `pageManifest` in `manifest.js`, the only JavaScript file that is not minified or packed. To register a page, add it in the appropriate order in the `pageManifest` array, using `Page`. 

<ul>
<li>pageTitle (String) is the page title to be displayed in the table of contents. Keep this title succinct. Ex: Intro</li>
<li>fileName (String) is the name of the XML file containing the page, in the src/pages directory. Ex: 01.xml</li>
<li>uniqueID (Number) is any Number, but MUST be unique. Ideally, these numbers would be sequential, but this is not necessary. Do NOT use an id that was used an any previous versions, as it may incorrectly mark pages as read. Ex: 0</li>
</ul><hr><br>

## testing locally

When testing locally, your browser may be sad for 2 reasons<br>

<ol>
<li>local file restrictions</li>
<li>your fs isn't a webserver, proper headers wont be sent</li>
</ol>
To <b>disable local file restrictions</b>, open developer settings and enable the option under security (Safari 17.0 / 19616.1.20.11.3).<br><br>
You must also <b>disable caching</b>. To do this, open the web inspector, and check "Disable Caches" under Network (Safari 17.0 / 19616.1.20.11.3). This is required as each page is loaded through an XHR request to the page's XML file, and some browsers handle this caching differently than resources loaded through standard methods.<br><br>
Now, the page should act <i>more</i> like it would when in production.
