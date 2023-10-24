import { Route, BrowserRouter, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/header/Header"
import Authentication from "./pages/authentication/Authentication"
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
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
