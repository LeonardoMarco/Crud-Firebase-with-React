import React, { useState } from 'react';
import './styles.css';
import fireCollection from '../../services/firebaseConfig';


export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitLogin(e) {
        e.preventDefault();
        const data = {
            email,
            password
        }

        await fireCollection.signIn(data)
            .then(res => {
                props.history.push('home')
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="body-login">
            <form onSubmit={submitLogin} className="form-auth">
                <div className="input-group-auth">
                    <label>E-mail</label>
                    <input type="email" className="input-control-auth" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group-auth">
                    <label>Password</label>
                    <input type="password" className="input-control-auth" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group-auth">
                    <input type="submit" className="submit-form-auth" />
                </div>
            </form>
        </div>

    );
}
