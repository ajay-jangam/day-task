import { Route, BrowserRouter, Routes } from "react-router-dom"
import "./App.css"
import FooterMenu from "./components/footerMenu/FooterMenu"
import Header from "./components/header/Header"
import Authentication from "./pages/authentication/Authentication"
import MyAccount from "./pages/myAccount/MyAccount"
import Splash from "./pages/splash/Splash"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' exact element={<Splash />} />
					<Route
						path='/authentication'
						element={<Authentication />}
					/>
					<Route path='/my-account' element={<MyAccount />} />
				</Routes>
				<FooterMenu />
			</BrowserRouter>
		</div>
	)
}

export default App
