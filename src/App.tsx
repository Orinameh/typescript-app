import React from 'react';
import {Link} from '@reach/router';
import { Store } from './Store';


export default function App(props: any):JSX.Element {
  const {state } = React.useContext(Store);


  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episodes</p>
        </div>
        <div>
            <Link to='/'>
              Home
            </Link>
            <Link to='/faves'>
              Favorites: {state.favorites.length}

            </Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  )
}


