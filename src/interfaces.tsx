/**
import { IEpisode } from './interfaces';
|--------------------------------------------------
| All interfaces
|--------------------------------------------------
*/

// creating a type for dispatch to remove the 'any' type
export type Dispatch = React.Dispatch<IAction>
// interface for node
export interface IState {
    episodes: Array<IEpisode>,
    favorites: Array<IEpisode>
}
// interface for action
export interface IAction {
    type: string,
    payload: Array<IEpisode> | any
}

export interface IEpisode {
    airdate: string
    airstamp: string
    airtime: "22:30"
    id: number
    image: {medium: string, original: string}
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    url: string
  }

export  interface IEpisodeProps {
    episodes: Array<IEpisode>,
    store: {state: IState, dispatch: Dispatch},
    toggleFavAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction,
    favorites: Array<IEpisode>

  }