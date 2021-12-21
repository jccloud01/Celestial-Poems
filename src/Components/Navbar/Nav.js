import { Link } from 'react-router-dom'

function Nav(props) {

    return (
			<div>
				<Link to='/homepage'>
					<h1> Home </h1>
				</Link>
                <Link to='/profile'>
                    <h1> Profile </h1>
                </Link>
                <Link to='/dashboard'>
                    <h1> myDashboard </h1>
                </Link>
			</div>
		);
}

export default Nav;