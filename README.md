# maroon-tutorial

## Writing the cursed XML pages
### The boilerplate 😔
### Plaintext
### Code Blocks
### Quiz Sections
### Embedding Remote Content
### Registering created 

## testing locally
When testing locally, your browser may be sad for 2 reasons<br>
<ol>
<li>local file restrictions</li>
<li>your fs isnt a webserver, proper headers wont be sent</li>
</ol>
To <b>disable local file restrictions</b>, open developer settings and enable the option under security (Safari 17.0 / 19616.1.20.11.3).<br><br>
You must also <b>disable caching</b>. To do this, open the web inspector, and check "Disable Caches" under Network (Safari 17.0 / 19616.1.20.11.3). This is required as each page is loaded through an XHR request to the page's XML file, and some browsers handle this caching differently than resources loaded through standard methods.<br><br>
Now, the page should act <i>more</i> like it would when in production.