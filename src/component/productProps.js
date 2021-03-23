
function ProductProps(props) {
    return (
        <div className="product">
            <h1>{ props.name }</h1>
            <h2>{ props.price }</h2>
            <h3>{ props.category }</h3>
        </div>
    )
}

export default ProductProps;