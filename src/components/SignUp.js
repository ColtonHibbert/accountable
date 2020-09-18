import React from 'react';
import {useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
    displaySignUpModalAction, 
    submitEmailAction, 
    submitCryptedPasswordAction, 
    submitNameAction, 
    sendSignUpAction } from '../services/actions.js';

export function SignUp() {
    const dispatch = useDispatch();

    /*const {displaySignUpModalAction, submitEmailAction, submitCryptedPasswordAction, submitNameAction, sendSignUpAction } = useSelector(state => ({

    }), shallowEqual);*/

    return (
        <div>
            <div className="w-100 min-vh-100 fixed z-4 bg-gray o-70">
            </div>
            <div className="w-80 w-60-ns w-50-m w-30-l absolute z-5 bg-white"
                style={{ top:'10%', left:'50%', transform:'translate(-50%)' }}
            >
                <div className="w-100 flex flex-row justify-end">
                    <div 
                    className="w2 h2 flex justify-center items-center ma1 ba br-100 pointer bg-light-gray"
                        onClick={() => dispatch(displaySignUpModalAction)}
                    >x</div>
                </div>
                <main className="ph4 pb4 pt2 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="name">Name</label>
                            <input 
                                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" 
                                onChange={() => dispatch(submitNameAction)}
                            />
                        </div>
                            <div className="mt3">
                                <label classname="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
                                    onChange={() => dispatch(submitEmailAction)}
                                />
                            </div>
                            <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" 
                                onChange={() => dispatch(submitCryptedPasswordAction)}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" 
                                onClick={() => dispatch(sendSignUpAction)}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SignUp;