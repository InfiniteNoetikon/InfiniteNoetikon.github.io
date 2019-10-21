//elevator pitches
beg = "<p style='font-size: 20px; line-height: 30px; text-indent: 5em;'> Thank you for viewing my website! " +
 "My name is Timothy Altemus, and I am a junior majoring in Management Information Systems " +
 "and minoring in Computer Science at the University of Houston. "; //beginning of elevator pitch string
eP0 = "During my time as at the University of Houston as an MIS major, I have been fortunate to sit in many professional meetings for IT Consulting " + 
	"internships which have informed about the IT Counsulting scope of work. " + 
	"I think that IT Consulting is extremely interesting to me because I would be working on different projects with something new each time. " +
	"It is for this reason that I feel that Consulting will help me become well rounded in the tech field and learn about different industries. " +
	"One interesting project that I was assigned at Ardent while working as an HR intern was a project in which I designed and created a demo for a " +
	"competency management system. " +
	"The interesting part about this project was that I was able to be in charge of negotiating pricing as well as managing the work of the consultants " +
	"that we hired to implement the system into our share point. " +
	"I feel that this experience has also better helped me understand the Consulting Industry.";
eP1 = "During my time as at the University of Houston as an MIS major, I have been fortunate to sit in many professional meetings for  " + 
	"internships which have informed about the IT Audit/Advisory scope of work. " + 
	"I think that IT Audit/Advisory is extremely interesting to me because I would be working on different projects with something new each time. " +
	"It is for this reason that I feel that IT Audit/Advisory will help me become well rounded in the tech field and learn about different industries. " +
	"One interesting project that I was assigned at Ardent while working as an HR intern was a project in which I designed and created a demo for a " +
	"competency management system. " +
	"The interesting part about this project was that I was able to be in charge of negotiating pricing as well as managing the work of the consultants " +
	"that we hired to implement the system into our share point. " +
	"I feel that this experience has also better helped me understand the Industry.";
eP2 = "I have a passion for web development. " + 
 "I started learning html during the summer of 2018. After the summer, " +
 "I had a Transaction Processing class in which we learned html and JavaScript. " +
 "That class was one favorite classes I had taken, and since then, " +
 "I often make websites on my free time and try to expand my knowledge in HTML, " +
 "scripting languages (mostly JavaScript and VBScript), and CSS. " + 
 "I have also learned a little PHP but am extremely interested in learning more!"; //if web developer is chosen.
eP3 = "Over the summer of 2018 I decided to learn how to create mobile applications. Upon researching how to create apps, I learned about Xamarin.Forms on Visual Studios. " +
	"I started doing research on different tools to help me learn. I took a couple courses on Xamarin.Forms from a website called PluralSight where I learned XAML, " +
	"improved my knowledge in C#, and learned how to set up databases to my Mobile Applications. I plan to take Cloud-Powered Mobile App Development in within the next " +
	"year at the University of Houston.";
eP4 = "I became interested in software development after taking a class in Java at the University of Houston. " +
	"Shortly after taking this class I decided to declare my minor in computer science. I took a class in python, C++, SQL (using Oracle SQL Developer), and web development. " +
	"During my free time I often spent my time a website called PluralSight which offers classes and training on different computer skills (mostly programming languages). " +
	"Over the summer I became competent in using MySQL and Visual Studios while also learning C#, Xamarin.Forms, and some PHP. " +
	"After gaining all this knowledge, I was eager to put it all together. " +
	"It was at this point when I began creating this website where I would have the opportunity to put together a practical application of many of the skills I learned.";
eP5 = "Over the past couple years I have been able to gain valuable experience in leadership and industry skills in my jobs, internships, and classes. " +
	"I am an extremely hard-working individual and have been rewarded with a Scarlet Seal of Excellence in Leadership and in Personal Development, " + 
	"multiple DA of the month awards, and multiple Dean’s lists awards. " +
	"During my time at Ardent Global as an HR intern, I have been able to get a unique perspective in business. " +
	"Being a small company, I have been lucky enough to work under the Director of HR of the company and been able to participate in executive committees " +
	"where I would get to see and participate in the implementation of a plan to diversify revenue. " +
	"My experience at Ardent has also given me a greater understanding on how business run. " +
	"I am extremely fascinated by the tech industry and hope to be a valuable contributor to the industry.";			

