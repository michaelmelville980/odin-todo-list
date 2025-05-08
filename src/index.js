
import Todo from './dataModels/todo.js';
import Project from './dataModels/project.js';
import ProjectList from './dataModels/projectList.js'
import { renderSideBar, renderMain } from './view.js';
import { init, handleSidebarClick, handleMainClick, selectProject, removeProject, addProject, deleteTodo, addTodo} from './controller.js'
import './style.css';

init();
