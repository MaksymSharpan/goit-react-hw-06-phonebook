import React from "react"

const Filter = ({ onChange }) => {
	return (
		<>
			<input onChange={onChange} type="text" placeholder="search contact" />
		</>
	)
}

export default Filter
