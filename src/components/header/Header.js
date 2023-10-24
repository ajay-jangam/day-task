import React from "react"
import "./header.css"
import DayTaskIcon from "../../assets/images/icons/dayTask_icon.svg"
import { useNavigate } from "react-router-dom"

const Header = () => {
	const navigate = useNavigate()

	return (
		<div className='headerWrapper'>
			<img
				className='dayTaskIcon'
				src={DayTaskIcon}
				alt='Day Task Icon'
				onClick={() => {
					navigate("/")
				}}
			/>
		</div>
	)
}

export default Header
