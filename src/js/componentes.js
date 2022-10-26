
//  Referencias Html

import { todoList } from "..";
import { Todo } from "../classes";

const divTodos = document.querySelector('.todo-list');
const todoInput = document.querySelector('.new-todo');
const eliminarCompletados = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const aFilters = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) => {

    const htmlTodo = `
        <li class="${ ( todo.completado ) && 'completed' }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ ( todo.completado ) && 'checked' }>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodos.append( div.firstElementChild );

    return div.firstElementChild;

}


//  Eventos
//  agregar todo
todoInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && todoInput.value.length > 0 ) {
        // const nuevoTodo = new Todo( event.target.value );
        const nuevoTodo = new Todo( todoInput.value );

        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo )
        todoInput.value = "";
    }
    
});

//  toggle todo completado && eliminar todo
divTodos.addEventListener('click', ( event ) => {

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if ( nombreElemento.includes('input')){
        todoList.toggleTodo( todoId );
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')){
        todoList.borrarTodo( todoId );
        divTodos.removeChild( todoElemento );

    }

});

//  elimina todos los todos completados
eliminarCompletados.addEventListener('click', ( ) => {
    todoList.borrarCompletados();

    for (let i = divTodos.children.length -1; i >= 0; i--){

        const elemento = divTodos.children[i];

        if (elemento.classList.contains('completed')){
            divTodos.removeChild(elemento);
        }

    } 

});


//  muestra las tareas filtradas, pendientes, completadas o todas
ulFilters.addEventListener('click', (event) => {

    const filtro = event.target.text;

    if (!filtro){return};

    aFilters.forEach( element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for ( const elemento of divTodos.children ){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes':
                (completado) && elemento.classList.add('hidden');
                break;
            case 'Completados':
                (!completado) && elemento.classList.add('hidden');
                break;
        }
    }

});

