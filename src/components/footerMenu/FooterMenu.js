import React from "react"
import "./footerMenu.css"
import { Link } from "react-router-dom"
import HomeIcon from "../icons/HomeIcon"
import MessageIcon from "../icons/MessagesIcon"
import AddTaskIcon from "../icons/AddTaskIcon"
import CalendarIcon from "../icons/CalendarIcon"
import NotificationIcon from "../icons/NotificationIcon"

const FooterMenu = () => {
	const pathName = window.location.pathname

	return (
		<div className='footerMenuWrapper'>
			<ul className='footerMenuList'>
				<li className='footerMenuItem'>
					<Link
						to='#'
						className={
							pathName === "/my-account" ? "activeStyled" : ""
						}>
						<HomeIcon className='footerMenuItemIcon' />
						Home
					</Link>
				</li>
				<li className='footerMenuItem'>
					<Link
						to='#'
						className={
							pathName === "/messages" ? "activeStyled" : ""
						}>
						<MessageIcon className='footerMenuItemIcon' />
						Chat
					</Link>
				</li>
				<li className='footerMenuItem addTaskMenuItem'>
					<Link to='#'>
						<AddTaskIcon className='footerMenuItemIcon' />
					</Link>
				</li>
				<li className='footerMenuItem'>
					<Link
						to='#'
						className={
							pathName === "/calendar" ? "activeStyled" : ""
						}>
						<CalendarIcon className='footerMenuItemIcon' />
						Calendar
					</Link>
				</li>
				<li className='footerMenuItem'>
					<Link
						to='#'
						className={
							pathName === "/notification" ? "activeStyled" : ""
						}>
						<NotificationIcon className='footerMenuItemIcon' />
						Notification
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default FooterMenu
