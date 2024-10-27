document.addEventListener('DOMContentLoaded', function () {


    // let inputValue = document.getElementById('search')
    // let minValue = document.getElementById('minValue')
    // let maxValue = document.getElementById('maxValue')
    // var listBox = document.getElementById('listBox');

    // inputValue.addEventListener('input', search);
    // minValue.addEventListener('input', search);
    // maxValue.addEventListener('input', search);
    // function search() {
    //     var input = inputValue.value.trim();
    //     var min = parseFloat(minValue.value)
    //     var max = parseFloat(maxValue.value)

    //     if (input !== "") {
    //         var listaFiltrada = filtrarElementos(input);
    //         cargarLista(listaFiltrada);
    //         listBox.style.display = 'block'
    //     } else {
    //         listBox.innerHTML = "";
    //         listBox.style.display = 'none'
    //     }
    // }

    // function actualizarMain(lista) {
    //     var main = document.querySelector('main');
    //     main.innerHTML = templateHtml(listaProductos); // Limpiar contenido previo
    //     if (lista.length > 0) {
    //         for (let i = 0; i < lista.length; i++) {
    //             var producto = lista[i];
    //             main.innerHTML += templateHtml(producto);
    //         }
    //     }
    // }

    // function cargarLista(lista) {
    //     listBox.innerHTML = "";
    //     if (lista.length > 0 && lista.some(item => item.trim() !== "")) {
    //         for (let i = 0; i < lista.length; i++) {
    //             if (lista[i].trim() !== "") {  
    //                 var nodoNombre = document.createElement('div');
    //                 nodoNombre.classList.add('listArticle')
    //                 nodoNombre.innerText = lista[i];
    //                 listBox.appendChild(nodoNombre);
    //             }
    //         }
    //     }

    // }

    // function filtrarElementos(filtro) {
    //     var listaFiltrada = []
    //     var regex = new RegExp(filtro, 'i');
    //     for (let i = 0; i < listaProductos.length; i++) {
    //         if (regex.test(listaProductos[i].nombre)) {
    //             listaFiltrada.push(listaProductos[i].nombre)
    //         }

    //     }
    //     return listaFiltrada
    // }


    var listaProductos = [];

    listaProductos.push({ id: 1, nombre: "francesco virgolini la maquina mas veloz de tote italie", precio: 18750, stock: 20, imagen: "../assets/img/jera.webp" })
    listaProductos.push({ id: 2, nombre: "producto 2", precio: 15300, stock: 20, imagen: "../assets/img/jera.webp" })
    listaProductos.push({ id: 3, nombre: "producto 3", precio: 25000, stock: 20, imagen: "../assets/img/jera.webp" })

    function templateHtml(p) {
        return `<div class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-1 m-2 p-0">
            <div class="">  
                <img src=" `+ p.imagen + ` " class="card-img-top" alt="...">
                <div class="">
                    <div class="text-name mb-2 fs-6">` + p.nombre + `</div>
                    <div class="mb-2 fs-5 fw-semibold"> $ `+ p.precio + ` </div>
                    <div class="mb-2 fw-light"> Stock: `+ p.stock + ` </div>
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
