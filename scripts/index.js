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
 let thumbnail=document.createElement("div")
 thumbnail.className="thumb";
let thumb1=document.createElement("img");
thumb1.setAttribute("src",currData.imageUrl)
 //thumb1.src=currData.imageUrl;
 let thumb2=document.createElement("img");
 thumb2.setAttribute("src",currData.imageUrl)
 //thumb2.src=currData.imageUrl;
 let thumb3=document.createElement("img");
 thumb3.setAttribute("src",currData.imageUrl)
 //thumb3.src=currData.imageUrl;
 let thumb4=document.createElement("img");
 thumb4.setAttribute("src",currData.imageUrl)
 //thumb4.src=currData.imageUrl;
 thumbnail.append(thumb1,thumb2,thumb3,thumb4);
 productImage.append(proImg,thumbnail) 
  

 const productName=document.getElementById("productName")
 let proName=document.createElement("h3")
 proName.innerText=currData.productName;

 let div1=document.createElement("div");
 div1.className="prices";
 let curSign=document.createElement("div")
 curSign.innerText=currData.currencySign;
 
 let offPrice=document.createElement("div")
 offPrice.innerText=currData.offerPrice;
 
 let acPrice=document.createElement("div")
 acPrice.innerText=currData.actualPrice;
 acPrice.className="actual";


 let dis=document.createElement("div")
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