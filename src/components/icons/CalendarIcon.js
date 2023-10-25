import React from "react"

const CalendarIcon = (props) => {
	const { className } = props

	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			className={className}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M8 2V5M16 2V5M3.5 9.09H20.5M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17'
				stroke='#617D8A'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15.694 13.7H15.703M15.694 16.7H15.703M11.995 13.7H12.004M11.995 16.7H12.004M8.29504 13.7H8.30504M8.29504 16.7H8.30504'
				stroke='#617D8A'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default CalendarIcon
