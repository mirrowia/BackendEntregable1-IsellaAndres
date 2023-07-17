class ProductManager {
  constructor() {
    (this.products = []), (this.id = 1);
  }

  addProduct(product) {
    if (!this.isProductValid(product)) {
      console.log("Error: El producto no es valido.");
      return;
    }
    if (this.codeDuplicate(product.code)) {
      console.log("Error: El codigo del producto ya esta siendo utilizado.");
    }

    product.id = this.id;
    this.id += 1;
    this.products.push(product);
  }

  getProducts() {
    return this.producs;
  }

  getProductById(id) {
    const product = this.products.find((prod) => prod.id === id);
    if (product) {
      return product;
    } else {
      console.log(`${product} Not found`);
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
