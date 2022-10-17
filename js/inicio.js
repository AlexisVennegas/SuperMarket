
let saveProduct= "listadeProductos"; // El nombre de la key que luego usaremos para almacenar en localStorge.let datosLS= localStorage.getItem(saveProduct);

if(!localStorage.getItem("listadeProductos"))
{
	localStorage.setItem("listadeProductos", "[]");
}

let jsonDecod= localStorage.getItem(saveProduct);
let aggproducto;
	aggproducto=JSON.parse(jsonDecod);


function producto() //El usuario agrega productos a nuestro Array
{
	let text= document.getElementById("agProduct").value;
	let	textMayusculas= text.toUpperCase();
	let textAggProducto= textMayusculas.replace(/^\s+|\s+$|\s+(?=\s)/g, ""); //Obtenemos el valor ingresado en el input.
	if (!aggproducto && textAggProducto != "") 
	{	
	 aggproducto=[textAggProducto];
	 localStorage.setItem(saveProduct, aggproducto);

	}
	else if (textAggProducto == "") {alert("Ingrese el nombre del producto antes de continuar");}

	else
	{
	//let textAggProductoUC= textAggProducto.toLowerCase();
	//let aggproductoUC= aggproducto.toLowerCase();
	let buscarenArray= aggproducto.indexOf(textAggProducto); //compara el valor ingresado por el usuario con el array
	//console.log(buscarenArray);
	
	

		if (textAggProducto == "")
		{
			alert("Ingrese el nombre del producto antes de continuar"); // si el input se envía vacío, aparecera este mensaje y no almacenará en el Array.
		}

		else 
		{

	
		
					if (buscarenArray === -1) // si el valor ingresado por el usuario no existe(no posee un indice), entonces lo agrega

					{
						aggproducto.unshift(textAggProducto);
						
						
						let json = JSON.stringify(aggproducto);
					
					
						localStorage.setItem(saveProduct, json);

						window.location.reload();
							
					}	
		
	
					else 
					{
						alert("El registro ya existe en la lista.");
					}
				
		}

	}	
	
			
			
}


// se podria agregar HTML con Element.insertAdjacentHTML(), pero esta genera el html tantas veces se realicen onclicks


function borrar(borrarProducto)
	
	{
		
       let borrarRegistro = borrarProducto.value;
	   //console.log(borrarRegistro);
	   let misdatosLStorage=JSON.parse(jsonDecod);
	   //console.log(misdatosLStorage);
	   aggproducto=misdatosLStorage;

	   //console.log(aggproducto);
	   let compararArray= aggproducto.indexOf(borrarRegistro);
	   //console.log(compararArray);
	
       // tdBorrar.parentElement.remove();
		
		confirmar=confirm(`¿Quieres eliminar ${borrarRegistro[0].toUpperCase()+borrarRegistro.toLowerCase().slice(1)} de tu lista?`);
		if (confirmar)
		{
			
			
		
			
			//let deleteReg= 
			aggproducto.splice(compararArray, 1);
			//console.log(deleteReg);
			
			
			let json = JSON.stringify(aggproducto);
			localStorage.setItem(saveProduct, json)
			
			alert(borrarRegistro[0].toUpperCase()+borrarRegistro.toLowerCase().slice(1)+ " fue eliminado de tu lista.");
		

		}
		else 
		{
			alert(`Conservarás ${borrarRegistro[0].toUpperCase()+borrarRegistro.toLowerCase().slice(1)} en tu lista`);
			
		}

		window.location.reload();

	}

function editar (botonOnclik)
{

			let hideText= botonOnclik.nextElementSibling.value;
			console.log(hideText);
			let editar= (botonOnclik.parentElement).parentElement;
			console.log(editar);

			editar.innerHTML='<input class="inputEditar" type="text" id="ProdL" oninput="this.value = this.value.replace(/[^a-zA-Z0-9-áéíóúÁÉÍÓÚñÑÄËÏÖÜäëïöü]/," ")" class="editable" onkeypress="13" value="'+hideText+'"><input type="image" src="img/guardar.png" id="editButton" onclick="guardar(this)"><input type="hidden" id="hiddenInput" class="editable" readonly value="'+hideText+'">';

			

}

