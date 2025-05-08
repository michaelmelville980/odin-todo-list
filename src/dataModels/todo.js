
/* Importing Important Date Functions */
import { parseISO, isValid } from 'date-fns';


/* Magic Values */
const TITLE_MAX_LENGTH = 64;
const TITLE_LENGTH_ERROR = "Invalid Title (Must be <= 64 characters)";
const DESCRIPTION_MAX_LENGTH = 150;
const DESCRIPTION_LENGTH_ERROR = "Invalid Description (Must be <= 150 characters)";
const PRIORITY_INVALID_ERROR = "Invalid Priority (Chose 'High', 'Medium', or 'Low')";
const NOTE_MAX_LENGTH = 500;
const NOTE_LENGTH_ERROR = "Invalid Note (Must be <= 500 characters)";


export default class Todo {
    
    /* Constructor */

    constructor({title = "", description = "", due = "", priority = "", note = "", completed = false}){

        this.id = crypto.randomUUID();

        if (title.length > TITLE_MAX_LENGTH) { 
            throw new Error(TITLE_LENGTH_ERROR);
        }
        this.title = title;

        if (description.length > DESCRIPTION_MAX_LENGTH) {
            throw new Error(DESCRIPTION_LENGTH_ERROR);
        }
        this.description = description;

        const date = new Date(due);
        this.due = date;

        if (priority !== "High" && priority !== "Medium" && priority !== "Low"){
            throw new Error(PRIORITY_INVALID_ERROR);
        }
        this.priority = priority;

        if (note.length > NOTE_MAX_LENGTH) {
            throw new Error(NOTE_LENGTH_ERROR);
        }
        this.note = note;

        this.completed = completed;

    }

    /* Methods */

    updateTitle(newTitle){
        if(newTitle.length > TITLE_MAX_LENGTH) {
            throw new Error(TITLE_LENGTH_ERROR);
        }
        this.title = newTitle;
    }

    updateDescription(newDescription){
        if (description.length > DESCRIPTION_MAX_LENGTH) {
            throw new Error(DESCRIPTION_LENGTH_ERROR);
        }
        this.description = newDescription;
    }

    updateDue(newDate){
        const date = due.parseISO();
        if (!isValid(date)){
            throw new Error(DATE_INVALID_ERROR);
        }
        this.due = newDate;
    }

    updatePriority(newPriority){
        if (priority !== "High" && priority !== "Medium" && priority !== "Low"){
            throw new Error(PRIORITY_INVALID_ERROR);
        }
        this.priority = newPriority;
    }

    updateNote(newNote){
        if (note.length > NOTE_MAX_LENGTH) {
            throw new Error(NOTE_LENGTH_ERROR);
        }
        this.note = newNote;
    }

    markDone(){
        this.completed = true;
    }

    markUndone(){
        this.completed = false;
    }

}
