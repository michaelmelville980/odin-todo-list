
import Todo from './todo.js';

export default class Project {
    constructor({title = "", todoList = []}){
        this.id = crypto.randomUUID();
        if (title.length > 64) { 
            throw new typeError('Invalid Title (Must be <= 64 characters)');
        }
        this.title = title;
        this.todoList = todoList; //don't need to validate since this isn't user input
    }


}