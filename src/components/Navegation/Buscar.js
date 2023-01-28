import React from "react";

function searchProducts(searchTerm) {
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      let productName = product.getElementsByClassName("product-name")[0].innerText;
  
      if (!productName.toLowerCase().includes(searchTerm.toLowerCase())) {
        product.style.display = "none";
      } else {
        product.style.display = "block";
      }
    }
  }

export default searchProducts