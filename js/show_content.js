var button_ids = ['home',  'course', 'week07', 'week08', 'week09', 'repositories'];
console.log(button_ids.length);
console.log(button_ids);

function setButtonActive(button_id) {
	for(let i=0; i<button_ids.length; i++) {
		document.getElementById(button_ids[i]).classList.remove("active");
	}
	document.getElementById(button_id).classList.add("active");
}
function about_mit_xpro_course() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<p><a href='index.html'>Home</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a></p>";

	var div = document.getElementById("content");
	div.innerHTML = "<h2>MIT | xPro Course Information</h2><br/>"
	+ "<h3><a href='https://xpro.mit.edu/programs/program-v1:xPRO+PCCx+R1/' target='_blank'>Professional Certificate in Coding: Full Stack Development with MERN</a></h3>"
	+ "<p>Market-ready developer skills, from front to back. Delivered in collaboration with Emeritus.</p><br/>"
	+ "<h3>Who Is This Program For?</h3>"
	+ "<ul><li>Career Launchers: early career professionals wanting to start a career in a high-growth field and gain exposure to the full development lifecycle as the launch point.</li>"
	+ "<li>Career Builders: professionals ready to build on existing skills in coding, to formalize training, and earn a valued certificate.</li>"
	+ "<li>Career Switchers: mid- or later career professionals looking to switch into software development from another field, such as marketing, sales, operations, or any other field.</li></ul>";

	setButtonActive('course');
}

function show_week_07() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<p><a href='index.html'>Home</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='week07link' href='javascript:show_week_07();'>Week 07: PacMen Exercise</a></p>";
	
	var div = document.getElementById("content");
	div.innerHTML = "<h2>MIT-xPro Course Week 07 Exercise</h2><br/>"
	+ "<h3>Excercise Description</h3>"
	+ "<p>Create a webpage with a Add PacMan button, and Start Game button. Create PacMen with the click of a button at any time. Each of PacMen moves about the browser window at their own speed and bouncing off the horizontal and vertical walls.</p><br/>"
	+ "<h3>Objectives</h3><p>Familiarize using JavaScript, HTML, and CSS:<ul>"
	+ "<li>Using an array and push() function</li>"
	+ "<li>DOM manipulation</li>"
	+ "<li>Calling callback function recursion</li>"
	+ "<li>Use setTimeout() function calling function recursion</li>"
	+" </ul></p><br/>"
	+ "<h3>Implementation</h3><p><ul>"
	+ "<li>Write a PacMen factory to create the PacMen</li>"
	+ "<li>Set an initial position and velocity when creating a PacMan</li>"
	+ "<li>Each PacMan is added to a &#60;div&#62; tag with &#60;img&#62; tag to the DOM</li>"
	+ "<li>Manipulate the style.left, and style.top attribute of the &#60;img&#62; tag to create PacMan movements across the browser window</li>"
	+ "<li>Use setTimeout(update, 20) function to call the update() callback function recursion with 20 miliseconds delay</li>"
	+ "</ul></p><br/>"
	+ "<h3>GitHub Repositories</h3>"
	+ "<p>Name: <a href='https://github.com/deanqtran/PacMen-On-Fly.git' target='_blank'>PacMen On Fly</a><br/><br/>"
	+"<pre>https://github.com/deanqtran/PacManCounterClockWiseMovement.git</pre></p>";

	setButtonActive('week07');
}

