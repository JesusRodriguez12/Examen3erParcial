
// Ejercicio 1: Filtro de Arreglos
document.getElementById('boton-ejercicio1').addEventListener('click', () => {
    function filtrarMayoresDeEdad(personas) {
        return personas.filter(persona => persona.edad >= 18);
    }

    const personas = [
        { nombre: 'Heyder', edad: 18 },
        { nombre: 'Luis', edad: 14 },
        { nombre: 'Carlos', edad: 16 },
        { nombre: 'Eduardo', edad: 26 },
        { nombre: 'Momichis', edad: 14},
        { nombre: 'Kevin', edad: 21}
    ];

    const mayoresDeEdad = filtrarMayoresDeEdad(personas);
    const jsonOutput = JSON.stringify(mayoresDeEdad, null, 2);
    document.getElementById('json-output1').textContent = jsonOutput;
});

// Ejercicio 2: Transformar y Filtrar Arreglos
document.getElementById('boton-ejercicio2').addEventListener('click', () => {
    function transformarYFiltrar(numeros) {
        return numeros.map(num => num * num).filter(cuadrado => cuadrado > 20);
    }

    const numeros = [2, 3, 4, 5, 6];
    const cuadradosFiltrados = transformarYFiltrar(numeros);
    const jsonOutput = JSON.stringify(cuadradosFiltrados, null, 2);
    document.getElementById('json-output2').textContent = jsonOutput;
});

// Ejercicio 3: Promesas y Asincronía
document.getElementById('boton-ejercicio3').addEventListener('click', () => {
    async function obtenerUsuarios() {
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!respuesta.ok) {
                throw new Error('Error en la solicitud');
            }
            const usuarios = await respuesta.json();
            const jsonOutput = JSON.stringify(usuarios, null, 2);
            document.getElementById('json-output3').textContent = jsonOutput;
        } catch (error) {
            document.getElementById('json-output3').textContent = JSON.stringify({ error: error.message }, null, 2);
        }
    }
    obtenerUsuarios();
});

// Ejercicio 4: Manipulación Compleja del DOM
document.getElementById('agregar').addEventListener('click', () => {
    const lista = document.getElementById('lista');
    const nuevoItem = document.createElement('li');
    nuevoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    nuevoItem.textContent = 'Nuevo ítem';

    const botonEliminar = document.createElement('button');
    botonEliminar.className = 'btn btn-danger btn-sm';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        lista.removeChild(nuevoItem);
    });

    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);

});

function actualizarJSON() {
    const items = Array.from(document.getElementById('lista').children);
    const itemsText = items.map(item => item.firstChild.textContent.trim());
    const jsonOutput = JSON.stringify(itemsText, null, 2);
    document.getElementById('json-output4').textContent = jsonOutput;
}

// Ejercicio 5: Algoritmos y Estructuras de Datos
document.getElementById('boton-ejercicio5').addEventListener('click', () => {
    function ordenarPorPropiedad(arr, propiedad) {
        return arr.slice().sort((a, b) => {
            if (a[propiedad] < b[propiedad]) {
                return -1;
            }
            if (a[propiedad] > b[propiedad]) {
                return 1;
            }
            return 0;
        });
    }

    const objetos = [
        { nombre: 'Wendy', edad: 19 },
        { nombre: 'Andrea', edad: 21 },
        { nombre: 'Luis', edad: 16 },
        { nombre: 'Rommel', edad: 19 }
    ];

    const ordenadosPorEdad = ordenarPorPropiedad(objetos, 'edad');
    const jsonOutput = JSON.stringify(ordenadosPorEdad, null, 2);
    document.getElementById('json-output5').textContent = jsonOutput;
});