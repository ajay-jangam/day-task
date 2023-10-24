import React from "react"
import "./button.css"

const Button = (props) => {
	const {
		className,
		type,
		value,
		onClick,
		ButtonIconClassName,
		ButtonIcon,
		ButtonIconAlt,
	} = props
	return (
		<button className={className} type={type} onClick={onClick}>
			<p>
				{ButtonIcon && (
					<img
						className={ButtonIconClassName}
						src={ButtonIcon}
						alt={ButtonIconAlt}
					/>
				)}
				{value}
			</p>
		</button>
	)
}

export default Button
