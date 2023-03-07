// coffee: price_1MigbKBlMs4Sl1WToaK85MK2
// sunglasses: price_1MigdbBlMs4Sl1WTFq48tKgu
// camera: price_1Migf0BlMs4Sl1WTwQHzh3Gv


const productsArray = [
    {
      id: 'price_1MigbKBlMs4Sl1WToaK85MK2',
      title: "Coffee",
      price: 4.59
    },
    {
      id: 'price_1MigdbBlMs4Sl1WTFq48tKgu',
      title: "Sunglasses",
      price: 9.99
    },
    {
      id: 'price_1Migf0BlMs4Sl1WTwQHzh3Gv',
      title: "Camera",
      price: 39.99
    }
  ];
  
  const getProductData = (id) => {
    const productData = productsArray.find(product => product.id === id);
    if (!productData) {
      console.log(`Product data not found for ID: ${id}`);
    }
    return productData;
  };
  
  export { productsArray, getProductData };
  