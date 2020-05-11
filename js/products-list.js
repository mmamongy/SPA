"use strict" ;
function ProductsList(){
    try{
        this.constructor() ;

    } catch(e){
        console.error(e) ;

    }
}

ProductsList.prototype = {
    products: undefined,
    innerHTMLList: undefined,
    constructor: function(){
        this.products =[] ; 
    },
    viewProductsList: function(scope){
        var table = document.getElementById('list') ;
        this.products = JSON.parse(window.localStorage.getItem('products'));
        this.products.forEach(function (p) {
            if (!p) {
                return;
            }
            var row=table.insertRow();
            row.insertCell(0).innerHTML=p.productName||''
            row.insertCell(1).innerHTML=p.period||''
            row.insertCell(2).innerHTML=p.expireDate||''
            var btn = document.createElement('button');
            btn.classList.add("btn","btn-primary");
            btn.innerText="Delete";
            btn.onclick=()=>{
                scope.deleteItem(p)
            };
            row.insertCell(3).appendChild(btn)
        });
    },
    bind:function () {
        this.viewProductsList(this);
    },
    deleteItem: function excute(product) {
            var index= this.products.indexOf(product);
            this.products.splice(index,1)
            var table = document.getElementById('list') ;
            table.deleteRow(index+1);
            window.localStorage.setItem('products',JSON.stringify(this.products));

           } 
}

var productList = new ProductsList();

