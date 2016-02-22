
console.log("Hello World!");

var todos = [
    { job: "Walk the Dog", done: true },
    { job: "Take out trash", done: true },
    { job: "Do Homework", done: false },
    { job: "Practice JavaScript", done: false }
];

for (i = 0; i < todos.length; i++){
    var ulContent = document.getElementById("todo-list");
    var ul = document.createElement("li");
    ulContent.appendChild(ul);
    ul.innerHTML = todos[i].job;
    if (todos[i].done) {
        ul.className = "done";
    }
}






