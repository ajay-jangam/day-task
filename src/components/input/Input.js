import React from "react"
import "./input.css"
import CheckedIcon from "../../assets/images/icons/checkboxIcon.svg"
import UncheckedIcon from "../../assets/images/icons/unchecked.svg"

const Input = (props) => {
	const {
		id,
		type,
		label,
		style,
		onChange,
		placeholder,
		inputClass,
		iconLeftUrl,
		iconLeftAlt,
		iconRightUrl,
		iconRightAlt,
		isCheckbox,
	} = props

	return (
		<>
			<div className={inputClass}>
				{iconLeftUrl && (
					<img
						className='inputIconLeft'
						src={iconLeftUrl}
						alt={iconLeftAlt}
					/>
				)}

				{type === "checkbox" && (
					<img
						className='inputIconLeft'
						src={isCheckbox ? CheckedIcon : UncheckedIcon}
						alt='checkbox'
					/>
				)}

				{label && <label htmlFor={id}>{label}</label>}

				<input
					id={id}
					type={type}
					style={style}
					onChange={type === "checkbox" ? onChange : null}
					placeholder={placeholder}
				/>
				{iconRightUrl && (
					<img
						className='inputIconRight'
						src={iconRightUrl}
						alt={iconRightAlt}
					/>
				)}
			</div>
		</>
	)
}

export default Input
