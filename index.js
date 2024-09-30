var heading = document.createElement("h1");
var hMarksNode = document.createTextNode("Subject:");
heading.appendChild(hMarksNode);

var computerMarks = document.createElement("p");
var cMarksNode = document.createTextNode("Computer Science: 95");
computerMarks.appendChild(cMarksNode);

var economicsMarks = document.createElement("p");
var eMarksNode = document.createTextNode("Economics: 90");
economicsMarks.appendChild(eMarksNode);

var psychologyMarks = document.createElement("p");
var pMarksNode = document.createTextNode("Psychology: 92");
psychologyMarks.appendChild(pMarksNode);

var sociologyMarks = document.createElement("p");
var sMarksNode = document.createTextNode("Sociology: 98");
sociologyMarks.appendChild(sMarksNode);

var philosophyMarks = document.createElement("p");
var phMarksNode = document.createTextNode("Philosophy: 90");
philosophyMarks.appendChild(phMarksNode);

var total = document.createElement("h4");
var tMarksNode = document.createTextNode("Total Marks: 600");
total.appendChild(tMarksNode);

var obtMarks = document.createElement("h4");
var obtMarksNode = document.createTextNode("Obtained Marks: 575");
obtMarks.appendChild(obtMarksNode);

var percentage = document.createElement("h4");
var percetageNode = document.createTextNode("Percentage: 95.8%");
percentage.appendChild(percetageNode);

var grade = document.createElement("h4");
var gradeNode = document.createTextNode("Grade: A+");
grade.appendChild(gradeNode);

var mainDiv = document.getElementById("demo");
mainDiv.appendChild(heading);
mainDiv.appendChild(computerMarks);
mainDiv.appendChild(economicsMarks);
mainDiv.appendChild(psychologyMarks);
mainDiv.appendChild(sociologyMarks);
mainDiv.appendChild(philosophyMarks);
mainDiv.appendChild(total);
mainDiv.appendChild(obtMarks);
mainDiv.appendChild(percentage);
mainDiv.appendChild(grade);