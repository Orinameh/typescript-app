import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';
import './index.css';
import App from './App';
import { StoreProvider } from './Store'
import HomePage from './HomePage';
// import * as serviceWorker from './serviceWorker';
import FavesPage from './FavesPage';


const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent
ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path='/'>
                <RouterPage pageComponent={<HomePage />} path='/' />
                <RouterPage pageComponent={<FavesPage />} path='/faves' />
            </App>

        </Router>
    </StoreProvider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
