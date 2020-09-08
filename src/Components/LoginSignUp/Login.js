import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import BlueButton from '../Layout/BlueButton';

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const submitValue = () => {
        const formDetails = {
            'username' : username,
            'password' : password
        }
        console.log(formDetails);
    }

    return(
        <div className="m-auto max-w-sm flex flex-col p-6 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
            <form className="flex flex-col mx-auto py-8 px-6">
            <h4 className="font-bold uppercase text-blue-600">Login</h4>
                <div className="flex flex-col mt-4">
                    <label name="username" className="uppercase text-sm mb-2 font-bold">
                        Username
                    </label>
                    <input className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg" type="text"  placeholder="somedude" name="username" onChange={e => setUsername(e.target.value)} />
                </div>

                <div className="flex flex-col mt-4">
                    <label name="username" className="uppercase text-sm mb-2 font-bold">
                        Password
                    </label>
                    <input className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg" type="password" placeholder="******" name="password"  onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="mt-8">
                    <div onClick={submitValue} className="uppercase w-20 font-bold"><BlueButton text="Login" /></div>

                    <p className="mx-auto mt-6 cursor-pointer uppercase font-bold text-xs text-blue-500 hover:text-blue-300">
                       Forgot Password?
                    </p>
                    <p className="mx-auto mt-2 text-xs">
                      No account? &nbsp;
                      <Link to="/signup">
                          <span className="cursor-pointer uppercase font-bold text-blue-500 hover:text-blue-300">Sign Up</span>!
                        </Link>
                    </p>
                </div>
            </form>
        </div> 
    )
}

export default Login;