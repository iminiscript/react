import ProductProps from './productProps';
import productData from './productData';


function product() {
    // Simple Approach 
    // const productInfoSimple = productData.map(function (pro) {
    //     return (
    //         <ProductProps 
    //             name={pro.name}
    //             price={pro.price}
    //             category={pro.category}
    //          />
    //     )
    // })

    // Object Based approach 
    const productInfoObject = productData.map(function (pro) {
        return (
            <ProductProps key={pro.id} produt={pro}
             />
        )
    })

    return (
        <div>
            {/* { productInfoSimple } */}
            { productInfoObject }
        </div>
    
    )

}

export default product;