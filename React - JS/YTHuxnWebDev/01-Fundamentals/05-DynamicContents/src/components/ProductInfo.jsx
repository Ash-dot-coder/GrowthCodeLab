const ProductInfo = () => {
    const product = {
        name: "Nothing Phone 3",
        price: 435,
        availability: "Not Launched",
    };

    return (
        <div>
            <h1>Name: {product.name}</h1>
            <h1>Price: ${product.price}</h1>
            <h1>Availability: {product.availability}</h1>
        </div>
    );
};

export default ProductInfo;