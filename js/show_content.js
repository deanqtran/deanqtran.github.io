var button_ids = ['home',  'course', 'week07', 'week08', 'week09', 'repositories'];
console.log(button_ids.length);
console.log(button_ids);

function setButtonActive(button_id) {
	for(let i=0; i<button_ids.length; i++) {
		document.getElementById(button_ids[i]).setAttribute('class', 'btn btn-secondary');
	}
	document.getElementById(button_id).setAttribute('class', 'btn btn-primary active');
}
function about_mit_xpro_course() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<a class='navbar-brand' href='index.html'>Home</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a>";

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
	nav.innerHTML = "<a class='navbar-brand' href='index.html'>Home</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='week07link' href='javascript:show_week_07();'>Week 07: PacMen Exercise</a>";
	
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
	+ "<a href='./images/pacMen_On_Fly.png' target='_blank'><img src='./images/pacMen_On_Fly.png' width='150' height='150'></a><br/>"
	+ "<h3>GitHub Repositories</h3>"
	+ "<p>Name: <a href='https://github.com/deanqtran/PacMen-On-Fly.git' target='_blank'>PacMen On Fly</a>"
	+"<pre>Link text: https://github.com/deanqtran/PacManCounterClockWiseMovement.git</pre></p>"
	+ "<a href='https://github.com/deanqtran/PacManHorizontalMovement.git' target='_blank' class='btn btn-primary'>Open GitHub PacManHorizontalMovement</a><br/><br/>";

	setButtonActive('week07');
}

function show_week_08() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<a class='navbar-brand' href='index.html'>Home</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='week08link' href='javascript:show_week_08();'>Week 08: Eye Exercise</a>";
	
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
	+ "<a href='./images/pair_eyes.png' target='_blank'><img src='./images/pair_eyes.png' width='150' height='150'></a><br/>"
	+ "<h3>GitHub Repository</h3>"
	+ "<p>Name: <a href='https://github.com/deanqtran/EyePairMovement.git' target='_blank'>EyePairMovement</a>"
	+"<pre>Link text: https://github.com/deanqtran/EyePairMovement.git</pre></p>"
	+ "<a href='https://github.com/deanqtran/EyePairMovement.git' target='_blank' class='btn btn-primary'>Open GitHub EyePairMovement</a><br/><br/>";

	setButtonActive('week08');
}

function show_week_09() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<a class='navbar-brand' href='index.html'>Home</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='courselink' href='javascript:about_mit_xpro_course();'>About MIT-xPRO Course</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='week09link' href='javascript:show_week_09();'>Week 09: Real Time Bus Tracker Exercise</a>";
	
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
	+ "<a href='./images/map_animation.png' target='_blank'><img src='./images/map_animation.png' width='150' height='150'></a><br/>"
	+ "<h3>GitHub Repository</h3>"
	+ "<p>Name: <a href='https://github.com/deanqtran/Real-Time-Bus-Tracker.git' target='_blank'>Real-Time-Bus-Tracker</a>"
	+"<pre>Link text: https://github.com/deanqtran/Real-Time-Bus-Tracker.git</pre></p>"
	+ "<a href='https://github.com/deanqtran/Real-Time-Bus-Tracker.git' target='_blank' class='btn btn-primary'>Open GitHub Real-Time-Bus-Tracker</a><br/><br/>";

	setButtonActive('week09');
}
function repositories() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "<a class='navbar-brand' href='index.html'>Home</a>"
	+">&nbsp;&nbsp;<a class='navbar-brand' id='repositorieslink' href='javascript:repositories();'>GitHub Repositories</a>";

	var div = document.getElementById("content");
	div.innerHTML = "<div class='card'>"
	+ "<div class='card-header'><h2><a href='https://github.com/deanqtran' target='_blank'>https://github.com/deanqtran</a>&nbsp;Repositories</h2></div>"
	+ "<div class='card-body'>"
	+ "<h5 class='card-title'>PacMen-On-Fly</h5>"
	+ "<p class='card-text'>Develop the animation of PacMen movements on the website browser window.</p>"
	+ "<img src='./images/pacMen_On_Fly.png' width='150' height='150'><br/><br/>"
	+ "<a href='https://github.com/deanqtran/PacMen-On-Fly.git' target='_blank' class='btn btn-primary'>Open GitHub PacMen-On-Fly</a><br/><br/>"
	+ "</div>"
	+ "<div class='card-body'>"
	+ "<h5 class='card-title'>EyePairMovement</h5>"
	+ "<p class='card-text'>Add animation to a pair of eyes to track the computer mouse cursor movements on the monitor screen.</p>"
	+ "<img src='./images/pair_eyes.png' width='150' height='150'><br/><br/>"
	+ "<a href='https://github.com/deanqtran/EyePairMovement.git' target='_blank' class='btn btn-primary'>Open GitHub EyePairMovement</a><br/><br/>"
	+ "</div>"
	+ "<div class='card-body'>"
	+ "<h5 class='card-title'>Real-Time-Bus-Tracker</h5>"
	+ "<p class='card-text'>Add animation to the map of stop-and-go movements at each bus stop between Massachusetts Institute of Technology campus and Harvard University campus using "
	+ "<a href='https://www.mapbox.com' target='_blank'>https://www.mapbox.com.</a></p>"
	+ "<img src='./images/map_animation.png' width='150' height='150'><br/><br/>"
	+ "<a href='https://github.com/deanqtran/Real-Time-Bus-Tracker.git' target='_blank' class='btn btn-primary'>Open GitHub Real-Time-Bus-Tracker</a><br/><br/>"
	+ "</div>"
	+ "</div></div>";

	setButtonActive('repositories');
}

function search() {
	var nav = document.getElementById("navbar");
	nav.innerHTML = "Search Result";

	var searchStr = document.getElementById("site-search");
	var div = document.getElementById("content");
	div.innerHTML = "<div class='card'>"
	+ "<div class='card-header'><h2>Search Result:</h2></div>"
	+ "<div class='card-body'>"
	+ "<h5 class='card-title'>Searched for: " + searchStr.value + "</h5>"
	+ "<h5 class='card-title'>The search engine: Underconstruction</h5>"
	+ "<p class='card-text'><img src='./images/underconstruction.jpg'>Sorry, search engine is underconstruction. <a class='navbar-brand' href='index.html'>Click here to go Home</a></p>"
	+ "</div>"
	+ "</div></div>";

	setButtonActive();
}