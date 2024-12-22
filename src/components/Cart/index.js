import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";
import CartContext from "../../context/CartContext";

import "./index.css";

const Cart = () => (
	<>
		<Header />
		<CartContext.Consumer>
			{(value) => {
				const { cartList } = value;
				const showEmptyCartView = cartList.length === 0;
				return (
					<>
						{showEmptyCartView ? (
							<>
								<EmptyCartView />
							</>
						) : (
							<>
								<Header />
								<div className="cart-container">
									<div className="cart-content-container">
										<h1 className="cart-heading">My Cart</h1>
										<CartListView />
									</div>
								</div>
							</>
						)}
					</>
				);
			}}
		</CartContext.Consumer>
	</>
);

export default Cart;