function fillResume(){
	select = document.getElementById("job"); //job type select box
	n = document.f1.cName;
	ending = " I am really interested in working at " + n.value + " and look forward to hearing from you!";
	os = head + "<body>" + 
	 "<table width='100%' align='center'> <tr> <td width='20%'> &nbsp </td> <td width='60%'> &nbsp </td> <td width='20%'> &nbsp </td> </tr> <tr> <td> </td> <td>" + 
	 "<h1 class='resume' align='center' style='font-size: 35px'> Welcome " + n.value + "</h1>" + beg; //output string
	if (n.value == ""){
		alert("You must enter the company name to continue.");
	}
	else {
		switch (parseInt(select.value)){
			case -1:
				alert("You must choose one of the options to continue");
				document.cName.value = "Nothing"
				break;
			case 0:
				os += eP0 + ending + "</p> </td> <td> </td> </tr>";
				break;
			case 1:
				os += eP1 + ending + "</p> </td> <td> </td> </tr>";
				break;
			case 2:
				os += eP2 + ending + "</p> </td> <td> </td> </tr>";
				break;
			case 3:
				os += eP3 + ending + "</p> </td> <td> </td> </tr>";
				break;
			case 4:
				os += eP4 + ending + "</p> </td> <td> </td> </tr>";
				break;
			case 5:
				os += eP5 + ending + "</p> </td> <td> </td> </tr>";
				break;
		}
		os += "<tr> <td rowspan='2' valign='top' align='center'>  Try my Snake game! <br> <br><a href='https://timothyaltemus.com/snake/' target='_blank'>" +
		"<image src='SnakeDoc.png'/> </a> <br><br> NOW AVAILABLE ON MOBILE!" +
		"</a> </td> <td> <br> <br> </td> <td rowspan='2' valign='top' align='center'> View my transcript <br><br><a href='Unofficial Transcript.pdf' target='_blank'> " +
		"<image src='DocumentDownload.png'/> </a></a></td> </tr> <tr> <td border='1'> <p align='center' style='font-size: 30px; line-height: 30px; margin: 5px;'> " +
		"<b> Timothy Altemus </b> </p> <p align='center' style='font-size: 20px; line-height: 20px; margin: 5px;'>(832) 359-7707 &#9642 Katy, TX 77450 &#9642 tdaltemus@uh.edu </p>" +
		"<p align='center' style='font-size: 20px; line-height: 20px; margin-top: 5px; margin-bottom: 20px;'> <a href='http://www.linkedin.com/in/tdaltemus' target='_blank'> www.linkedin.com/in/tdaltemus </a> </p> " + 
		"<p style='font-size: 18px; line-height: 18px; margin-bottom: 5px; margin-top: 10px; margin-left: 5px;'> <b> EDUCATION </b> </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> C. T. Bauer College of Business, University of Houston, Houston, Texas </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> Bachelor of Business Administration in Management Information Systems, Computer Science Minor, December 2019 " +
		"</b> </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Cumulative GPA: 3.78, Major GPA: 3.8, Minor GPA: 4.0 </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> &nbsp </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> EXPERIENCE </b></p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> Human Resources Intern </b> <b style='float: right'> August 2018 - Present </b></p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Ardent Global, Houston, Texas </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'> &#8226 &nbsp&nbsp Develop competency management system to adhere to FPAL regulations and improve and track employee development </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'> &#8226 &nbsp&nbsp Participate in executive committee in the implementation and employee acceptance of S&G+ plan to diversify revenue  </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'> &#8226 &nbsp&nbsp Recruit internally, via LinkedIn recruiter, and through University job boards to fill positions created by S&G+ plan </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> Resident Advisor </b> <b style='float: right'> February 2018 - Present </b></p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Guide 32 first year university students through their education and professional development </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Encourage student involvement in the University of Houston to help residents build meaningful relationships</p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Develop interpersonal relationships with residents by advising and serving as a resource to residents </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> Desk Assistant </b> <b style='float: right'> August 2017 - February 2018 </b> </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Answer questions about the facility and the UH Main Campus </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Develop interpersonal relationships with residents by advising and serving as a resource to residents </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> Delivery Services Associate </b> <b style='float: right'> December 2017 - January 2018 </b></p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Collaborated with department associates to retrieve the proper products for the online and special orders</p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Coded orders that have been completed into the THD system</p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Communicated with customers when their order was ready to schedule a delivery time</p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> Day Camp Counselor </b> <b style='float: right'> May 2017 - August 2017 </b></p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Taught archery safety to over 300 campers, ranging from 10-30 kids at a time </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Served as a role model to children ages 6 - 12 for a group of 60 kids </p>" +
		"<br>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> HONORS AND AWARDS </b> </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Dean's List: Fall 2018, Spring 2018, Spring 2017, Fall 2016 </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> DA of the Month: November 2017, October 2017, September 2017 </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Scarlet Seal of Excellence: Leadership Fall 2018, Personal Development Fall 2018 </p>" +
		"<br>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> ACTIVITIES </b> </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Management Information Systems Student Organization, Fundraising and Operations Committee, Fall 2018 </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Created flyers for the MIS Student Organization fundraising events </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Set up for professional meetings and other MIS Student Organization events </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Houston International Seventh Day Adventist Church, Audio/Visual Technician, Fall 2011, Present </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Create and display PowerPoint, EasyWorship, and Prezi presentations for weekly services </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Operate sound board during general meetings and services </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> African Student Union, Public Relations Officer, Fall 2017 </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Designed a logo for the University of Houston African Student Union</p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Sent out news letters to members twice a week informing them of weekly events</p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Created digital flyers to market African Student Union Events</p>" +					
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Residence Hall Association, Cougar Village One Marketing Chair, Fall 2018 - Spring 2017 </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Created flyers, posters, and google forms to advertise and track attendance </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Analyzed google form data to maximize attendance utilizing Excel Pivot </p>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px; text-indent: 3em;'>&#8226 &nbsp&nbsp Created 2 new legislations for Cougar Village 1 residence hall to improve moral and increase resident collaboration </p>" +
		"<br>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> <b> INTERESTS </b> </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Played varsity basketball and intramural basketball </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Created grading system for siblings' homeschool using Excel </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Creating cross platform apps using Xamarin.Forms </p>" + 
		"<br>" +
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Visual Studios 2017, Microsoft Excel, Word, Access, PowerPoint, OneNote, Outlook, Oracle SQL Developer, MySQL, phpMyAdmin </p>" + 
		"<p style='font-size: 18px; line-height: 18px; margin: 5px;'> Java, Python, C#, C++, Xamarin.Forms, SQL, HTML, Javascript, PHP  </p>" + 
		"<br> <br> <br> <br> </td> </tr>";
		os += "<a href='http://www.timothyaltemus.com/recruiters' id='back'> Back </a>";
		os += "</table></body></html>";
		if (select.value != "-1"){
			sendData(select, n);
			document.write(os);
		}
	}
}

