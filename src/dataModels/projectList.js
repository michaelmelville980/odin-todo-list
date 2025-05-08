
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
        const indexToRemove = this.projects.findIndex(project => project.id === projectID);
        if (indexToRemove > -1){
            this.projects.splice(indexToRemove, 1);
        }
    } 

}

const proj = new ProjectList([]);