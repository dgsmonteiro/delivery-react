import React from 'react';
import { Link } from "react-router-dom";

class CartThankYou extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="cartCenter">
					<div className="emptyCartContainer">
						<div className="emptyCart">
							<img className="emptyCartImg" src="/static/img/shopping-cart.svg" />
							<div className="emptyCartText">Obrigado pelo seu pedido!</div>
							<div className="emptyCartText">Nós entraremos em contato em brave.</div>
							<Link to="/"><button className="blueButton">Voltar ao cardápio</button></Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CartThankYou;
