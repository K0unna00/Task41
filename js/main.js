function BasketItem(id, count) {
    this.Id = id;
    this.Count = count;
}
let btns = document.querySelectorAll(".card .btn");
let BasketBtn = document.querySelector(".bucked");
let newPageLink = document.querySelector(".counter a");
BasketBtn.addEventListener("click", function(){
    newPageLink.click();
})
btns.forEach(e => {
    e.addEventListener('click', function () {
        let dataId = e.parentNode.parentNode.getAttribute('data-id');
        let basketStr = localStorage.getItem("basket");
        let basketItems;
        if (!basketStr) {
            basketItems = [];
        }
        else {
            basketItems = JSON.parse(basketStr);
        }
        let item = basketItems.find(x=>x.Id==dataId);
        if(item){
            item.Count++;
        }
        else{
            item=new BasketItem(dataId , 1);
            basketItems.push(item);
        }
        document.querySelector(".counter h5").innerText=`${basketItems.length}`;
        localStorage.setItem("basket" , JSON.stringify(basketItems));
    })
});
