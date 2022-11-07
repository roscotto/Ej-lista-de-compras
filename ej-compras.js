
var index = 0;

//le agrego un evento al boton
document.querySelector("button").addEventListener("click", () => {
    const producto = document.querySelector("input").value; // tomo el string de lo cargado en el input
    if (producto != "") {  // VALIDO QUE NO SE PUEDA CARGAR LABEL VACIO
        document.querySelector("input").value = "";

        let li = document.createElement("li"); //creo el li
        li.className = "list-group-item fw-semibold d-flex"; // le pongo la clase que necesito

        let checkbox = document.createElement("input"); //creo el input checkbox
        checkbox.className = "form-check-input me-1";
        checkbox.type = "checkbox";
        checkbox.id = `checkbox-${index}`;
        checkbox.addEventListener("change", (e) => { //en el momento que lo creamos, ya le agregamos el evento. E para que el evento sepa quién lo disparó

            const target = e.target;
            const parent = target.parentElement;

            parent.classList.toggle("list-group-item-success"); //si la clase ya está, se la quita; y si no está, se la agrega. toggle conmuta la clase


            //Le agrega o saca una clase si es clickeado usando un IF  
            // if(target.checked){ 
            //     parent.classList.add("list-group-item-success");
            // } else {
            //     parent.classList.remove("list-group-item-success");
            // }

        });


        let label = document.createElement("label");
        label.className = "form-check-label ps-2";
        label.for = `checkbox-${index}`;
        label.innerText = producto; // le encajo producto

        li.append(checkbox); //agrego el checkbox al li
        li.append(label); // agrego la etiqueta al li
        document.querySelector("ul").append(li); // agrego el li al ul (al final de la lista)


        let buttonClose = document.createElement("button"); //creo la cruz para el cierre del elemento li
        buttonClose.className = "btn-close ms-auto p-2";
        buttonClose.ariaLabel = "Close";
        buttonClose.addEventListener("click", (e) => { //evento para que se remueva el li con el click

            buttonClose.parentElement.remove();

        });

        li.append(buttonClose);

        index++;
    }
});