function show_week_08() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<p><a href='index.html'>Home</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='week08link' href='javascript:show_week_08();'>Week 08: Eye Exercise</a></p>";
	
	var div = document.getElementById("content");
	div.innerHTML = "<h2>MIT-xPro Course Week 08 Exercise</h2><br/>"
	+ "<h3>Excercise Description</h3>"
	+ "<p>Create a webpage with a Pair of Eyes located at a center of webpage. Both pupils are tracking the mouse cursor movement on the same direction both vertically or horizontally.</p><br/>"
	+ "<h3>Objectives</h3><p>Familiarize using JavaScript, HTML, and CSS:<ul>"
	+ "<li>Use stylesheets to construct the <div> tag shapes</li>"
	+ "<li>DOM manipulation</li>"
	+ "<li>Use onmousemove() event</li>"
	+ "<li>Use the browser window properties</li>"
	+ "<li>Both pupils are tracking the mouse cursor movement on the same direction in vertically or horizontally</li>"
	+" </ul></p><br/>"
	+ "<h3>Implementation</h3><p><ul>"
	+ "<li>Use stylesheet properties of the &#60;div&#62; tags to construct the pair of eyes and their pupils</li>"
	+ "<li>Retrieve the x-coordination, and y-coordination of mouse cursor location on the browser window as the mouse cursor movement</li>"
	+ "<li>Manipulate the style.left, and style.top, transform attribute of the &#60;div&#62; tag to create animation of eye movements tracking the mouse cursor around in the browser window</li>"
	+ "</ul></p><br/>"
	+ "<h3>GitHub Repository</h3>"
	+ "<p>Name: <a href='https://github.com/deanqtran/EyePairMovement.git' target='_blank'>EyePairMovement</a><br/><br/>"
	+"<pre>https://github.com/deanqtran/EyePairMovement.git</pre></p>";

	setButtonActive('week08');
}

function show_week_09() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<p><a href='index.html'>Home</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='week09link' href='javascript:show_week_09();'>Week 09: Real Time Bus Tracker Exercise</a></p>";
	
	var div = document.getElementById("content");
	div.innerHTML = "<h2>MIT-xPro Course Week 09 Exercise</h2><br/>"
	+ "<h3>Excercise Description</h3>"
	+ "<p>Render a map on a web page using MapBox API. Build and manipulate maps on web page to create an animation of a map marker movements at public bus stops between MIT and Harvard campus.</p><br/>"
	+ "<h3>Objectives</h3><p>Familiarize using JavaScript, HTML, CSS, and calling API:<ul>"
	+ "<li>Calling API</li>"
	+ "<li>DOM manipulation</li>"
	+ "<li>Use Timers: setTimeout() function</li>"
	+" </ul></p><br/>"
	+ "<h3>Implementation</h3><p><ul>"
	+ "<li>Use MapBox API to build the map on web page</li>"
	+ "<li>Manipulate the MapBox DOM object attribute to move the map marker</li>"
	+ "<li>Use setTimeout() function to call the move() callback function recursion infinitely until closing the browser</li>"
	+ "</ul></p><br/>"
	+ "<h3>GitHub Repository</h3>"
	+ "<p>Name: <a href='https://github.com/deanqtran/Real-Time-Bus-Tracker.git' target='_blank'>Real-Time-Bus-Tracker</a><br/><br/>"
	+"<pre>https://github.com/deanqtran/Real-Time-Bus-Tracker.git</pre></p>";
	
	setButtonActive('week09');
}
function repositories() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<p><a href='index.html'>Home</a>&nbsp;&nbsp;"
	+">&nbsp;&nbsp;<a id='repositorieslink' href='javascript:repositories();'>GitHub Repositories</a></p>";

	var div = document.getElementById("content");
	div.innerHTML = "<h2>https://deanqtran.github.io Repositories</h2><br/>"
	+ "<ul><li><p>Name: <a href='https://github.com/deanqtran/EyePairMovement.git' target='_blank'>EyePairMovement</a><br/><br/>"
	+"https://github.com/deanqtran/EyePairMovement.git</p></li>"
	+ "<li><p>Name: <a href='https://github.com/deanqtran/EyePairMovement.git' target='_blank'>EyePairMovement</a><br/><br/>"
	+"https://github.com/deanqtran/EyePairMovement.git</p></li>"
	+ "<li><p>Name: <a href='https://github.com/deanqtran/Real-Time-Bus-Tracker.git' target='_blank'>Real-Time-Bus-Tracker</a><br/><br/>"
	+"https://github.com/deanqtran/Real-Time-Bus-Tracker.git</p></li></ul>";

	setButtonActive('repositories');
}