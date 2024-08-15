document.addEventListener('DOMContentLoaded', function () {


    var listaProductos = [];

    listaProductos.push({ id: 1, nombre: "producto 1", precio: 18750, stock: 20, imagen: "../assets/img/jera.webp" })
    listaProductos.push({ id: 2, nombre: "producto 2", precio: 18750, stock: 20, imagen: "../assets/img/jera.webp" })
    listaProductos.push({ id: 3, nombre: "producto 3", precio: 18750, stock: 20, imagen: "../assets/img/jera.webp" })

    function templateHtml(p) {
        return `<div class="col-8 col-sm-6 col-md-3 col-lg-2 m-2">
            <div class="">  
                <img src=" `+ p.imagen + ` " class="card-img-top" alt="...">
                <div class="">
                    <div class="mb-2 fs-6">` + p.nombre + `</div>
                    <div class="mb-2 fs-4 fw-semibold"> $ `+ p.precio + ` </div>
                    <div class="mb-2 fs-6 fw-light"> Stock: `+ p.stock + ` </div>
                </div>
                
            </div>
            <button class="btnComprar" data-id="` + p.id + `">compra</button>
        </div> `
    }



    $(function () {

        var main = $("main")
        for (i = 0; i < listaProductos.length; i++) {

            var producto = listaProductos[i]

            main.append(templateHtml(producto))

        }

        // identificar que boton fue presionado

        $(".btnComprar").on("click", function (event) {

            var productId = $(this).data('id');

            var product = listaProductos.find(p => p.id === productId);

            alert(product.nombre)

            console.log(product);

        });

        // boton del menu

        $("#btn-slide").on("click", function (event) {

            var currentLeft = parseInt($('#slide').css('left'), 10);

            if (currentLeft === 0) {
                $("#slide").css("left", "-100%");
            } else {
                $("#slide").css("left", "0");
            }
        })


    })



})
