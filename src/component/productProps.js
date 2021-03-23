
function ProductProps(props) {
    return (
        <div>
            {/* <div className="product">
                <h1>{ props.name }</h1>
                <h2>{ props.price }</h2>
                <h3>{ props.category }</h3>
            </div> */}
            <div className="product">
                <h1>{ props.produt.name }</h1>
                <h2>{ props.produt.price }</h2>
                <h3>{ props.produt.category }</h3>
            </div>
        </div>
    )
}

export default ProductProps;