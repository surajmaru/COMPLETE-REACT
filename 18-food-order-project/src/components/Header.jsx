import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Header() {

    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((total, item) => {
        return total + item.quantity
    }, 0);

    const userProgressCtx = useContext(UserProgressContext);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="ReactFood Logo" />
            <h1>ReactFood</h1>
        </div>

        <nav>
            <Button textOnly onClick={handleShowCart}>
                Cart ({totalCartItems})
            </Button>
        </nav>
    </header>
  )
}

export default Header