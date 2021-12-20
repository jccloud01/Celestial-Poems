import './App.css';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import 'react-bootstrap';
import Home from './Components/Home';
import myDashboard from './Components/myDashboard';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import userProfile from './Components/userProfile';

function App() {

	
	return (
		<div className='App'>


			<Routes>
				<Route 
          path='/' element={Home} 
        />
        <Route path='/login' element={LoginPage} 
        />
        <Route path='/register' element={Register}
        />
        <Route path='/user-profile' element={userProfile}
        />
				<Route
					path='/dashboard'
					element={myDashboard}
				/>
			</Routes>
		</div>
	);
}

export default App;
