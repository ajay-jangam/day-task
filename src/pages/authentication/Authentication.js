import React, { useState } from "react"
import Input from "../../components/input/Input"
import "./authentication.css"
import UserEmailIcon from "../../assets/images/icons/usertag.svg"
import PasswordLock from "../../assets/images/icons/lock1.svg"
import EyeSlash from "../../assets/images/icons/eyeslash.svg"
import Button from "../../components/button/Button"
import GoogleIcon from "../../assets/images/icons/google.svg"
import UserIcon from "../../assets/images/icons/user.svg"

const Authentication = () => {
	const [checkbox, setCheckbox] = useState(false)
	const [enableSignUp, setEnableSignUp] = useState(false)

	const checkboxStatus = () => {
		setCheckbox((preValue) => !preValue)
	}

	const privacyPolicyTextLink = (
		<p>
			I have read & agreed to DayTask{" "}
			<a href='#'>Privacy Policy, Terms & Condition</a>
		</p>
	)

	const signInForm = () => {
		return (
			<div className='signInContent'>
				<p className='title'>Welcome Back!</p>
				<form>
					<Input
						inputClass='emailInput inputClass'
						type='text'
						placeholder='Enter Email'
						id='signInEmail'
						label='Email Address'
						iconLeftUrl={UserEmailIcon}
					/>
					<Input
						inputClass='passwordInput inputClass'
						type='password'
						placeholder='Enter Password'
						id='signInPassword'
						label='Password'
						iconLeftUrl={PasswordLock}
						iconRightUrl={EyeSlash}
					/>
					<a href='#' className='subTitle forgotPassword'>
						Forgot Password?
					</a>

					<Button
						type='submit'
						className='mainBtn solid logInBtn'
						value='Log In'
					/>
				</form>
			</div>
		)
	}

	const signUpForm = () => {
		return (
			<div className='signUpContent'>
				<p className='title'>Create your account</p>
				<Input
					inputClass='fullNameInput inputClass'
					type='text'
					placeholder='Enter Full Name'
					id='fullname'
					label='Full Name'
					iconLeftUrl={UserIcon}
				/>
				<Input
					inputClass='emailInput inputClass'
					type='text'
					placeholder='Enter Email'
					id='signUpEmail'
					label='Email Address'
					iconLeftUrl={UserEmailIcon}
				/>
				<Input
					inputClass='passwordInput inputClass'
					type='password'
					placeholder='Enter Password'
					id='signUpPassword'
					label='Password'
					iconLeftUrl={PasswordLock}
					iconRightUrl={EyeSlash}
				/>
				<Input
					inputClass='inputClass privacy-policy-input'
					id='privacyPolicy'
					type='checkbox'
					className='privacy-policy'
					label={privacyPolicyTextLink}
					onChange={checkboxStatus}
					checkboxStatus={checkbox}
				/>

				<Button
					type='submit'
					className='mainBtn solid logInBtn'
					value='Sign Up'
				/>
			</div>
		)
	}

	return (
		<>
			<div className='signWrapper'>
				{enableSignUp ? signUpForm() : signInForm()}
				<p className='optionalLogInText subTitle'>Or continue with</p>
				<Button
					ButtonIconClassName='buttonIconClass'
					ButtonIcon={GoogleIcon}
					type='button'
					className='mainBtn outlined logInBtn'
					value='Google'
				/>
				<p className='signUpLink subTitle'>
					{!enableSignUp
						? "Don't have an account?"
						: "Already have an account?"}{" "}
					<a
						href='#'
						onClick={(e) => {
							e.preventDefault()
							setEnableSignUp((preState) => !preState)
						}}>
						<span>{!enableSignUp ? "Sign Up" : "Log In"}</span>
					</a>
				</p>
			</div>
		</>
	)
}

export default Authentication
