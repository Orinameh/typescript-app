import React from 'react';
import { IEpisode } from './interfaces';

const EpisodeList = (props: any): Array<JSX.Element> => {
    const { episodes, toggleFavAction, favorites, store} = props;
    const { state, dispatch } = store

    return (
        episodes.map((episode: IEpisode )=> {
            return (
              <section key={episode.id} className="episode-box">
                <div className="img-contain">
                  <img src={episode.image.medium} alt={`Ricky and Morty ${episode.name}`} />
                </div>
                <div>{episode.name}</div>
                <section style={{ display: 'flex', justifyContent: 'space-between'}}>
                 <div> Season: {episode.season} Number: {episode.number}</div>
                 <button type="button" onClick={() =>toggleFavAction(state, dispatch, episode)}>
                   {favorites.find((fav: IEpisode) => fav.id === episode.id) ? "UnFav" : "Fav"}
                  </button>
                </section>
              </section>
            )
          })
    )
}

export default EpisodeList;