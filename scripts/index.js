const productImage=document.getElementById("productImage");
// let currData= JSON.parse(localStorage.getItem("singleProductView"))

let currData = {
    productName:
      "Cordless Tire Inflator Portable Compressor Digital Car Tire Pump 12V 150PSI Rechargeable Air Pump -Black",
    currencySign: "$",
    offerPrice: "3690.43",
    actualPrice: "4336.41",
    discount: "(15% off)",
    shipToOmit: ["Russia", "Arab"],
    imageUrl:
      "https://img.gkbcdn.com/p/2020-08-03/Car-Tyre-Pump-12V-150PSI-Rechargeable---Black-425899-0._w280_p1_.jpg",
    review_num: "9",
    freeShip: true,
    productId: 1234,
    shipto: "Armenia",
  };
 const proImg= document.createElement("img");
 proImg.setAttribute("src",currData.imageUrl)
 productImage.append(proImg) 
  

 const productName=document.getElementById("productName")
 let proName=document.createElement("h3")
 proName.innerText=currData.productName;

 let div1=document.createElement("div");
 let curSign=document.createElement("h2")
 curSign.innerText=currData.currencySign;
 
 let offPrice=document.createElement("h2")
 offPrice.innerText=currData.offerPrice;
 
 let acPrice=document.createElement("p")
 acPrice.innerText=currData.actualPrice;
//  acPrice.className="actual";
//  document.getElementsByClassName("actual").style.textDecoration="line-through";

 let dis=document.createElement("h2")
 dis.innerText=currData.discount;

 div1.append(curSign,offPrice,acPrice,dis);

 let shipTo=document.createElement("p")
shipTo.innerText=currData.shipto;
shipTo.className="country";

let review=document.createElement("p")
review.innerText=currData.review_num;

let free=document.createElement("p")
free.innerText=currData.freeShip;


let addToCart=document.createElement("button");
addToCart.innerText="Add To Cart"


let buyNow=document.createElement("button")
buyNow.innerText="Buy Now"

productName.append(proName,div1,shipTo,review,free,addToCart,buyNow);

 

  // releated Product
let releatedSingleDataSet =
JSON.parse(localStorage.getItem("releatedSingleDataSet")) || []; //array length of 5

let releatedProduct = [
{
  productName:
    "Cordless Tire Inflator Portable Compressor Digital Car Tire Pump 12V 150PSI Rechargeable Air Pump -Black",
  currencySign: "$",
  offerPrice: "3690.43",
  actualPrice: "4336.41",
  discount: "(15% off)",
  shipToOmit: ["Russia", "Arab"],
  imageUrl:
    "https://img.gkbcdn.com/p/2020-08-03/Car-Tyre-Pump-12V-150PSI-Rechargeable---Black-425899-0._w280_p1_.jpg",
  review_num: "9",
  freeShip: true,
  productId: 1234,
  shipto: "Armenia",
},
{
  productName:
    "Cordless Tire Inflator Portable Compressor Digital Car Tire Pump 12V 150PSI Rechargeable Air Pump -Black",
  currencySign: "$",
  offerPrice: "3690.43",
  actualPrice: "4336.41",
  discount: "(15% off)",
  shipToOmit: ["Russia", "Arab"],
  imageUrl:
    "https://img.gkbcdn.com/p/2020-08-03/Car-Tyre-Pump-12V-150PSI-Rechargeable---Black-425899-0._w280_p1_.jpg",
  review_num: "9",
  freeShip: true,
  productId: 1234,
  shipto: "Armenia",
},
{
  productName:
    "Cordless Tire Inflator Portable Compressor Digital Car Tire Pump 12V 150PSI Rechargeable Air Pump -Black",
  currencySign: "$",
  offerPrice: "3690.43",
  actualPrice: "4336.41",
  discount: "(15% off)",
  shipToOmit: ["Russia", "Arab"],
  imageUrl:
    "https://img.gkbcdn.com/p/2020-08-03/Car-Tyre-Pump-12V-150PSI-Rechargeable---Black-425899-0._w280_p1_.jpg",
  review_num: "9",
  freeShip: true,
  productId: 1234,
  shipto: "Armenia",
},
{
  productName:
    "Cordless Tire Inflator Portable Compressor Digital Car Tire Pump 12V 150PSI Rechargeable Air Pump -Black",
  currencySign: "$",
  offerPrice: "3690.43",
  actualPrice: "4336.41",
  discount: "(15% off)",
  shipToOmit: ["Russia", "Arab"],
  imageUrl:
    "https://img.gkbcdn.com/p/2020-08-03/Car-Tyre-Pump-12V-150PSI-Rechargeable---Black-425899-0._w280_p1_.jpg",
  review_num: "9",
  freeShip: true,
  productId: 1234,
  shipto: "Armenia",
},
{
  productName:
    "Cordless Tire Inflator Portable Compressor Digital Car Tire Pump 12V 150PSI Rechargeable Air Pump -Black",
  currencySign: "$",
  offerPrice: "3690.43",
  actualPrice: "4336.41",
  discount: "(15% off)",
  shipToOmit: ["Russia", "Arab"],
  imageUrl:
    "https://img.gkbcdn.com/p/2020-08-03/Car-Tyre-Pump-12V-150PSI-Rechargeable---Black-425899-0._w280_p1_.jpg",
  review_num: "9",
  freeShip: true,
  productId: 1234,
  shipto: "Armenia",
},
];

//=======================================================================

// for cart option

let cartDetailSet = JSON.parse(localStorage.getItem("cartDetailSet")) || []; // to get exsisting data

localStorage.setItem("cartDetailSet", JSON.stringify(cartDetailSet)); // set and push data to cart

// the info / parameters for cart will be same as above 