import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Dashboard from './Components/myDashboard';
import userProfile from './Components/userProfile';
import Home from './Components/Home';
import Register from './Components/Register';
import Nav from './Components/Navbar/Nav';

function App() {
	const [selectUser, setSelectUser] = useState([]);

	const [user, setUser] = useState({
		userName: '',
		poems: [],
	});

	return (
		<div className='wrapper'>
			<h1>Celestial Poems</h1>
			<Nav
				selectUser={selectUser}
				setSelectUser={setSelectUser}
				user={user}
				setUser={setUser}
			/>
				<Routes>
					<Route
						path='/dashboard'
						element={<Dashboard
						user={user}
						setUser={setUser}/>}
					/>
					<Route
						exact
						path='/profile'
						element={<userProfile
						user={user}
						setUser={setUser}/>}
					/>
					<Route
						path='/register'
						element={<Register
						user={user}
						setUser={setUser}/>}
					/>
					<Route path='/homepage' element={Home} />
				</Routes>
		</div>
	);
}

export default App;
