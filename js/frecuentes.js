function producto()
{
let aggproducto=document.getElementById("agProduct").value;
if (aggproducto == "")
{
 alert("Ingrese el nombre del producto antes de continuar");
}
else
{
    
//codigo de buscador jeje 


//<img class="imgProduct" src="/img/'+aggproducto+'.png">

// 


    listaProductos.insertAdjacentHTML('beforebegin', 
    ` <div id="col1231" class="row col-lg-10 mx-auto"><div class="col-lg-2"><img class="imgProduct" src="img/ahorra mas.png" title="ahorra mas"></div><div <div class="col-lg-2">
    ${aggproducto} <select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div><div class="col-lg-3"><input type="checkbox" id="carrefour" name="carrefour" value="carrefour"><input type="image" class="logosuperChBox" src="img/precio.png" value="carrefour"></div><div class="col-lg-3"><input id="borrarReg" type="image" src="img/basura.png" class="basura" onclick="borrar ()"></div></div>`);



//<input id="borrarReg" type="image" src="basura.png" class="basura" onclick="borrar ()">
//


    //'<tr><td><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td>'
    //+ aggproducto +'</td><td><input type="checkbox" id="carrefour" name="carrefour" value="carrefour"><input type="image" class="logosuperChBox" src="carrefourlogo.png" value="carrefour"></td><td>'+
    //'<input type="checkbox" id="mercadona" name="carrefour" value="mercadona"><input type="image" class="logosuperChBox" src="mercadonalogo.png" value="mercadona"></td></tr><br>');
}



//funcion agregar jeje jansdlasd 
}

function agg()
{
 
//aggprincipal.innerHTML ='<iframe src="principal.html" name="formularios"class="myIframe"></iframe>';

// se podria agregar HTML con Element.insertAdjacentHTML(), pero esta genera el html tantas veces se realicen onclicks
aggprincipal.innerHTML= '<div><input id="agProduct" list="productos" name="productos" type="text" class="lista"><input id="" type="image" src="mas.png" class="mas" onclick="producto()"></a></div>';


}


 