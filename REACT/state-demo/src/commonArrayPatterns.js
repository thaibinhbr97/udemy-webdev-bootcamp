// Common patterns for updating arrays in state

const shoppingCarts = [
    { id: 1, product: "HDMICable", price: 4 },
    { id: 2, product: "EasyBakeOven", price: 28 },
    { id: 3, product: "PeachPie", price: 6.5 }
];

// ADDING TO AN ARRAY
[...shoppingCarts, { id: 4, product: "Coffee Mug", price: 7.99 }];

// REMOVING AN ELEMENT
shoppingCarts.filter((item) => item.id !== 2);

// UPDATING ALL ELEMENTS IN ARRAY
shoppingCarts.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase()
    }
})

// MODIFYING A PARTICULAR ELEMENT IN ARRAY
shoppingCarts.map((item) => {
    if (item.id === 3) {
        return { ...item, price: 10.99 };
    } else {
        return item;
    }
});

// SORTING AN ARRAY
const arr = [1, 5, 3, 22, 4]
const sortedArr = [...arr].sort()
console.log(arr)
console.log(sortedArr)
