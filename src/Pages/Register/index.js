import React, { useState } from 'react';
import fireCollection from '../../services/firebaseConfig';
import Notification from '../../components/Notification';

export default function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function submitRegister(e) {
        e.preventDefault();
        const data = {
            email,
            password
        }

        if (password != confirmPassword) {
            Notification('ERROR', 'Passwords do not match');
        } else if (password.length < 6) {
            Notification('ERROR', 'O tamanho da senha tem que ser 6');
        } else {
            await fireCollection.signOut(data)
                .then(res => {
                    props.history.push('home')
                }).catch(error => {
                    Notification('ERROR', error.message);
                })
        }
    }

    return (
        <div className="body-login">
            <form onSubmit={submitRegister} className="form-auth">
                <div className="input-group-auth">
                    <label>E-mail</label>
                    <input type="email" className="input-control-auth" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group-auth">
                    <label>Password</label>
                    <input type="password" className="input-control-auth" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group-auth">
                    <label>Confirm Password</label>
                    <input type="password" className="input-control-auth" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="input-group-auth">
                    <input type="submit" className="submit-form-auth" />
                </div>
            </form>
        </div>
    );
}
