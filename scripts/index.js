// let product = {
//     "productName": "cycle",
//     "offerPrice": "210",
//     "actualPrice": "300",
//     "discount": "90",
//     "shipForm": "xyz",
//     "shipToOmit": ["india","USA"],
//     "imageUrl": "/jksdhfkjdlfkzd"
// }

// localStorage.setItem("singleProductView", JSON.stringify(product) )

// let data = JSON.parse(localStorage.getItem("singleProductView"));
// console.log(data)


// document.getElementsByClassName("productName").innerText = data.productName;


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
  
  // CurrentData get key=>
  let materSingleData =
    JSON.parse(localStorage.getItem("dataToLocalDetail")) || {}; // object
  // CurrentData get key=>