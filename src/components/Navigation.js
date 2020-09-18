import React from 'react';
import { store } from '../index.js';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {
    displaySignUpModalAction, 
    displayLogInModalAction,
    displayMobileMenuAction
} from '../services/actions';

export function Navigation() {
    const dispatch = useDispatch();

    const { signOut, loggedIn, isMobile,  name } = useSelector(state => ({
        signOut: state.signOut,
        loggedIn: state.loggedIn, 
        isMobile: state.isMobile, 
        name: state.name
    }),shallowEqual)

    return (
        <div>
            <nav className="
                w-100 flex flex-row justify-between items-center ph3 pv3 bg-light-gray
                flex-column-ns
                flex-column-m 
                flex-row-l"
            >
                <div className="">
                    <div className="flex items-center">
                        <a className="w-100 flex no-underline" href="#" title="Home">
                            <div className="dib w2 h2">
                                <p className="">SVG</p>
                            </div>
                        </a>
                        <h1 
                            className="flex f5 f4-ns f3-m f2-l pl1 ma0"
                        >Title</h1>
                    </div>
                </div>
                {
                    isMobile ?
                    <div
                        onClick={() => dispatch(displayMobileMenuAction)}
                    >
                        <svg className="w2 h2 flex items-center pa0 ma0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    </div>
                    : ''
                }
                {
                    isMobile ? ''
                    : 
                    <div 
                    className="w-100 h2 mt3 flex items-center justify-center tc
                    justify-end-l
                    ">
                        <div className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="Featured"><a href="#featuredhikes" className="no-underline dark-gray">Featured Hikes</a></div>
                    {
                        loggedIn ? 
                        <div className="flex flex-row items-center">
                            <div className="link dim dark-gray f6 f5-l dib pointer" 
                                onClick={signOut}
                            >Sign Out</div>
                            <div className="flex self-end pl3">Welcome {name}</div>
                        </div>
                        :
                        <div className="flex">
                            <div
                            className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="Log in"
                                onClick={() => dispatch(displayLogInModalAction())}
                            >Log in</div>
                            <div className="link dim dark-gray f6 f5-l dib pointer" title="Sign up"
                                onClick={() => dispatch(displaySignUpModalAction())}
                            >Sign Up</div>
                        </div>
                    }
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navigation;