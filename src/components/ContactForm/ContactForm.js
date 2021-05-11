import React, { Component } from "react"
import { connect } from "react-redux"
import contacts from "../../redux/contacts-actions"
import style from "./ContactForm.module.css"

class ContactForm extends Component {
	state = { name: "", number: "" }

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()

		if (this.state.name !== "" && this.state.number !== "") {
			this.props.onSubmit({
				name: this.state.name,
				number: this.state.number,
			})

			this.setState({ name: "", number: "" })
			return
		}

		alert("Please, complete all required fields!")
	}

	render() {
		return (
			<form className={style.form} onSubmit={this.handleSubmit}>
				<label>
					Name
					<input
						className={style.input}
						autoComplete="on"
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Number
					<input
						className={style.input}
						autoComplete="on"
						type="text"
						name="number"
						value={this.state.number}
						onChange={this.handleChange}
					/>
				</label>
				<button className={style.btn} type="submit">
					Add contact
				</button>
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (name, number) => dispatch(contacts.addContact(name, number)),
})

export default connect(null, mapDispatchToProps)(ContactForm)
