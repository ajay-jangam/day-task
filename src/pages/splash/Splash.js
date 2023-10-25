import React from "react"
import "./splash.css"
import SplashhomeBanner from "../../assets/images/homeBanner.png"
import Button from "../../components/button/Button"
import { useNavigate } from "react-router-dom"
const Splash = () => {
	const navigate = useNavigate()

	return (
		<div className='splashWrapper'>
			<div className='splashContainer'>
				<div className='splashBanner'>
					<img
						className='bannerImage'
						src={SplashhomeBanner}
						alt='Day Task Banner'
					/>
				</div>
				<div className='splashContent'>
					<p className='title'>
						Manage your Task with <span>DayTask</span>
					</p>
					<Button
						className='splashButton mainBtn solid'
						type='button'
						value="Let's Start"
						onClick={() => {
							navigate("/authentication")
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Splash
