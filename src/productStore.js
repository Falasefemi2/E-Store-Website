const productsArray = [
    {
      id: '1',
      title: "Coffee",
      price: 4.59
    },
    {
      id: '2',
      title: "Sunglasses",
      price: 9.99
    },
    {
      id: '3',
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
  