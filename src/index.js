
import './styles.css';
import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml(todo) );
todoList.todos.forEach( crearTodoHtml );

//  usamos el metodo de la clase una vez convertido de objeto a instancia de clase
// todoList.todos[4].imprimirClase();