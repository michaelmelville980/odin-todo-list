
import Todo from './dataModels/todo.js';
import Project from './dataModels/project.js';
import ProjectList from './dataModels/projectList.js';

export function renderSideBar(projectArray){

    const projects = document.querySelector("#projects");
    projects.innerHTML = "";

    for (let i = 0; i < projectArray.length; i++){

        const row = document.createElement("div");
        row.setAttribute("id", projectArray[i].id);

        const projectButton = document.createElement("button");
        projectButton.textContent = projectArray[i].title;
        projectButton.setAttribute("id", projectArray[i].id);

        const removeButton = document.createElement("button");
        removeButton.textContent = "remove";
        removeButton.setAttribute("class", "remove");

        row.append(projectButton, removeButton);
        projects.appendChild(row);

    }

    const addButton = document.createElement("button");
    addButton.textContent = "Add Project";
    addButton.setAttribute("id", "addProject");
    projects.appendChild(addButton);

}

export function renderMain(project){

    const rightSide = document.querySelector("#individual-project-right");
    rightSide.innerHTML = "";

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = project.title;
    rightSide.append(projectTitle);

    const ul = document.createElement("ul");
    for (let i = 0; i < project.todoList.length; i++){
        const listItem = document.createElement("li");
        listItem.textContent = project.todoList[i].title;
        listItem.setAttribute("id", project.todoList[i].id);
        ul.appendChild(listItem);
    }
    rightSide.appendChild(ul);

}