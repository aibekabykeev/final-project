import ShoppingCart from "./ShoppingCart";
import TitleLink from "./TitleLink";
import classes from "./ShoppingCart.module.css";

function Basket() {
  return (
    <div >
      <div className={classes.container}>
        <TitleLink/>
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default Basket;
