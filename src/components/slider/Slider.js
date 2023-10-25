import React, { useRef, useEffect } from "react"
import Flickity from "flickity"
import "flickity/css/flickity.css"

const Slider = ({ options, children }) => {
	const sliderRef = useRef(null)
	let flkty = null

	useEffect(() => {
		flkty = new Flickity(sliderRef.current, options)

		return () => {
			flkty.destroy()
		}
	}, [options])

	return (
		<div ref={sliderRef} className='slider'>
			{children}
		</div>
	)
}

export default Slider
