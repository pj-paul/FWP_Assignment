
    const productData = [
      	{
      		id: 0,
      		name: "Item 1",
      		price: 10,
      		description: "Generic description for Item 1",
      		photo: "widget.png"
      	},

      	{
      		id: 1,
      		name: "Item 2",
      		price: 20,
      		description: "Generic description for Item 2",
      		photo: "widget.png"
      	},

      	{
      		id: 2,
      		name: "Item 3",
      		price: 30,
      		description: "Generic description for Item 3",
      		photo: "widget.png"
      	}
    ];

    cart = []; // Create an empty array to later add selected items, aka our cart.

    window.onload = onloadMenu(); // Wait for the page to load and then show the product listing

    function onloadMenu(){
    	document.getElementById("storefront").innerHTML = `
		  <h1 class="storefront"> Product Listing </h1>
		  ${productData.map(productListTemplate).join("")}
		`;
    }

    function productListTemplate(product) {
	  return `
	    <div class="product" onclick="showProduct(${product.id})">
		    <img class="product-photo" src="${product.photo}" ">
		    <h2 class="product-name">${product.name} </h2>
	    </div>
	  `;
	}

	function showProduct(productID){
		let product = productData[productID];
		document.getElementById("product").innerHTML = `
		  <h1 class="storefront"> Product Details for ${product.name}</h1>
		  ${productDetailsTemplate(product)}
		`;
	}

    function productDetailsTemplate(product){
	  return `
	    <div class="product">
		    <img class="product-photo" src="${product.photo}">
		    <h2 class="product-name">${product.name} </h2>
		    <p><strong>Price:</strong> ${product.price}</p>
		    <p>${product.description}</p>
		    <button class="add-cart" onclick="addToCart(${product.id})"> Add to cart </button>
	    </div>
	  `;
	}

	function addToCart(productID){
		cart.push(productData[productID]);
		showCart(cart);
	}

	function cartListTemplate(cart) {
		let cartTotal = cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
	  return `
		    <ol class="cart-list">
				${cart.map(item => `<li>${item.name}: ${item.price}</li>`).join("")}
			</ol>
			<p> Total $ ${cartTotal}</p>
	  `;
	}

	function showCart(cart){
		document.getElementById("cart").innerHTML = `
		 <div class="cart">
		  <h1> Products in your Cart</h1>
		  ${cartListTemplate(cart)}
		 <button class="checkout" onclick="docheckOut()"> Checkout </button>
		 </div>
		`;
	}

	function docheckOut(){
		document.getElementById("app").innerHTML = `
		  <h1 class="success"> Yay, you bought all these...</h1>
		  ${cartListTemplate(cart)}
		`;
	}




      