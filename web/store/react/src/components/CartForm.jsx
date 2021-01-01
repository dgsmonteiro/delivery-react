import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { connect } from 'react-redux'
import customerActions from "../actions/customer";

class Cart extends React.Component {
	constructor(props) {
		super(props);
	}

	phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

	validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Obrigatório'),
		phone: Yup.string()
			.required('Obrigatório')
			.matches(this.phoneRegExp, 'Número de telefone inválido'),
		address: Yup.string()
			.required('Obrigatório')
	});

	handleCompleteOrder = (values) => {
		this.props.checkout(values);
	};

	render() {
		return (
			<React.Fragment>
				<div className="cartTitle">Forma de Pagamento</div>
				{/* alterar isso aqui adicionar payment method */}
				<div className="cartFormContainer">
					<Formik
						initialValues={
							{
								name: '',
								phone: '',
								address: '',
								comment: ''
							}
						}
						validationSchema={this.validationSchema}
						onSubmit={this.handleCompleteOrder}
					>
						{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit
							}) => (
								<form onSubmit={handleSubmit}>
									<div className="field">
										<label>Como devemos chamá-lo?</label>
										<input name="name" type="text" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
										<div className="errors">
										{touched.name && errors.name}
										</div>
									</div>
									<div className="field">
										<label>Seu número do whatsapp</label>
										<input name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
										<div className="errors">
											{touched.phone && errors.phone}
										</div>
									</div>
									<div className="field">
										<label>Seu endereço de entrega</label>
										<textarea name="address" rows={3} onChange={handleChange} onBlur={handleBlur} value={values.address}/>
										<div className="errors">
											{touched.address && errors.address}
										</div>
									</div>
									<div className="field">
										<label>Se você quiser deixar um comentário para nós, use o espaço abaixo</label>
										<textarea name="comment" rows={3} onChange={handleChange} onBlur={handleBlur} value={values.comment}/>
										<div className="errors">
											{touched.comment && errors.comment}
										</div>
									</div>0
								</form>
							)}
					</Formik>
				</div>
				<div className="cartTitle">Informações Pessoais</div>
				<div className="cartFormContainer">
					<Formik
						initialValues={
							{
								name: '',
								phone: '',
								address: '',
								comment: ''
							}
						}
						validationSchema={this.validationSchema}
						onSubmit={this.handleCompleteOrder}
					>
						{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit
							}) => (
								<form onSubmit={handleSubmit}>
									<div className="field">
										<label>Como devemos chamá-lo?</label>
										<input name="name" type="text" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
										<div className="errors">
										{touched.name && errors.name}
										</div>
									</div>
									<div className="field">
										<label>Seu número do whatsapp</label>
										<input name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
										<div className="errors">
											{touched.phone && errors.phone}
										</div>
									</div>
									<div className="field">
										<label>Seu endereço de entrega</label>
										<textarea name="address" rows={3} onChange={handleChange} onBlur={handleBlur} value={values.address}/>
										<div className="errors">
											{touched.address && errors.address}
										</div>
									</div>
									<div className="field">
										<label>Se você quiser deixar um comentário para nós, use o espaço abaixo</label>
										<textarea name="comment" rows={3} onChange={handleChange} onBlur={handleBlur} value={values.comment}/>
										<div className="errors">
											{touched.comment && errors.comment}
										</div>
									</div>
									<div className="completeOrderButtonContainer">
										<button className="blueButton" type="submit" disabled={this.props.isSubmitting}>Enviar Pedido {this.props.isSubmitting && (<div className="spinner"></div>)}</button>
									</div>
								</form>
							)}
					</Formik>
				</div>
			</React.Fragment>
		);
	}
}

function mapStateToProps (state) {
	return {
		isSubmitting: state.checkout.isSubmitting
	}
}

const mapDispatchToProps = {
	checkout: customerActions.checkout
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
