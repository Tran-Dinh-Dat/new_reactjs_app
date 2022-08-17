import React from 'react';
import { Link } from 'react-router-dom';
import '../../header.css'

class Header extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <nav>
                    <Link to="home">Home</Link> |{" "}
                    <Link to="teams">Teams</Link> | {" "}
                    <Link to="form">Form</Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;
