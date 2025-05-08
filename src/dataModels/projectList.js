
import Project from './project.js'

export default class ProjectList {

    /* Constructor */

    constructor(projects = []){
        const generalProject = new Project({title: "General"});
        this.projects = projects
        this.projects.unshift(generalProject);
    }

    /* Methods */

    addProject(newProject){
        this.projects.push(newProject);
    }

    removeProject(projectID){
        const tmp = [];
        for (let i = 0; i < this.projects.length; i++){
            if (this.projects[i].id !== projectID){
                tmp.push[this.projects[i]];
            }
        }
        this.projects = tmp;
    }

}

const proj = new ProjectList([]);