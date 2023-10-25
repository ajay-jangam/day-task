import React from "react"
import "./myAccount.css"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import SearchIcon from "../../assets/images/icons/search.svg"
import SettingIcon from "../../assets/images/icons/setting.svg"
import Slider from "../../components/slider/Slider"
import MemberIcon from "../../assets/images/member-1.svg"
const MyAccount = () => {
	const flickityOptions = {
		cellAlign: "left",
		contain: true,
		pageDots: false,
		prevNextButtons: true,
	}

	const sliderContent = () => {
		return (
			<div className='taskContent'>
				<p className='taskTitle'>Real Estate Website Design</p>
				<div className='taskTeam'>
					<p className='taskMemberText'>Team members</p>
					<div className='taskMemberIcons'>
						<img className='taskMemberIcon' src={MemberIcon} />
						<img className='taskMemberIcon' src={MemberIcon} />
						<img className='taskMemberIcon' src={MemberIcon} />
						<img className='taskMemberIcon' src={MemberIcon} />
						<img className='taskMemberIcon' src={MemberIcon} />
					</div>
				</div>
				<div className='taskProgressBarWrapper'>
					<div className='taskProgressBarDetails'>
						<p className='taskProgressBarText'>Completed</p>
						<p className='taskProgress'>100%</p>
					</div>
					<div className='taskProgressBar'></div>
				</div>
			</div>
		)
	}

	const ongoingProjectCard = () => {
		return (
			<div className='ongoingProjectCard'>
				<p className='projectTitle'>Mobile App Wireframe</p>
				<div className='projectStatistics'>
					<div className='projectTeam'>
						<p className='projectMemberText'>Team members</p>
						<div className='projectMemberIcons'>
							<img
								className='projectMemberIcon'
								src={MemberIcon}
							/>
							<img
								className='projectMemberIcon'
								src={MemberIcon}
							/>
							<img
								className='projectMemberIcon'
								src={MemberIcon}
							/>
							<img
								className='projectMemberIcon'
								src={MemberIcon}
							/>
							<img
								className='projectMemberIcon'
								src={MemberIcon}
							/>
						</div>
						<p className='projectDueDetails'>
							Due on :{" "}
							<span className='projectDueDate'>21 March</span>
						</p>
					</div>
					<div className='projectProgressBarWrapper'>
						<div className='projectProgressBar'>
							<p className='projectProgress'>75%</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='myAccountWrapper container'>
			<div className='searchForm'>
				<Input
					inputClass='inputClass'
					type='search'
					iconLeftUrl={SearchIcon}
					placeholder='Seach tasks'
				/>
				<Button className='mainBtn solid' ButtonIcon={SettingIcon} />
			</div>
			<div className='completedTask '>
				<div className='textContent'>
					<p className='sectionTitle'>Completed Tasks</p>
					<a href='#' className='seeAllTaskLink'>
						See all
					</a>
				</div>
				<div className='completedTaskSliderWrapper'>
					<Slider options={flickityOptions}>
						<div className='carousel-cell'>{sliderContent()}</div>
						<div className='carousel-cell'>{sliderContent()}</div>
						<div className='carousel-cell'>{sliderContent()}</div>
						<div className='carousel-cell'>{sliderContent()}</div>
						<div className='carousel-cell'>{sliderContent()}</div>
						<div className='carousel-cell'>{sliderContent()}</div>
						<div className='carousel-cell'>{sliderContent()}</div>
					</Slider>
				</div>
			</div>
			<div className='ongoingProjectsWrapper'>
				<div className='textContent'>
					<p className='sectionTitle'>Ongoing Projects</p>
					<a href='#' className='seeAllTaskLink'>
						See all
					</a>
				</div>
				<div className='ongoingProjectCards'>
					{ongoingProjectCard()}
					{ongoingProjectCard()}
					{ongoingProjectCard()}
					{ongoingProjectCard()}
					{ongoingProjectCard()}
					{ongoingProjectCard()}
					{ongoingProjectCard()}
					{ongoingProjectCard()}
					{ongoingProjectCard()}
				</div>
			</div>
		</div>
	)
}

export default MyAccount
