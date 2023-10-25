import React from "react"
import "./header.css"
import DayTaskIcon from "../../assets/images/icons/dayTask_icon.svg"
import { useNavigate } from "react-router-dom"
import UserImage from "../../assets/images/user-profile-icon.png"

const Header = () => {
	const navigate = useNavigate()

	const myAccountHeader = () => {
		return (
			<div className='myAccountHeaderWrapper'>
				<div className='userDetails'>
					<p className='welcomeText'>Welcome Back!</p>
					<h2 className='userName'>Fazil Laghari</h2>
				</div>
				<div className='userProfilImgWrapper'>
					<img
						className='userProfilImg'
						src={UserImage}
						alt='User Name'
					/>
				</div>
			</div>
		)
	}

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
			{window.location.pathname === "/my-account" && myAccountHeader()}
		</div>
	)
}

export default Header
