var url = 'http://localhost:8085/productoss'; 
const imprimir = document.getElementById('data');
const producto= document.getElementById('producto');
const boton= document.getElementById('modal');


datos();

async function datos(){
    

    console.log("entro al emtodo");
   await fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        data.forEach(element => {
            
            imprimir.innerHTML += `
                
               
                <div class="profile-card-6"><img src="${element.img}" class="img img-responsive">
                    <div class="profile-name">
                    
                        <br>${element.producto}</div>
                   
                    <div class="profile-overview">
                        <div class="profile-overview">
                            <div class="row text-center">
                                <div class="col-xs-4">
                                    <h3>${element.precio}</h3>
                                    <p>Precio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="add-to-cart">
               
            </div>
              
            </div>
                </div>

                <button button onclick="showpopup(${element.producto})" clientIdMode="static"   id="modal" class="default-btn" href="#"  data-toggle="modal" data-target="#exampleModal">Add to Cart</button></div>
        
                `
        
        });
    })
    

}
if(boton){
    boton.addEventListener('click',showpopup);
} else{
    console.log("Null");
}
 
function showpopup(e){
    console.log("jajajjajaja0",e);
 
 
   
}










