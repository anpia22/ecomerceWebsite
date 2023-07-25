import { useState } from "react";
import './AddItem.css'

const AddItem = (props) => {

    const [tShirtName, setTShirtName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [lQuantity, setLQuantity] = useState(0);
    const [mQuantity, setMQuantity] = useState(0);
    const [sQuantity, setSQuantity] = useState(0);

    const AddProductHandler = (e) => {
        e.preventDefault();
        let ProductData = {
            name: tShirtName,
            description: description,
            price: price,
            L: lQuantity,
            M: mQuantity,
            S: sQuantity
        }

        props.newProduct(ProductData);
        setTShirtName('');
        setDescription('');
        setPrice(0);
        setLQuantity(0);
        setMQuantity(0);
        setSQuantity(0);

    }

    return (
        <form onSubmit={AddProductHandler} className="addItemForm">
            <div className="blocks">
                <label>T-Shirt Name</label>
                <input value={tShirtName}
                    type="text"
                    onChange={(e) => setTShirtName(e.target.value)} />
            </div>
            <div className="blocks">
                <label>Description</label>
                <input value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="blocks">
                <label>Price</label>
                <input value={price}
                    type="number"
                    onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="blocks">
                <h3>Quantity</h3>
                <div className="sizeBlock">
                    <div>
                    <label>L</label>
                    <input
                        value={lQuantity}
                        type="number"
                        onChange={(e) => setLQuantity(e.target.value)} />
                </div>
                <div>
                    <label>M</label>
                    <input
                        value={mQuantity}
                        type="number"
                        onChange={(e) => setMQuantity(e.target.value)} />
                </div>
                <div>
                    <label>S</label>
                    <input
                        value={sQuantity}
                        type="number"
                        onChange={(e) => setSQuantity(e.target.value)} />
                </div>
                </div>
                
            </div>
            <div className="blocks">
                <button type="submit" >Add Product</button>
            </div>
        </form>
    );
}

export default AddItem;
