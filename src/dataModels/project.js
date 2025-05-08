
import Todo from './todo.js';

/* Magic Values */
const TITLE_MAX_LENGTH = 64;
const TITLE_LENGTH_ERROR = "Invalid Title (Must be <= 64 characters)";

export default class Project {

    /* Constructor */

    constructor({title = "", todoList = []}){
        this.id = crypto.randomUUID();
        if (title.length > TITLE_MAX_LENGTH) { 
            throw new Error(TITLE_LENGTH_ERROR);
        }
        this.title = title;
        this.todoList = todoList; 
    }

    /* Methods */

    updateTitle(newTitle){
        if(newTitle.length > TITLE_MAX_LENGTH) {
            throw new Error(TITLE_LENGTH_ERROR)
        }
        this.title = newTitle;
    }

    addTodo(todoItem){
        this.todoList.push(todoItem);
    }

    removeTodo(todoID){
        const removeIndex = this.todoList.indexOf(todoID);
        this.todoList.splice(removeIndex, 1);
    }

}