import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './navigation.scss';

class Navigation extends React.Component {
    render() {
        return (
            <div>
            <ul className="nav justify-content-left">
                <li className="nav-item"><NavLink to='/Dashboard' className="navigation" >
                <i className="fas fa-chart-bar" style={{ paddingRight: 6 }}></i>Dashboard
                </NavLink></li>
                <li className="nav-item"><NavLink to='/World-Markets' className="navigation">
                <i className="fas fa-globe-americas" style={{ paddingRight: 6 }}></i>World Markets
                </NavLink></li>
                <li className="nav-item"><NavLink to='/About' className="navigation">
                <i className="fas fa-newspaper" style={{ paddingRight: 6 }}></i>About
                </NavLink></li>
                <li className="nav-item"><NavLink to='/Compare-Stock-Brokers' className="navigation">
                <i className="fas fa-balance-scale" style={{ paddingRight: 6 }}></i>Compare Brokers
                </NavLink></li>
            </ul>
            
            </div>
        )
    }
}

export default Navigation;