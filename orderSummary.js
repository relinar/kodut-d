var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 
function orderSummary(order){
    let sum = 0
    for(let i = 0; i < tellimus.rows.length; i+=1){
        let item = tellimus.rows[i]
        console.log("i on " + i)
        let vaheSumma = item.price * item.amount * (item.vat+1)
        sum+=vaheSumma
        console.log(sum)

        console.log(item.name)
        console.log("Kogus: \t\t\t",item.amount)
        console.log("Hind: \t\t\t",item.price)
        console.log("Vahesumma: \t\t", vaheSumma)

    }
    console.log("Kogusumma", sum)
}
