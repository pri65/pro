const productImage=document.getElementById("productImage");


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
  console.log(currData.imageUrl)
 const proImg= document.createElement("img");
 proImg.setAttribute("src",currData.imageUrl)
 productImage.append(proImg) 
  

 const productName=document.getElementById("productName0")
 let proName=document.createElement("h2")
 proName.innerText=currData.productName;

 let curSign=document.createElement("h2")
 curSign.innerText=currData.currencySign;

 let offPrice=document.createElement("h2")
 offPrice.innerText=currData.offerPrice;

 let proName=document.createElement("h2")
 proName.innerText=currData.productName;

 let proName=document.createElement("h2")
 proName.innerText=currData.productName;

 let proName=document.createElement("h2")
 proName.innerText=currData.productName;

  // CurrentData get key=>
  let materSingleData =
    JSON.parse(localStorage.getItem("dataToLocalDetail")) || {}; // object
  // CurrentData get key=>

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