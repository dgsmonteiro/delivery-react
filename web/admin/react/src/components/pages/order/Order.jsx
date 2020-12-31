import { Form, Input, Button } from 'antd';
import React, { Component } from 'react';
import {getOrder} from "../../../actions";
import {connect} from "react-redux";
import {Formik, Field} from "formik";
import * as Yup from "yup";
import config from "../../../config";
import {withRouter} from "react-router";

const _BackButton = (props) =>
	<Button type="primary" onClick={ () => props.history.goBack() }>Voltar</Button>;

const BackButton = withRouter(_BackButton);


function displayCurrency(value) {
	const floatValue = parseFloat(value);
	return floatValue.toFixed(2);
}

function CartTable(props) {
	let cartTotal = props.order.items.reduce( (acc, item) => {
			let {totalPrice, totalQty} = acc;

			console.log('acc');
			console.log(acc);

			let price = parseFloat(item.price);

			totalPrice += price * item.qty;
			totalQty += item.qty;

			return {totalPrice, totalQty};
		},
		{ totalPrice: 0, totalQty: 0}
	);

	return (
		<div>
			{
				props.order.items.map((item) => {
					let imageUrl = config.apiBaseUrl + 'files/' + item.image.id + '/' + item.image.filename;

					let price = parseFloat(item.price);
					let total = price * item.qty;

					return (
						<div className="cart-prod">
							<div className="cart-prod-img-cont">
								<img className="cart-prod-img" src={imageUrl} />
							</div>
							<div className="cart-prod-det">
								<div className="cart-prod-head">{item.title}</div>
								<p className="cart-prod-desc">{item.description}</p>
							</div>
							<div className="cart-prod-prc">${displayCurrency(price)}</div>
							<div className="cart-prod-mul">x</div>
							<div className="cart-prod-qty">
								<input type="text" className="ant-input ant-input-disabled" value={item.qty} />
							</div>
							<div className="cart-prod-prc-spacer" />
							<div className="cart-prod-line-prc">${displayCurrency(total)}</div>
						</div>
					);
				})
			}
			<div className="cart-prod">
				<div className="cart-total">TOTAL</div>
				<div className="cart-prod-line-prc">${displayCurrency(cartTotal.totalPrice)}</div>
			</div>

		</div>
	);
}

class Orders extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		editable: false
	};

	componentDidMount() {
		this.props.getOrder(this.props.orderId);
	}

	/*
	enableEdit = () => {
			this.setState({
					editable: true
			});
	};
	*/

	disableEdit = () => {
			this.setState({
					editable: false
			});
			this.props.getOrder(this.props.orderId);
	};

	render() {
			console.log(this.props.orderId);
			if (this.props.order) {
					console.log(this.props.order.items);
			}

			const editable = this.state.editable;
			//const onEditEnable = this.enableEdit;
			const onEditDisable = this.disableEdit;

			return (
				<React.Fragment>
				{ this.props.order &&
					<Formik initialValues={this.props.order.orderInfo}>
						<div className="form">
							<React.Fragment>
								<div className='form-head'>
									<div className='form-title'>
										Pedido
									</div>
									<div className='form-space_between'>&nbsp;</div>
									{!editable &&
									<div className='form-toolbar'>
										{ /*<Button type="primary" onClick={onEditEnable}>Edit</Button> */ }
										<BackButton />
									</div>
									}
								</div>
								<div className='form-content'>
									<Form.Item label="Nome">
										<Field as={Input} name='name' disabled={!editable} />
									</Form.Item>
									<Form.Item label="Telefone">
										<Field as={Input} name='phone' disabled={!editable} />
									</Form.Item>
									<Form.Item label="Endereço">
										<Field as={Input.TextArea} name='address' rows={5} disabled={!editable} />
									</Form.Item>
									<Form.Item label="Comentário do Cliente">
										<Field as={Input.TextArea} name='comment' rows={5} disabled={!editable} />
									</Form.Item>
									<Form.Item label="Nosso Comentário">
										<Field as={Input.TextArea} name='comment' rows={5} disabled={!editable} />
									</Form.Item>
									<Form.Item label="Itens no Carrinho">
									<CartTable order={this.props.order}/>
									</Form.Item>
								</div>
								{editable &&
								<div className='form-bottom'>
									<Button type="primary">Enviar</Button>
									<Button onClick={onEditDisable} style={{ marginLeft: '10px' }}>Cancelar</Button>
								</div>
								}
							</React.Fragment>
						</div>
					</Formik>
				}
				</React.Fragment>
			);
  }
}

const mapDispatchToProps = {
	getOrder,
};

function mapStateToProps(state) {
	return {
		order: state.order,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