function guardar() //El usuario agrega productos a nuestro Array
{
	let text= document.getElementById("editButton").previousElementSibling.value;
	console.log(text);
	let comparar= document.getElementById("editButton").nextElementSibling.value;
	console.log(comparar);
	//console.log("esto es la variable comparar "+comparar);
	let	textMayusculas1= text.toUpperCase();
	let textAggProducto= textMayusculas1.replace(/^\s+|\s+$|\s+(?=\s)/g, ""); //Obtenemos el valor ingresado en el input.

	let buscarenArray= aggproducto.indexOf(textAggProducto); //compara el valor ingresado por el usuario con el array
	//console.log(buscarenArray);
	let compararArray= aggproducto.indexOf(comparar.toUpperCase());

	//console.log("esto es compararArray "+compararArray);

	//console.log(buscarenArray);
	
	if (textAggProducto == "")
		{
			alert("Ingrese el nombre del producto antes de continuar"); // si el input se envía vacío, aparecera este mensaje y no almacenará en el Array.
		}

		
		
	
		else 
		{

			confirmar=confirm("¿Guardar cambios?");
		if (confirmar && buscarenArray === -1) // si el valor ingresado por el usuario no existe(no posee un indice), entonces lo agrega

					{

						aggproducto[compararArray]=textAggProducto;
						
						
						let json = JSON.stringify(aggproducto);
					
					
						localStorage.setItem(saveProduct, json);

						
							
					}	
		
	
					else 
					{
						alert("El registro ya existe en la lista.");
					}
				window.location.reload();
			}
	

}

function MarketFavs(fm){

	if(!document.getElementById("cerrar") && !document.getElementById("cerrar2") )
	{
		let favMark= fm.parentElement;
		//console.log(favMark);

		let marktList= JSON.parse(localStorage.getItem("MercadosFavoritos"))
		//console.log(marktList);

		let fmVAL= fm.value;
		//console.log(fmVAL)

		fm.insertAdjacentHTML('afterend', '<section class="absolute" data-set="0"><div class="MarketOpt"><ul display="flex" id="milist" value="'+fmVAL+'"></ul><input type="image" src="img/cerrar.png" id="cerrar2" onclick="reload()"></div></section>');

		for (let i=0; i<marktList.length; i++)
		{
			
		//console.log(marktList[i]);
			milist.insertAdjacentHTML('afterend','<li class="'+fmVAL+'" "width="50%" id="'+marktList[i]+'">'+marktList[i]+'<input id="'+fmVAL+'" class="addProdMarkList" src="img/imgFavMarket.png" type="image" onclick="productoSupM(this)"></li>');
			let getLSComparar= localStorage.getItem(marktList[i]);
			let compare=getLSComparar.indexOf(fmVAL);
			//console.log("este es Compare " +compare);
			if (compare != -1)
			{document.getElementById(''+fmVAL+'').src= "img/delFavMarket.png";}
		}
	}


}



	


function productoSupM(addProdLista)

{
	let revisarL= addProdLista.parentElement;
//console.log(revisarL+": revisarL");
	let revLista= revisarL.id;
	let revLi= document.getElementById(''+revLista+'').className;
	//console.log("este es el parent de REVLISTA "+revLista); //Hasta acá llamamos a nuestra key en LS
	//console.log("este es REVLI "+revLi);
	let jsonDecodSM= JSON.parse(localStorage.getItem(revLista));
	//console.log(jsonDecodSM);
	let aggproductoSM=jsonDecodSM;
//	console.log("este es le sibling " +SiblingVal);

let listaxSM=JSON.parse(localStorage.getItem(revLista));
//console.log("este es listaxSM " +listaxSM);
 let compararMarktList= listaxSM.indexOf(revLi);
 //console.log(compararMarktList+ " esta es la comparacion con LS");

if(compararMarktList == -1)
{
	aggproductoSM.unshift(revLi);
	localStorage.setItem(revLista, JSON.stringify(aggproductoSM));

	addProdLista.src="img/delFavMarket.png";
}
else
{	
	aggproductoSM.splice(revLi, 1);
	
	localStorage.setItem(revLista, JSON.stringify(aggproductoSM));
	addProdLista.src="img/imgFavMarket.png";
}
}

