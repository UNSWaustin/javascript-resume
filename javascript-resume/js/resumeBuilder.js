/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append(["Austin"]);
var formattedName = HTMLheaderName.replace("%data%", "Yongmeng Qian (Austin)");
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "bioPic": "images/Dog-Pictures.jpg",
    "name": "Yongmeng Qian (Austin)",
    "role": "web developer",
    "contacts": {
        "mobile": "0450-366-673",
        "email": "qianyongmeng@gmail.com",
        "github": "UNSWaustin",
        "location": "Hurstville/Sydney/NSW/AU"
    },
    "skills": "PHP / JAVASCRIPT / HTML / CSS / Bootstrap / CMS / C / JAVA / PHOTOSHOP / 3D MAX / Auto CAD / JQuery / ProE / JSON"
}

var picture = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(picture);
var emplyername = HTMLcontactGeneric.replace("%data%", bio.name);
$("#header").append(emplyername);
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(github);
var address = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(address);
var mainSkills = HTMLskillsStart.replace("%data%", bio.skills);
$("#header").append(mainSkills);
var mainSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(mainSkills);


//$("#main").append(bio.bioPic);
//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contacts);
//$("#main").append(bio.skills);

var education = {
    "schools": [{
            "name": "Zhengzhou University",
            "city": "Zhengzhou,Henan,China",
            "major": "Information Technology(Computer Aided Design)",
            "degree": "Bachelor",
            "dates": "July 2008 - July 2012"
        },
        {
            "name": "University of New South Wales",
            "city": "Sydney,NSW,Australia",
            "major": "Information Technology",
            "degree": "Master",
            "dates": "Feburary 2014 - October 2016"
        }
    ],
    "onlineCourses": [{
        "school": "UDACITY",
        "name": "Javascript",
        "dates": "Feburary 2017 - August 2017",
        "URL" : "www.udacity.com"
    },
    {
        "school": "UDEMY",
        "name":"Become a PHP Master-CMS Project",
        "dates": "April 2017 - August 2017",
        "URL": "www.udemy.com"
    }   
]
}

education.degree = function () {
    $("#education").append(HTMLschoolStart);
    for (var j = 0; j < education.schools.length; j++) {
        var educationSchoolName = HTMLschoolName.replace("%data%", education.schools[j].name);
        $(".education-entry:last").append(educationSchoolName);

        var educationSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
        $(".education-entry:last").append(educationSchoolDegree);
        var educationSchoolDates = HTMLschoolDates.replace("%data%", education.schools[j].dates);
        $(".education-entry:last").append(educationSchoolDates);

        var educationSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[j].major);
        $(".education-entry:last").append(educationSchoolMajor);
        var educationSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[j].city);
        $(".education-entry:last").append(educationSchoolCity);
    }
    for(var k=0;k<education.onlineCourses.length;k++){
    var onlineCourseSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].school);
    $(".education-entry:last").append(onlineCourseSchool);
    var onlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
    $(".education-entry:last").append(onlineCourseDates);
    var onlineCourseName = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].name);
    $(".education-entry:last").append(onlineCourseName);

    var onlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].URL);
    $(".education-entry:last").append(onlineCourseUrl);
    
}

}
education.degree();


var work = {
    "jobs": [{
        "employer": "YM House Group",
        "title": "Driver",
        "dates": "March 2017 - August 2017",
        "responsibility1": "Responsibilities: ",
        "description1": "•	To deliver food to customers. During this period I learnt how to communicate with employees, team members and customers. According the work I know how important is the punctuality. Cooperation is extraordinary important in the team, so that the food can be allocated to the customers accurately.",
        "description2": "•	To help the restaurant to purchase materials. From this I must take the responsibility for the quality of food, and report to the restaurant about the quantity of different materials."
    }],
    "jobs2": [{
        "employer": "Young Yaa Pty.Ltd",
        "title": "Web Developer",
        "dates": "September 2015 - June 2016",
        "responsibility2": "Responsibilities: ",
        "description1": "•	Revising and supervising the construction of the company website",
        "description2": "•	Coordinating development process by git version control",
        "description3": "•	Responsible for all the things about the company website, from the back-end setting including Virtual Private Server (VPS) provided by Amazon Web Service (AWS), Linode and DigitalOcean, the domain name setting, DNS, Debian system and Apache server (LAMP stack or self-installed) configuration adjustment in our VPS, SSL setup, to the front-end website changes.",
        "description4": "•	Solving all the problems about domain, DNS and routing in the server, as well as CDN setting (CouldFlare and MaxCDN)",
        "description5": "•	Executing the front-end development according to customer requirement on all the three revisions of the website: Wordpress, Joomla, and html5 customization using php, sql and JavaScript",
        "description6": "•	Communicating with the third-party while joint development on some of the company website’s module customization and app development"
    }]
}

function displayWork() {
    $("#workExperience").append(HTMLworkStart);
    for (job = 0; job < work.jobs.length; job++) {
        // driver jobs description
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedEmployer = HTMLworkResponsibility.replace("%data%", work.jobs[job].responsibility1);
        $(".work-entry:last").append(formattedEmployer);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description1);
        $(".work-entry:last").append(formattedDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description2);
        $(".work-entry:last").append(formattedDescription);
        // web jobs description
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs2[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs2[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs2[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedEmployer = HTMLworkResponsibility.replace("%data%", work.jobs2[job].responsibility2);
        $(".work-entry:last").append(formattedEmployer);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs2[job].description1);
        $(".work-entry:last").append(formattedDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs2[job].description2);
        $(".work-entry:last").append(formattedDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs2[job].description3);
        $(".work-entry:last").append(formattedDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs2[job].description4);
        $(".work-entry:last").append(formattedDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs2[job].description5);
        $(".work-entry:last").append(formattedDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs2[job].description6);
        $(".work-entry:last").append(formattedDescription);

    }
}
displayWork();

var projects = {
    "project": [{
            "title": "J2EE bookstore website",
            "dates": "July 2015-September 2015",
            "description1": "course:COMP9321-Web Application Engineering",
            "description2": "Objective:  Build a website with J2EE, jsp and MySQL in MVC pattern on Apache Tomcat Server, the bookstore have normal search and advanced search, users can add their books to shopping cart, delete the books and pay their books with a confirmation via email. The admin pages can add new books and delete old books by different numbers.",
            "description3": "Tools:  JAVA,JSP,Eclipse,MySQL,Apache,Tomcat"
        },
        {
            "title": "Blog website development with CMS by Bootstrap",
            "dates": "July 2015-Septemeber 2015",
            "images": ["images/UIpage.jpg", "images/ADpage.jpg"],
            "description1": "",
            "description2": "Objective:Build a Blog website with user pages and admin pages, admin have rights to delete or edit the user files and information, users can post blogs and evaluate others’ blogs, admin also can make the users to be an admin who have same rights.",
            "description3": "Tools: Brackets, PHP, CSS, HTML, Apache, MySQL, google chrome."
        }
    ]
}

function projectDisplay() {
    for (var i = 0; i < projects.project.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description1);
        $(".project-entry:last").append(formattedDescription);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description2);
        $(".project-entry:last").append(formattedDescription);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description3);
        $(".project-entry:last").append(formattedDescription);
        if (projects.project[i].images) {
            for (image in projects.project[i].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projectDisplay();

// function inName(name) {
//     name = name.trim().split(" ");
//     console.log(name);
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//     return name[0] + " " + name[1];
// }

// $('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);