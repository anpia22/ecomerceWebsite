import './ProductList.css'
const ProductList = (props) => {
    let allProduct = <ul>
        {props.productList.map((items) => {
            return (<li key={items.id}>
                <span>{items.name}</span> <span>{items.description}</span> <span>{items.price}</span> <button>L: {items.L}</button> <button>M: {items.M}</button> <button>S: {items.S}</button>
            </li>)
        })}
    </ul>
    return (
        <div>
            {allProduct}
        </div>
    );
}

export default ProductList;