let prodFAVkey= "ListaProdFavoritos";
let keyPrecio="precioFrecuentes";
if (!localStorage.getItem(prodFAVkey))
{
	localStorage.setItem(prodFAVkey, "[]");
	localStorage.setItem(keyPrecio, "[]");
}

let aggpFrecuente= JSON.parse(localStorage.getItem(prodFAVkey));
let aggpPrecioFrecuente= JSON.parse(localStorage.getItem(keyPrecio));
let precioinicial= "0";

function pFrecuentes (onclickFavProd)
{
	let valParent= onclickFavProd.name;
	console.log("esto es valParent: "+valParent);
	//aggpFrecuente.unshift(valParent);
	//console.log(aggpFrecuente);
	let comparaListaFav= aggpFrecuente.indexOf(valParent);
	console.log(comparaListaFav);
	if (comparaListaFav == -1)
	{
	aggpFrecuente.unshift(valParent);
	aggpPrecioFrecuente.unshift(precioinicial);
	localStorage.setItem(prodFAVkey, JSON.stringify(aggpFrecuente));
	localStorage.setItem(keyPrecio, JSON.stringify(aggpPrecioFrecuente));
	onclickFavProd.src="img/prodFavOn.png";
	
	}
	else{
		confirmar=confirm(`¿Quieres eliminar ${valParent[0].toUpperCase()+valParent.toLowerCase().slice(1)} de tus productos frecuentes?`);
		if (confirmar)
		{
		aggpFrecuente.splice(comparaListaFav, 1);
		aggpPrecioFrecuente.splice(comparaListaFav, 1);
		localStorage.setItem(prodFAVkey, JSON.stringify(aggpFrecuente));
		localStorage.setItem(keyPrecio, JSON.stringify(aggpPrecioFrecuente));
		onclickFavProd.src="img/prodFavOff.png";
		}
	}	
	window.location.reload();
}


function precio(marcarPrecio)

{
let revLSProdFav= JSON.parse(localStorage.getItem("ListaProdFavoritos"));
let precioActual= JSON.parse(localStorage.getItem("precioFrecuentes"));

let ProdtoSetPrice= marcarPrecio.value;


let ProdIndex= revLSProdFav.indexOf(ProdtoSetPrice);

marcarPrecio.insertAdjacentHTML('afterend', '<div class="setPrice"><p class="PrecioInput">'+precioActual[ProdIndex]+'€</p><input class="inputPrecio" type="text" placeholder="Precio" id="'+ProdtoSetPrice+'"><input type="image" src="img/check.png" class="check" onclick="modificarPrecio(this)" value="'+ProdtoSetPrice+'"><a href="Frecuentes.html"><input type="image" src="img/cerrar2.png" id="cerrar" ></a></div>');

}

let revLSProdFavoritos= JSON.parse(localStorage.getItem("ListaProdFavoritos"));
	let preciosActuales= JSON.parse(localStorage.getItem("precioFrecuentes"));

function modificarPrecio(modPrice)
{
	

	console.log(preciosActuales);
	let prodModprice= modPrice.value;
	let imputMod= document.getElementById(''+prodModprice+'').value;
	console.log("este es imputMod: "+ imputMod)
	
	let buscarIndMod= revLSProdFavoritos.indexOf(prodModprice);
console.log("este es buscarIndMod: "+ buscarIndMod);
	console.log("este es el indice a modificar " +preciosActuales[buscarIndMod]);
	
	preciosActuales[buscarIndMod]=imputMod;
	localStorage.setItem("precioFrecuentes", JSON.stringify(preciosActuales));

	//preciosActuales.slice(imputMod, 1);
	//localStorage.setItem(precioFrecuentes, preciosActuales);

	window.location.reload();

}




function reload(cerrar)
{
	window.location.reload();
}