//link to database
function sendData(select, n) {
	obj = { "company":n.value, "job_type":select.value };
	dbParam = JSON.stringify(obj);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				//alert("xxYes a 200....");
				//var a = this.responseText;
				//alert(a);
				//alert(this.responseText);
				//alert("rsp=" + this.responseText);
				//alert("Done");
				//alert("myObj = " + myObj);
				for (x in myObj) {
						//alert("x = " + x + ", myObj[...] = " + myObj[x]);
						//txt += "<strong>" + myObj[x].rv + "</strong>";
				}
				document.getElementById("results").innerHTML = txt;
			}
	};

	xmlhttp.open("POST", "record_visit.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("x=" + dbParam);
	//alert("Done");
}

function back(){
	document.body.innerHTML = body;
}

var head = "<html><head><meta name=”viewport” content=”width=device-width, initial-scale=1″><title>Timothy Altemus</title><link href='https://fonts.googleapis.com/css?family=Cinzel+Decorative' rel='stylesheet'><link href='https://fonts.googleapis.com/css?family=News+Cycle' rel='stylesheet'><link rel='icon' type='image/png' href='https://lh6.googleusercontent.com/dY0PlvfHkL-D2M4p7yqePDu4xIvVqdMXerLmDE_IGCR0mc0OO360vZwfi01GCeI9BnbY9zw=w371'></link><link rel='stylesheet' type='text/css' href='recruiterstyle.css'/><script src='recruiters.js'></script></head>";

var body = "<body onload='alertMe()'><div id='bg'><div id='container'><canvas></canvas><script src='canvas.js'></script><div id='overlay' style='z-index: 1;'><header class='example'> <br><br> <div>	<h1 align='center'> Timothy Altemus' WebPage</h1> <hr align='center' width='60%' style='border-color: #ff8f00'></hr><h2 align='center'> Thank you for viewing this page. If you are viewing this page, I hope you consider me for the position! </h2>	<h2 align='center'> To view my LinkedIn <a href='http://www.linkedin.com/in/tdaltemus' style='color: #f0f0dF;' target='_blank'> click here </a> </h2></div></header><div id='form'><form name='f1' method='get'><h3 align='center'>	Please Fill out the form</h3><p align='center' class='grey'>Please enter the name of your company:&nbsp <input type='text' id='comName' class='text' name='cName' placeholder='My Company inc.'/>	<p align='center' class='grey'>	Type of job are you recruiting for:&nbsp<select name='jType' id='job'><option value='-1'> Select the job type</option><option value='0'>IT Consulting</option><option value='1'>IT Audit/Advisory</option><option value='2'>Web Development</option><option value='3'>Mobile App Development</option><option value='4'>Software Development</option><option value='5'> Other </option></select></p><p class='grey' align='center'><input type='button' class='button' value='Submit' onclick='fillResume()'></p></form></div></div></div></div><a id='backbutton' href='http://www.timothyaltemus.com/'> &nbsp&nbspBack to TimothyAltemus.com </a></body></html>";