import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import styles from './routes.module.css'


const Routes = () => {
    return (
        <>
            <Sidebar />
            <div className={styles.center}>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </>
    )
}

export default Routes
