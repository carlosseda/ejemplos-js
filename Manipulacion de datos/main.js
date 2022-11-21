let viewPositions = document.getElementById('view-positions');
let viewKeys = document.getElementById('view-keys');
let colors = ['red', 'green', 'blue', 'orange']
let user = {
    name: "Juan",
    lastname: "Perez",
    age: "25",
    email: "juanperez@gmail.com"
};

viewPositions.addEventListener('click', () => {

    colors.forEach( (color, index) => {
        console.log("soy el color " + color + " y mi posición en el array es la "  + index);
    });

    console.log(colors[0]);
});

viewKeys.addEventListener('click', () => {

    Object.entries(user).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });

    console.log(user.name);
});