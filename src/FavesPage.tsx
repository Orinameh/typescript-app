
import React from 'react';
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { toggleFavAction } from './Actions';



const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

export default function FavesPage(): JSX.Element {
  const {state, dispatch} = React.useContext(Store);

  const props:IEpisodeProps = {
    episodes: state.favorites,
    store: {state, dispatch},
    toggleFavAction,
    favorites: state.favorites
  };

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <div className="episode-layout">
                <EpisodeList {...props} />
            </div>
        </React.Suspense>
    )
}
