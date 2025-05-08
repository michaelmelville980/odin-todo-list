
import Todo from './dataModels/todo.js';
import Project from './dataModels/project.js';
import ProjectList from './dataModels/projectList.js'
import { renderSideBar, renderMain } from './view.js';

/* Creating general project */
const generalProjectList = new ProjectList();

/* Grabbing relevant DOM elements */
const sidebarElements = document.querySelector("#projects");
const mainElements = document.querySelector("#individual-project-right");

/* Function to create opening view of interface */
export function init() {

    /* Render Initial View */
    renderSideBar(generalProjectList.projects);
    renderMain(generalProjectList.projects[0]);

    /* Add Button Event Listeners */
    sidebarElements.addEventListener("click", handleSidebarClick);
    mainElements.addEventListener("click", handleMainClick);

}

/* Function to handle sidebar button clicks (e.g., select project, remove project, add project) */
export function handleSidebarClick(e) {
    const className = e.target.className;
    const id = e.target.id;
    if (className === "select-project"){
        selectProject(id);
    }else if (className === "remove-project"){
        removeProject(id);
    }else if (className === "add-project"){
        addProject();
    }
}

/* Function to handle main button clicks (e.g., remove todo, add todo) */
export function handleMainClick(e) {
    const className = e.target.className;
    const id = e.target.id;
    if (className === "delete-todo"){
        deleteTodo(id);
    }else if (className === "add-todo"){
        addTodo(id);
    }
}

/* Subfunctions for above cases */
export function selectProject(id){
    const desiredProject = generalProjectList.projects.find(project => project.id === id);
    renderMain(desiredProject);
}

export function removeProject(id){
    generalProjectList.removeProject(id);
    renderSideBar(generalProjectList.projects);
    renderMain(generalProjectList.projects[0]);
}

export function addProject(id){
    const input = prompt("Input your project title");
    const newProject = new Project({title: input});
    generalProjectList.addProject(newProject);
    renderSideBar(generalProjectList.projects);
}

export function deleteTodo(id){
    const projectTitle = document.querySelector("#individual-project-right > h1");
    const desiredProject = generalProjectList.projects.find(project => project.title === projectTitle.textContent);
    desiredProject.removeTodo(id);
    renderMain(desiredProject);
}

export function addTodo(id){
    const projectTitle = document.querySelector("#individual-project-right > h1");
    const desiredProject = generalProjectList.projects.find(project => project.title === projectTitle.textContent);

    /* Getting Required Info */
    const title = prompt("Input title");
    const description = prompt("Input description");
    const due = prompt("Input Due Date 'Y-M-D'");
    const priority = prompt("Input Priority (High, Medium, Low)");
    const note = prompt("Input note");

    /* Constructing todo */
    const newTodo = new Todo({title, description, due, priority, note});
    desiredProject.addTodo(newTodo);
    renderMain(desiredProject);
}

/* Adding event listeners to all buttons*/
function addEventListeners() {
    
    document.querySelector("#projects")
        .addEventListener("click", e=> {
            if (!e.target.matches("button")) return;
            const className = e.target.className;
            const id = e.target.id;
            if (className === "select-project"){
                selectProject(id);
            }else if (className === "remove-project"){
                removeProject(id);
            }else if (className === "add-project"){
                addProject();
            }
        }
    );

    document.querySelector("#individual-projects-right")
        .addEventListener("click", e=> {
            if (!e.target.matches("button")) return;
            const className = e.target.className;
            const id = e.target.id;
            if (className === "delete-todo"){
                deleteTodo(id);
            }else if (className === "add-todo"){
                addTodo(id);
            }
        }
    );
                
}


function handleProjectClick(e, projectList) {
    const targetID = e.target.id;
    const targetProject = projectList.projects.find(project => project.id === targetID);
    renderMain(targetProject);
}



