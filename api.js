let container = document.getElementById("container")

 fetch("https://fakestoreapi.com/products?limit=5")

.then(function(res){

    return res.json()

})
.then(function(res){

console.log(res)
let div =document.createElement("div")

res.forEach(function(product){
    let productDiv = document.createElement("div");
    let image = document.createElement("img");
    
    let title = document.createElement("h2");
    let price = document.createElement("p");
    // let description = document.createElement("p");
 

    image.src = product.image; 
    title.textContent = product.title;
    price.textContent = "Price: $" + product.price;
    // description.textContent = product.description;
    
    image.className="product-image";
     
    title.className="product-title"
    productDiv.appendChild(image)
    productDiv.appendChild(title);
    productDiv.appendChild(price);
    // productDiv.appendChild(description);
   


    container.appendChild(productDiv);


})
})

.catch(function(err){
    console.log("error")
})