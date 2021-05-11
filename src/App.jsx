import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"

import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter"

class App extends Component {
	state = {
		contacts: [
			{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
			{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
			{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
			{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
		],
		filter: "",
	}

	addNewContact = ({ id, name, number }) => {
		const { contacts } = this.state
		const newContact = {
			id: uuidv4(),
			name,
			number,
		}
		if (contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase())) {
			return alert(`${newContact.name} - contact already exists`)
		}
		this.setState(({ contacts }) => ({
			contacts: [...contacts, newContact],
		}))
	}
	deleteContact = (idx) => {
		this.setState(({ contacts }) => {
			const newList = [...contacts]
			newList.splice(idx, 1)
			// const result = newList.filter((_, index)=> index !== idx);
			return {
				contacts: newList,
			}
		})
	}

	onChangeFilter = ({ target }) => {
		const filterValue = target.value
		this.setState({ filter: filterValue })
	}

	filterContacts = () => {
		const { contacts, filter } = this.state
		const normalizedFilter = filter.toLowerCase()
		if (!filter) {
			return contacts
		}
		return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
	}
	componentDidMount() {
		// console.log("app componentDidMount")
		const contactList = JSON.parse(localStorage.getItem("contacts"))
		this.setState({ contacts: contactList || [] })
	}

	componentDidUpdate(prevProps, prevState) {
		const { contacts } = this.state
		// console.log("app componentDidUpdate")
		if (contacts !== prevState.contacts) {
			localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
		}
	}

	render() {
		const { addNewContact, deleteContact, onChangeFilter, filterContacts } = this
		const contacts = filterContacts()

		return (
			<div>
				<h1>Phonebook</h1>
				<ContactForm onSubmit={addNewContact} />
				<h2>Contacts</h2>
				<Filter onChange={onChangeFilter} />
				<ContactList contacts={contacts} deleteContact={deleteContact} />
			</div>
		)
	}
}
export default App
