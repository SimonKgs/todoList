export class Todo {

    //  esto nos permite recuperar los metodos de la clase si esta se ha cargado desde otro lado
    //  ej: cargo un json y me devuelve los objetos commo tal, pero no son instancias de mi clase
    //  con esto los convertire en instancias y ya podre acceder a los metodos
    //  usado en todo list al cargar los objetos
    static fromJson ({ id, tarea, completado, creado }) {

        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;

    }

    constructor( tarea ) {
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }


    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }
}