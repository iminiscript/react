import ProductProps from './productProps';
import productData from './productData';


function product() {
    const productInfo = productData.map(function (pro) {
        return (
            <ProductProps 
                name={pro.name}
                price={pro.price}
                category={pro.category}
             />
        )
    })

    return (
        <div>
            { productInfo }
        </div>
    
    )

}

export default product;