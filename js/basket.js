let tBody = document.querySelector(".table tbody");
let basketStr = localStorage.getItem("basket");
let basketItems;
if(basketStr){
    basketItems = JSON.parse(basketStr);   
    basketItems.forEach(e => {
        let Id = e.Id;
        let Count = e.Count;
        console.log(Id+" "+Count);
        let newTr=document.createElement("tr");
        let newThId = document.createElement("th");
        let newThCount = document.createElement("th");
        newThId.innerText=Id;
        newThCount.innerText=Count;
        newTr.append(newThId , newThCount);
        tBody.append(newTr);
        



    });
}

