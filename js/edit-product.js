'use stict';
function EditProuct(product) {
    try {
        if(!product) {
            throw 'error: product is empty';
        }
        this.constructor(product);
    } catch (e) {
        console.error(e);
    }
}

EditProuct.prototype = {
    product: undefined,
    products: undefined,
    constructor: function (product) {
        this.product = product;
        this.products = [] ;
    },
    save: function () {
        alert('Product added succesfully') ;
            this.products = JSON.parse(window.localStorage.getItem('products'));
            if (!this.products) {
                this.products=[];
            }
            this.products.push(this.product);
            window.localStorage.setItem('products', JSON.stringify(this.products)) ;
        window.location.href = "#home";

        
        
    },
    bind:function(){
        new Binding({
            object: this.product
        }).addBinding(
            document.getElementById("productName"),
            "value","keyup","productName"
        ).addBinding(
            document.getElementById("period"),
            "value","keyup","period"
        ).addBinding(
            document.getElementById("expireDate"),
            "value","change","expireDate"
        )
    },
}
 editProduct=new EditProuct({})