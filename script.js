
var listaProductos = [];

listaProductos.push({id:1, nombre:"producto 1", precio: 18750, stock:20, imagen:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"})
listaProductos.push({id:2, nombre:"producto 2", precio: 18750, stock:20, imagen:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"})
listaProductos.push({id:3, nombre:"producto 3", precio: 18750, stock:20, imagen:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"})

function templateHtml(p){
    return `<div class="col-sm-6 col-md-3 col-lg-2 m-2">
            <div class="">  
                <img src=" `+ p.imagen +` " class="card-img-top" alt="...">
                <div class="">
                    <div class="mb-2 fs-6">` + p.nombre + `</div>
                    <div class="mb-2 fs-4 fw-semibold"> $ `+ p.precio +` </div>
                    <div class="mb-2 fs-6 fw-light"> Stock: `+ p.stock +` </div>
                </div>
                <button class="btnComprar" data-id="` + p.id + `">compra</button>
            </div>
        </div> `
} 
        


$(function() {

    var main = $("main")
    for(i = 0; i < listaProductos.length; i++){

        var producto = listaProductos[i]

        main.append(templateHtml(producto))
        
    }

    
      
    $( ".btnComprar" ).on( "click", function( event ) {

        var productId = $(this).data('id');

        var product = listaProductos.find(p => p.id === productId);

        alert(product.nombre)

        console.log(product);
    
    }); 


})


