// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct(){
  console.log(products[0])
} 
function addProduct(name) {
  products.push(name)
}

function updateProductName(number, name) {
  products[number] = name
}

function removeLastProduct() {
  products.pop()
}


// removeLastProduct(products)
// addProduct(products, "Celery")
// console.log(products)
// updateProductName(products, 3, "Keyboard")
// console.log(products)
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
