

let saveMarkets= "listadeSuperMarkets"; 
let DefaultMarkets='["CARREFOUR", "MERCADONA", "LIDL", "COSTCO", "DIA", "HIPERCOR", "LECLERC", "EROSKI", "CONDIS", "ALCAMPO", "AHORRAMAS", "ALDI"]';
if(!localStorage.getItem("listadeSuperMarkets"))
{
	localStorage.setItem(saveMarkets, [DefaultMarkets]);
	console.log(DefaultMarkets);
	window.location.reload();
}

else
{
	DefaultMarkets= JSON.parse(localStorage.getItem(saveMarkets));
}


//console.log(DefaultMarkets);

function market()

{

	let text= document.getElementById("agSuperMarket").value;
	let	textMayusculas= text.toUpperCase();
	let textAggSupMarkt= textMayusculas.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
	
	
	let indexOfMarkets= DefaultMarkets.indexOf(textAggSupMarkt);
	
	if(textAggSupMarkt == ""){

	alert("Debe ingresar el nombre del SuperMercado");
	}
	else{
	
	if (indexOfMarkets == -1)
	{
		//let DefaultMarketNew=JSON.stringify(saveMarkets)
		DefaultMarkets.unshift(textAggSupMarkt);
		let jsonMarket = JSON.stringify(DefaultMarkets);
		
		localStorage.setItem(saveMarkets, jsonMarket);
	}
	else
	{
		alert("Este Supermercado ya existe");

	}
			window.location.reload();		
}
	
}


let favoriteMarketskey= "MercadosFavoritos";
let FavMarketReg='[]';
if(!localStorage.getItem("MercadosFavoritos"))
{
	localStorage.setItem(favoriteMarketskey, [FavMarketReg]);
}
 else{
	FavMarketReg=JSON.parse(localStorage.getItem(favoriteMarketskey));
 }




function marketFav(AddFav){



let figureMarket= AddFav.parentElement;
let figureMarketID= figureMarket.id;
 //console.log(figureMarketID);
FavMarketReg=JSON.parse(localStorage.getItem(favoriteMarketskey));
 let compararFavMarkt= FavMarketReg.indexOf(figureMarketID);

 let botonAddFav= AddFav.id;

if(compararFavMarkt == -1)
{

FavMarketReg.unshift(figureMarketID);
console.log(FavMarketReg);
localStorage.setItem(favoriteMarketskey, JSON.stringify(FavMarketReg));

let botonAddFav= AddFav.id;
document.getElementById(botonAddFav).value= "Quitar de Favoritos";
document.getElementById(botonAddFav).className= "mas2";	

let setListaSM= figureMarketID;

localStorage.setItem(setListaSM, '[]');
	
}

else
{
	
	FavMarketReg.splice(compararFavMarkt, 1);
	console.log(FavMarketReg);
	localStorage.setItem(favoriteMarketskey, JSON.stringify(FavMarketReg));
	document.getElementById(botonAddFav).value= "Favoritos";
	document.getElementById(botonAddFav).className= "mas";	
}



}

let MarkLSdecod= JSON.parse(localStorage.getItem("listadeSuperMarkets"));
function borrarMarket(borrarM)
	
	{
		
       let borrarRegistro = borrarM.value;
	   //console.log(borrarRegistro);
	   let misdatosLStorage=MarkLSdecod;
	   //console.log(misdatosLStorage);
	   aggMarket=misdatosLStorage;

	   //console.log(aggproducto);
	   let compararArray= aggMarket.indexOf(borrarRegistro);
	   //console.log(compararArray);
	
       // tdBorrar.parentElement.remove();
		
		confirmar=confirm(`¿Quieres eliminar ${borrarRegistro[0].toUpperCase()+borrarRegistro.toLowerCase().slice(1)} de tu lista?`);
		if (confirmar)
		{
			
			
		
			
			//let deleteReg= 
			aggMarket.splice(compararArray, 1);
			//console.log(deleteReg);
			
			
			let json = JSON.stringify(aggMarket);
			localStorage.setItem(saveMarkets, json)
			
			alert(borrarRegistro[0].toUpperCase()+borrarRegistro.toLowerCase().slice(1)+ " fue eliminado de tu lista.");
		

		}
		else 
		{
			alert(`Conservarás ${borrarRegistro[0].toUpperCase()+borrarRegistro.toLowerCase().slice(1)} en tu lista`);
			
		}

		window.location.reload();

	}
