'use strict';
(function (params) {
   function ready(callBack){
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(callBack, 1);

    } else {
        document.addEventListener("DOMContentLoaded", callBack);
    }
    }
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true,productList),            
            new Route('add-product', 'add-product.html',false,editProduct)
        ]);
    }
   ready(init);
}());