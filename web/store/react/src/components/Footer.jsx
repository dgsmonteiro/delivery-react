import React from 'react';
import Logo from "./Logo";

class Header extends React.Component {

	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer_inside">
						<div className="copyright">
							<Logo />
							<div className="year">© 2021</div>
						</div>
						<div className="contacts">
							<p>Top Lanches da Vila</p>
							<p>Rua Melo, 999 - Vila Barros</p>
							<p>Guarulhos / SP</p>
							<p>+55 11 98999-9999</p>
							<p>contato@toplanches.com.br</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Header;
