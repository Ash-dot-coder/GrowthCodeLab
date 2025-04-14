const ProductList = () => {
    const products = [
        { id: 1, name: "Nothing earbud 3a", price: "$328" },
        { id: 2, name: "CMF Nothing SmartWatch 1", price: "$373" },
        { id: 3, name: "Nothing Glass", price: "$289" },
    ];

    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <h1>Name: {p.name}</h1>
                    <h1>Price: {p.price}</h1>
                </div>
            ))}
        </div>
    );
};

export default ProductList