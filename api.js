var url = 'http://localhost:8085/productoss'; 
const imprimir = document.getElementById('data');
const producto= document.getElementById('productos');
const boton= document.getElementById('modal');


datos();

async function datos(){
    

    console.log("entro al emtodo");
   await fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        data.forEach(element => {
            
            imprimir.innerHTML += `
                
            <section class="our-publication pt-100 pb-70">
            <div class="container">
            <div class="row">
            <div class=" col-sm-4 col-lg-11  ">
                <div class="single-publication">
            
                  
                            <figure><a href="# "><img src="${element.img}" alt="Publication Image "></a>
                                <ul>
                                    <li><a href="# " title="Add to Favorite "><i class="fa fa-heart"></i></a></li>
                                    <li><a href="# " title="Add to Compare "><i class="fa fa-refresh"></i></a></li>
                                    <li><a href="# " title="Quick View "><i class="fa fa-search"></i></a></li>
                                </ul>
                            </figure>
                            <div class="publication-content"><span class="category">${element.producto}</span>

                            
                                
                                <ul>
                                    <li><i class="icofont-star"></i></li>
                                    <li><i class="icofont-star"></i></li>
                                    <li><i class="icofont-star"></i></li>
                                    <li><i class="icofont-star"></i></li>
                                    <li><i class="icofont-star"></i></li>
                                </ul>
                                <h4 class="price">${element.precio}</h4>
                            </div>
                            <div class="add-to-cart" onclick="formulario('${ element.precio}','${element.producto}')" ><a class="default-btn" href="# " data-toggle="modal" data-target="#exampleModal">Add to Cart</a></div>
                        </div>
                    </div> 
                    </div>
                </div>
            </div>
        </section>

                
                `
        
        });
    })
    

}


 
function formulario(e,a){
    console.log("Entro ++",e,a);
    producto.innerHTML = `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Carrito</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">??</span>
                  </button>
                    </div>

   
                    <div class="modal-body">
                        <section>

                            <!--Grid row-->
                            <div class="row">

                                <!--Grid column-->
                                <div class="col-lg-8">

                                    <!-- Card -->
                                    <div class="mb-3">
                                        <div class="pt-4 wish-list">

                                            <h5 class="mb-4">Producto</h5>

                                            <div class="row mb-4">
                                                <div class="col-md-5 col-lg-3 col-xl-3">
                                                    <div class="z-depth-1 rounded mb-3 mb-md-0">
                                                        <img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample">
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-lg-9 col-xl-9">
                                                    <div>
                                                        <div class="d-flex justify-content-between">
                                                            <div>
                                                                <h5>`+a+`</h5>
                                                                <p class="mb-3 text-muted text-uppercase small">Precio</p>
                                                            </div>
                                                            <div>
                                                                <div class="def-number-input number-input safari_only mb-0 w-100">
                                                                    <label class="quantity" min="0" name="quantity" value="1" type="number"></label>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-center">

                                                            <p class="mb-0"><span><strong id="summary">`+e+`</strong></span></p class="mb-0">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <!-- Card -->

                                    <!-- Card -->
                                    <div class="mb-3">
                                        <div class="pt-4">

                                            <h5 class="mb-4" >Datos Pago</h5>

                                            <form action="http://localhost:8081/Administracion" method="GET">
                                            <label for="fname">Bancos De Deposito</label><br>
                                            <input type="text" id="BancosDeposito" name="BancosDeposito" value="Austro"><br>
                                            <label for="fname">Numero de Cuenta</label><br>
                                            <input type="text" id="IDVendedor" name="IDVendedor" value="002"><br>
                                            <label for="fname">BancosRetiro</label><br>
                                            <input type="text" id="Bancos De Retiro" name="BancosRetiro" value="Jep"><br>
                                            <label for="fname">Numero de tarjeta</label><br>
                                            <input type="text" id="IDComprador" name="IDComprador" value="005"><br>
                                            <label for="lname">Precio:</label><br>
                                            <input type="text" id="precio" name="precio" value="`+e+`" ><br><br>
                                               

                                            <!--Grid column-->
                                            <div class="col-lg-4">
            
                                                <!-- Card -->
                                                <div class="mb-3">
                                                    <div class="pt-4">
            
                                                        <h5 class="mb-3">Precio a Pagar</h5>
            
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                                Valor
                                                                <span>`+e+`</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                                                Envio
                                                                <span>Gratis</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                                <div>
                                                                    <strong>Valor Total</strong>
                                                                    <strong>
                                                        
                                                      </strong>
                                                                </div>
                                                                <span><strong>`+e+`</strong></span>
                                                            </li>
                                                        </ul>
            
            
                                                    </div>
                                                </div>
                                                <!-- Card -->
            
            
            
                                            </div>
                                            <!--Grid column-->





                                            <input type="submit" value="Comprar" class="btn colorP">
                                            </form>   


                                        </div>
                                    </div>
                                    <!-- Card -->

                                    <!-- Card -->


                                </div>
                                <!--Grid column-->

                                

                            </div>
                            

                        </section>
                    </div>
                    <div class="modal-footer">
                   
                    
                      
                    </div>
                </div>
            </div>
        </div>

        
    
    
    
    `



    
 
 
   
}










