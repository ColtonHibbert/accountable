import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export const LogIn  = ({displayLogInModalAction, sendLogIn, submitEmailAction, submitCryptedPasswordAction }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="w-100 min-vh-100 fixed z-4 bg-gray o-70">
            </div>
            <div className="w-80 w-60-ns w-50-m w-30-l absolute z-5 bg-white"
                style={{ top:'5%', left:'50%', transform:'translate(-50%)' }}
            >   
                <div className="w-100 flex flex-row justify-end">
                    <div 
                    className="w2 h2 flex justify-center items-center ma1 ba br-100 pointer bg-light-gray"
                        onClick={() => dispatch(displayLogInModalAction)}
                    >x</div>
                </div>
                <main className="ph4 pb4 pt2 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Log In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
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
                                onClick={() => dispatch(sendLogIn)}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default LogIn;