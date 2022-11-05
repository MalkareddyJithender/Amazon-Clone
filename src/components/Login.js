import React,{ useState } from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    const signIn = (e) =>
    {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then((userCredentials) =>
        {
            if(userCredentials)
            {
                console.log(userCredentials)
            history.push("/");
            }
        })
        .catch((error) =>
        {
            alert(error.message);
        })
    };

    const register = (e) =>
    {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((userCredentials) =>
        {
            if(userCredentials)
            {
            history.push("/");
            }
        })
        .catch((error) =>
        {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="/images/amazon2.png"
                />
             </Link>
             <div className="login__container">
                 <h1>Sign-in</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input 
                     type="text" 
                     placeholder="E-mail"
                     value={email}
                     onChange = {(e) =>
                    {
                        setEmail(e.target.value); 
                    }}
                     />

                     <h5>Password</h5>
                     <input 
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) =>
                    {
                        setPassword(e.target.value);
                    }}
                      />

                     <button 
                     className="login__signInButton"
                     onClick={signIn}
                     >Sign In</button>
                 </form>
                 <p>
                     By continuing,you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice.
                 </p>
                 <button
                 className="login__registerButton"
                 onClick={register}
                 >Create your Amazon Account</button>
             </div>
        </div>
    )
}

export default Login;
