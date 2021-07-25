var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];


function TotalValue(itemName) {
    var sum = 0;
    var value = false;
    
    for (var i = 0; i < itemsArray.length; i++) {
        var multiply = itemsArray[i].price * itemsArray[i].quantity;
        sum = sum + multiply;
        if (itemsArray[i].name === itemName) {
            var totalPrice = itemsArray[i].price * itemsArray[i].quantity;
            var value = true;
        }
    }

    if (value) {
        console.log("The total price of", itemName, "is", totalPrice);
    } else {
        console.log("This item is not available");
    }

    console.log("And the Total Price of all items is ",sum);
}

TotalValue("juice");


