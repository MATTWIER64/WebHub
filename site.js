// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const inputBox1 = document.getElementById("input-box1");
const inputBox2 = document.getElementById("input-box2");
const inputBox3 = document.getElementById("input-box3");
const inputBox4 = document.getElementById("input-box4");
const listContainer1 = document.getElementById("list-container1");
const listContainer2 = document.getElementById("list-container2");
const listContainer3 = document.getElementById("list-container3");
var notePlaceholders = ['Oh! Oh! Write that down!',
    'It\'s on the tip of my tongue',
    'Remember me!',
    'Your secret is safe with me.',
    'Think it through.'];
var linkPlaceholders = ['*whoosh*',
    'Entering hyperspace.',
    'Where to next?',
    'Go! Go! Go!',
    'Are we there yet?'];
var toDoPlaceholders = ['What to do...',
    'Put one foot in front of the other.',
    'Baby steps',
    'And then? And then?',
    'Keep that momentum!'];

function addToDo() {
    if (inputBox1.value === '') {
        alert("You can not add an empty task.");
        inputBox1.value = '';
        inputBox1.placeholder = toDoPlaceholders[Math.floor(Math.random() * 5, 1)];
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        li.className = "unchecked";
        listContainer1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox1.value = '';
        inputBox1.placeholder = toDoPlaceholders[Math.floor(Math.random() * 5, 1)];
    }
    saveData();
}
function addNote() {
    if (inputBox2.value === '') {
        alert("You can not add an empty task.");
        inputBox2.value = '';
        inputBox2.placeholder = notePlaceholders[Math.floor(Math.random() * 5, 1)];
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox2.value;
        listContainer2.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox2.value = '';
        inputBox2.placeholder = notePlaceholders[Math.floor(Math.random() * 5, 1)];
    }
    saveData();
}
function addLink() {
    if (inputBox3.value === '') {
        alert("You can not add an empty task.");
        var i = Math.random(4);
        inputBox3.value = '';
        inputBox3.placeholder = linkPlaceholders[Math.floor(Math.random() * 5, 1)];
    }
    else {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.target = "_blank";
        a.innerHTML = inputBox4.value;
        a.href = inputBox3.value;
        li.append(a);
        li.className = "link";
        listContainer3.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        var i = Math.random(4);
        inputBox3.value = '';
        inputBox4.value = '';
        inputBox3.placeholder = linkPlaceholders[Math.floor(Math.random() * 5, 1)];
    }
    savedata();
}

inputBox1.addEventListener("keypress", function (e) {
    if (e.key == "Enter"){
        addToDo();
    }
}, false)
inputBox2.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        addNote();
    }
}, false)
inputBox3.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        addLink();
    }
}, false)

listContainer1.addEventListener("click", function(e){
    if (e.target.tagName == "LI" && e.target.className == "checked") {
        e.target.className = "unchecked";
        saveData();
    }
    else if (e.target.tagName == "LI" && e.target.className == "unchecked") {
        e.target.className = "checked";
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
listContainer2.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
listContainer3.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data1", listContainer1.innerHTML);
    localStorage.setItem("data2", listContainer2.innerHTML);
    localStorage.setItem("data3", listContainer3.innerHTML);
}

function showTask() {
    listContainer1.innerHTML = localStorage.getItem("data1");
    listContainer2.innerHTML = localStorage.getItem("data2");
    listContainer3.innerHTML = localStorage.getItem("data3");

}
showTask();
