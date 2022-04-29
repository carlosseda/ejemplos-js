let squares = document.querySelectorAll(".square");
let squaresRelateds = document.querySelectorAll(".square-related");

squares.forEach(square => {
    
    square.addEventListener("click", () => {

        // Un el valor de un atributo "data-" del html lo podemos capturar escribiendo dataset. y el 
        // nombre que hayamos elegido para identificarlo, en este caso color.
        console.log(square.dataset.color);

        square.classList.add("active"); 

        squaresRelateds.forEach(squareRelated => {
            
            if(square.dataset.color == squareRelated.dataset.color) {
                squareRelated.classList.add("active");
            }
        });

    });
});


