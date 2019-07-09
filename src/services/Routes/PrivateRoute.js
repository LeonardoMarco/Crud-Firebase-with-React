import React, { useState, useEffect } from 'react'
import { Route, Redirect } from "react-router-dom";

import { firebaseAuth } from '../firebaseConfig';
import Loading from '../../components/Loading';

export default function PrivateRoute({ component: Component, ...rest }) {

    const [isAll, setIsAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebaseAuth.onAuthStateChanged(function (user) {
            if (user) {
                setIsAll(true);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    }, []);

    if (loading) {
        return <Loading />;
    } else {
        return (
            <Route {...rest} render={props => (
                <div>
                    {!isAll ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                        : <Component {...props} />
                    }
                </div>
            )}
            />
        )
    }
}