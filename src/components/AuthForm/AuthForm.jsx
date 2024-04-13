import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from '../../redux/auth/selectors';

// import { useDispatch } from 'react-redux';



export const AuthForm = () => {
    const isSignedIn = useSelector(selectAuthIsSignedIn)

    return ( isSignedIn ?
        <div>
            <h3>Sign Up</h3>
            <form>
                <label for="email">Enter your email</label>
                <input type="email" placeholder='E-mail' required name='email'></input>
            <label for="password">Enter your password</label>
            <input type="password" placeholder='Password' required />
            <label for="password">Repeat password</label>
            <input type="password" placeholder='Repeat password' required />
            <button type='submit'>Sign up</button>
            </form>
        </div> : <div>
            <h3>Sign In</h3>
            <form>
                <label for="email">Enter your email</label>
                <input type="email" placeholder='E-mail' required name='email'></input>
            <label for="password">Enter your password</label>
            <input type="password" placeholder='Password' required />
            <button type='submit'>Sign in</button>
            </form>
        </div>
    )
}
