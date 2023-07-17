class ProductManager {
  constructor() {
    (this.products = []), (this.id = 1);
  }

  addProduct(product) {
    if (!this.isProductValid(product)) {
      return console.log("Product is  not valid");
    }
    if (this.isCodeDuplicate(product.code)) {
      return console.log("Product code already in use");
    }

    product.id = this.id;
    this.id += 1;
    this.products.push(product);
    return "Product added";
  }

  getProducts() {
    if (this.products.length > 0) {
      return this.products;
    } else {
      return "There are no products currently listed";
    }
  }

  getProductById(id) {
    const product = this.products.find((prod) => prod.id === id);
    if (product) {
      return product;
    } else {
      return `Not found`;
    }
  }

  isProductValid(product) {
    return (
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.code &&
      product.stock !== undefined
    );
  }

  isCodeDuplicate(code) {
    return this.products.some((prod) => prod.code === code);
  }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

productManager.addProduct({
  title: "Pear",
  description: "Bartlett Pear",
  price: 450,
  thumbnail:
    "https://media.istockphoto.com/id/177757631/es/foto/peras-una.jpg?s=612x612&w=0&k=20&c=LASij9dXAH_a_0qBL0ybqNqAD1jX5u4WuFQmzboFYRA=",
  code: "#E9FF30",
  stock: 230,
});

productManager.addProduct({
  title: "Apple",
  description: "Granny Smith Apple",
  price: 470,
  thumbnail:
    "https://gastronomiaycia.republica.com/wp-content/uploads/2010/09/granny_smith.jpg",
  code: "#92E120",
  stock: 110,
});

productManager.addProduct({
  title: "Orange",
  description: "Salustiana Orange",
  price: 380,
  thumbnail:
    "https://serenaoranges.com/wp-content/uploads/2019/03/SALUSTIANA.jpg",
  code: "#F49F1C",
  stock: 350,
});

console.log(productManager.getProducts());

console.log(productManager.getProductById(6));

console.log(productManager.getProductById(3));
