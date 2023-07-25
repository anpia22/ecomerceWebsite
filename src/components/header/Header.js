import Cart from "./Cart/Cart";
import './Header.css'

const Header = (props) => {
    return ( 
        <div className="header">
            <h1>Online T-Shirt Website</h1>
            <Cart />
        </div>
     );
}
 
export default Header;
