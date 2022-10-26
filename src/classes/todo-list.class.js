import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        this.cargarLocalStorage();

    }

    //  metodos
    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    borrarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    }

    toggleTodo( id ) {

        for (const todo of this.todos){

            if ( todo.id == id ){
                todo.completado = !todo.completado
                this.guardarLocalStorage();
                break
            }
        }

    }

    borrarCompletados() {

        this.todos = this.todos.filter(todo => todo.completado === false);
        this.guardarLocalStorage();

    }


    guardarLocalStorage(){

        localStorage.setItem('todos', JSON.stringify(this.todos));

    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todos') ) ? JSON.parse(localStorage.getItem('todos')) : [];

        // this.todos = this.todos.map( todo => Todo.fromJson( todo ));
        this.todos = this.todos.map( Todo.fromJson );
    }

    }