AFRAME.registerComponent("markerhandler", {
    init: async function(){
        this.el.addEventListener("markerFound", () =>{
            console.log("Se encontró el marcador");
            this.handlerMarkerFound();
        })
        this.el.addEventListener("markerLost", () =>{
            console.log("Se perdió el marcador");
            this.handlerMarkerLost();
        })
    },
    handlerMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex"

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Calificar platillo",
                text: "Procesando calificación"
            })
        })
        orderButton.addEventListener("click", () =>{
            swal({
                icon: "https://svgsilh.com/svg/1312747-4caf50.svg",
                title: "¡Gracias por tu orden!",
                text: "¡Recibiras tu orden pronto!"
            })
        })
    },
    handlerMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none"
    }
})