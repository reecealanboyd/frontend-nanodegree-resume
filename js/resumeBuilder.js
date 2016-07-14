 var bio = {
 	"name": "Reece Boyd",
 	"role": "Software Engineer", 
 	"contacts": {
 		"mobile": "931-629-8751",
 		"email": "rolltidereece@gmail.com",
 		"github": "https://github.com/reecealanboyd",
 		"linkedin": "https://www.linkedin.com/in/reeceboyd",
 		"location": "Nashville, TN"
 	},
 	"welcomeMessage": "Welcome to Reece Boyd's interactive resume!",
 	"skills": ["iOS Development", "Web Development", "Objective-C", "Swift", "JavaScript", "jQuery", "C++", "Python"],
 	"biopic": "images/reece.jpg",
 	display: function() {
 		// generate HTML for my name and role to be in the header
 		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName + formattedRole);

		// generate HTML for my mobile, email, linkedin, github, location, welcome message, and picture
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		//var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#topContacts").append(formattedMobile + formattedEmail + formattedLinkedin + formattedGithub + formattedLocation);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedLinkedin + formattedGithub);
		//$("#header").append(formattedHTMLbioPic + formattedWelcome);
		$("#header").append(formattedWelcome);
		
		// if I have skills, generate HTML for my skills
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for (var skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
 	}
 };

var education = {
 	"schools": [
 	{
 		"name": "Middle Tennessee State University",
 		"location": "Murfreesboro, TN",
 		"degree": "BS",
 		"majors": ["Computer Science"],
 		"dates": "2014-2017",
 		"url": "http://mtsu.edu/"
 	}
 	], 
 	"onlineCourses": [
 	{
 		"title": "Front-End Web Developer Nanodegree",
 		"school": "Udacity",
 		"date": "2016",
 		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
 	}
 	],
 	display: function() {
 		// generate HTML for each school's name, degree, dates, location, and major
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[school]);
			formattedHTMLschoolName += formattedHTMLschoolDegree + formattedHTMLschoolDates + formattedHTMLschoolLocation + formattedHTMLschoolMajor;
			$(".education-entry:last").append(formattedHTMLschoolName);
		}


		// generate HTML for each online course's title, school, dates, and URL
		for (var course in education.onlineCourses) {
			$("#education").append(HTMLonlineClasses + HTMLschoolStart);
			var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool + formattedHTMLonlineDates + formattedHTMLonlineURL);
		}
	} 
 };

var work = {
 	"jobs": [
 	{
 		"employer": "Middle Tennessee State University",
 		"title": "iOS Mobile Developer",
 		"location": "Murfreesboro, TN",
 		"dates": "2015-2017",
 		"description": "•	Increased involvement in student organizations by adding a feature to the app called MyMT.<br>Made scheduling classes easier for students by added a ‘Favorites’ feature to the app that allows students to favorite courses and schedules for upcoming semesters.<br>Reduced the learning curve for new iOS developers joining our team by documenting the entire code base and integrating Swift into the app.",
 	},
 	{
 		"employer": "Caterpillar Financial",
 		"title": "Information Services Intern",
 		"location": "Nashville, TN",
 		"dates": "2016",
 		"description": "Increased ease of information access by creating 6 new Salesforce Page Layouts for the Collections Department and the Customer Relations Department.",
 	},
 	{
 		"employer": "Middle Tennessee State University",
 		"title": "Computer Science Tutor",
 		"location": "Murfreesboro, TN",
 		"dates": "2015-2016",
 		"description": "Provide instruction to Computer Science students, helping them understand topics such as algorithms and data structures.",
 	},
 	{
 		"employer": "MTSU ACM",
 		"title": "President and Chair",
 		"location": "Murfreesboro, TN",
 		"dates": "2016-2017",
 		"description": "Schedule weekly meetings comprising of company recruiting events, student-led workshops, and hackathons.",
 	}
 	],
 	display: function() {
 		// generate HTML for each job's employer, title, dates, and description
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
 };

var projects = {
 	"projects": [
 	{
 		"title": "MTSU Mobile",
 		"dates": "2015-2017",
 		"description": "Collaborate with a team of 6 developers (3 iOS, 3 Android) to develop new features for Middle Tennessee State University’s student body.<br>Maintained a 4+ star rating for the iOS app with 350 reviews in the App Store in addition to ~12.5K monthly active users and ~99.9% crash free users.",
 		"images": [
 			"images/mtmobile.png"
 		]
 	},
 	{
 		"title": "Salesforce Customer Relations Page Layouts",
 		"dates": "2016",
 		"description": "Currently Customer Service Reps globally need multiple systems to access various information in order to meet our customer’s needs. Some of the systems they access are Salesforce, Oracle and InfoLease. The opportunity exists to compile a majority of the info a Customer Service Rep will need in to Salesforce and changing the page layout for faster access of information.",
 		"images": [
 			"images/cat_financial.jpg"
 		]
 	}
 	],
 	display: function() {
 		// generate HTML for each project's title, dates, description, and image
 	 	for (var project in projects.projects) {
 			$("#projects").append(HTMLprojectStart);
 			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 			$(".project-entry:last").append(formattedTitle);
 			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 			$(".project-entry:last").append(formattedDates);
 			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 			$(".project-entry:last").append(formattedDescription);
 			if (projects.projects[project].images.length > 0) {
 				for (var image in projects.projects[project].images) {
 					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 					$(".project-entry:last").append(formattedImage);
 				}
 			}
 		}
 	}
 };


bio.display();
work.display();
projects.display();
education.display();

// add GoogleMaps to the page
$("#mapDiv").append(googleMap);
