
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
        projectButton.setAttribute("class", "select-project");
        row.appendChild(projectButton);

        if (projectButton.textContent !== "General"){
            const removeButton = document.createElement("button");
            removeButton.textContent = "remove";
            removeButton.setAttribute("id", projectArray[i].id);
            removeButton.setAttribute("class", "remove-project");
            row.appendChild(removeButton);
        }

        projects.appendChild(row);

    }

    const addButton = document.createElement("button");
    addButton.textContent = "Add Project";
    addButton.setAttribute("class", "add-project");
    projects.appendChild(addButton);

}

export function renderMain(project){

    const rightSide = document.querySelector("#individual-project-right");
    rightSide.innerHTML = "";

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = project.title;
    rightSide.append(projectTitle);

    for (let i = 0; i < project.todoList.length; i++){

        const details = document.createElement("details");
        details.setAttribute("id", project.todoList[i].id);

        const summary = document.createElement("summary");
        summary.textContent = project.todoList[i].title + " (Due:" + project.todoList[i].due + ")";

        const divDetails = document.createElement("div");
        
        const description = document.createElement("p");
        description.textContent = "Description: " + project.todoList[i].description;

        const priority = document.createElement("p");
        priority.textContent = "Priority: " + project.todoList[i].priority;

        const notes = document.createElement("p");
        notes.textContent = "Notes: " + project.todoList[i].notes;

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.setAttribute("class", "delete-todo");

        divDetails.append(description, priority, notes, remove);
        details.append(summary, divDetails);
        rightSide.appendChild(details);

    }

    const addButton = document.createElement("button");
    addButton.textContent = "Add Todo";
    addButton.setAttribute("class", "add-todo");
    rightSide.append(addButton);
}