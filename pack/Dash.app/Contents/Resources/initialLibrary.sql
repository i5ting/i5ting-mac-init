INSERT INTO "snippets" VALUES(7,'defaults^','NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];','Objective-C',1);
INSERT INTO "snippets" VALUES(8,'singleton^','#import "__class__.h"

@implementation __class__

+ (__class__ *)__accessor__
{
    static dispatch_once_t once;
    static __class__ *__singleton__;
    dispatch_once(&once, ^ { __singleton__ = [[__class__ alloc] init]; });
    return __singleton__;
}

@cursor

@end','Objective-C',0);
INSERT INTO "snippets" VALUES(9,'opacity-hack^','selector {
  filter: alpha(opacity=60); /* MSIE/PC */
  -moz-opacity: 0.6; /* Mozilla 1.6 and older */
  opacity: 0.6;
}','CSS',1);
INSERT INTO "snippets" VALUES(10,'valid-email^','function is_valid_email($email)
{
	if(preg_match("/[a-zA-Z0-9_-.+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/", $email) > 0)
		return true;
	else
		return false;
}','PHP',1);
INSERT INTO "snippets" VALUES(11,'browser-detection^','// Browser detection

// Internet Explorer
var ie  = document.all != null;  //ie4 and above
var ie5 = document.getElementById && document.all;
var ie6 = document.getElementById && document.all&&(navigator.appVersion.indexOf("MSIE 6.")>=0);

// Netscape
var ns4 = document.layers != null;
var ns6 = document.getElementById && !document.all;
var ns  = ns4 || ns6;

// Firefox
var ff  = !document.layers && !document.all;

// Opera
var op  = navigator.userAgent.indexOf("opera")>0;
var op7 = op && operaVersion() <= 7;
var op8 = op && operaVersion() >= 8;

// Detects the Opera version
function operaVersion() {
	agent = navigator.userAgent;
	idx = agent.indexOf("opera");	
	if (idx>-1) {
		return parseInt(agent.subString(idx+6,idx+7));
	}
}','JavaScript',2);
INSERT INTO "snippets" VALUES(12,'url^','NSURL *url = [[NSURL alloc] initWithString:@"__theURL__"];
[[UIApplication sharedApplication] openURL:url];
[url release];','Objective-C',1);
INSERT INTO "snippets" VALUES(13,'format-date^','NSDateFormatter *dateFormat = [[NSDateFormatter alloc] init];
[dateFormat setDateFormat: @"yyyy-MM-dd HH:mm:ss zzz"]; // 2009-02-01 19:50:41 PST
NSString *dateString = [dateFormat stringFromDate:__date__];
[dateFormat release];','Objective-C',2);
INSERT INTO "snippets" VALUES(14,'sql-search^','SELECT __fields__ FROM __table__ WHERE __field__ LIKE ''%__string__%''','SQL',1);
INSERT INTO "snippets" VALUES(15,'path-of-selected-item^','tell app "Finder"
	set selectedItem to (posix path of (the selection as alias))
end tell
','Applescript',0);
INSERT INTO "snippets" VALUES(17,'vibrate^','AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);','Objective-C',0);
INSERT INTO "snippets" VALUES(18,'css-test-page^','<!-- Sample Content to Plugin to Template -->
<h1>CSS Basic Elements</h1>
 
<p>The purpose of this HTML is to help determine what default settings are with CSS and to make sure that all possible HTML Elements are included in this HTML so as to not miss any possible Elements when designing a site.</p>
 
<hr />
 
<h1 id="headings">Headings</h1>
 
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
 
<small><a href="#wrapper">[top]</a></small>
<hr />
 
 
<h1 id="paragraph">Paragraph</h1>
 
<img style="width:250px;height:125px;float:right" src="images/css_gods_language.png" alt="CSS | God''s Language" />
<p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
 
<p>Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
 
<small><a href="#wrapper">[top]</a></small>
<hr />
 
<h1 id="list_types">List Types</h1>
 
<h3>Definition List</h3>
<dl>
	<dt>Definition List Title</dt>
	<dd>This is a definition list division.</dd>
</dl>
 
<h3>Ordered List</h3>
<ol>
	<li>List Item 1</li>
	<li>List Item 2</li>
	<li>List Item 3</li>
</ol>
 
<h3>Unordered List</h3>
<ul>
	<li>List Item 1</li>
	<li>List Item 2</li>
	<li>List Item 3</li>
</ul>
 
<small><a href="#wrapper">[top]</a></small>
<hr />
 
<h1 id="form_elements">Fieldsets, Legends, and Form Elements</h1>
 
<fieldset>
	<legend>Legend</legend>
 
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p>
 
	<form>
		<h2>Form Element</h2>
 
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.</p>
 
		<p><label for="text_field">Text Field:</label><br />
		<input type="text" id="text_field" /></p>
 
		<p><label for="text_area">Text Area:</label><br />
		<textarea id="text_area"></textarea></p>
 
		<p><label for="select_element">Select Element:</label><br />
			<select name="select_element">
			<optgroup label="Option Group 1">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</optgroup>
			<optgroup label="Option Group 2">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</optgroup>
		</select></p>
 
		<p><label for="radio_buttons">Radio Buttons:</label><br />
			<input type="radio" class="radio" name="radio_button" value="radio_1" /> Radio 1<br/>
				<input type="radio" class="radio" name="radio_button" value="radio_2" /> Radio 2<br/>
				<input type="radio" class="radio" name="radio_button" value="radio_3" /> Radio 3<br/>
		</p>
 
		<p><label for="checkboxes">Checkboxes:</label><br />
			<input type="checkbox" class="checkbox" name="checkboxes" value="check_1" /> Radio 1<br/>
				<input type="checkbox" class="checkbox" name="checkboxes" value="check_2" /> Radio 2<br/>
				<input type="checkbox" class="checkbox" name="checkboxes" value="check_3" /> Radio 3<br/>
		</p>
 
		<p><label for="password">Password:</label><br />
			<input type="password" class="password" name="password" />
		</p>
 
		<p><label for="file">File Input:</label><br />
			<input type="file" class="file" name="file" />
		</p>
 
 
		<p><input class="button" type="reset" value="Clear" /> <input class="button" type="submit" value="Submit" />
		</p>
 
 
 
	</form>
 
</fieldset>
 
<small><a href="#wrapper">[top]</a></small>
<hr />
 
<h1 id="tables">Tables</h1>
 
<table cellspacing="0" cellpadding="0">
	<tr>
		<th>Table Header 1</th><th>Table Header 2</th><th>Table Header 3</th>
	</tr>
	<tr>
		<td>Division 1</td><td>Division 2</td><td>Division 3</td>
	</tr>
	<tr class="even">
		<td>Division 1</td><td>Division 2</td><td>Division 3</td>
	</tr>
	<tr>
		<td>Division 1</td><td>Division 2</td><td>Division 3</td>
	</tr>
 
</table>
 
<small><a href="#wrapper">[top]</a></small>
<hr />
 
<h1 id="misc">Misc Stuff - abbr, acronym, pre, code, sub, sup, etc.</h1>
 
<p>Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p>
 
<pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p></pre>
 
<blockquote>
	"This stylesheet is going to help so freaking much." <br />-Blockquote
</blockquote>
 
<small><a href="#wrapper">[top]</a></small>
<!-- End of Sample Content -->
','HTML',0);
INSERT INTO "snippets" VALUES(19,'force-www^','# force www in url
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\.example\.com [NC]
RewriteRule ^(.*)$ http://www.example.com/$1 [R=301,L]
# END force www in url
Report','Apache',0);
INSERT INTO "snippets" VALUES(20, 'pool^','NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
@cursor
[pool drain];','Objective-C',0);
INSERT INTO "snippets" VALUES(21,'anchor^','<a href="@clipboard">@cursor</a>','HTML', 0);
INSERT INTO "tags" VALUES(2,'Mac');
INSERT INTO "tags" VALUES(3,'iOS');
INSERT INTO "tags" VALUES(4,'CSS');
INSERT INTO "tags" VALUES(5,'PHP');
INSERT INTO "tags" VALUES(6,'JavaScript');
INSERT INTO "tags" VALUES(7,'SQL');
INSERT INTO "tags" VALUES(8,'AppleScript');
INSERT INTO "tags" VALUES(9,'HTML');
INSERT INTO "tags" VALUES(10,'Apache');
INSERT INTO "tagsIndex" VALUES(2,7);
INSERT INTO "tagsIndex" VALUES(3,7);
INSERT INTO "tagsIndex" VALUES(2,20);
INSERT INTO "tagsIndex" VALUES(3,20);
INSERT INTO "tagsIndex" VALUES(9,21);
INSERT INTO "tagsIndex" VALUES(2,8);
INSERT INTO "tagsIndex" VALUES(3,8);
INSERT INTO "tagsIndex" VALUES(4,9);
INSERT INTO "tagsIndex" VALUES(5,10);
INSERT INTO "tagsIndex" VALUES(6,11);
INSERT INTO "tagsIndex" VALUES(3,12);
INSERT INTO "tagsIndex" VALUES(3,13);
INSERT INTO "tagsIndex" VALUES(2,13);
INSERT INTO "tagsIndex" VALUES(7,14);
INSERT INTO "tagsIndex" VALUES(8,15);
INSERT INTO "tagsIndex" VALUES(3,17);
INSERT INTO "tagsIndex" VALUES(9,18);
INSERT INTO "tagsIndex" VALUES(4,18);
INSERT INTO "tagsIndex" VALUES(10,19);
