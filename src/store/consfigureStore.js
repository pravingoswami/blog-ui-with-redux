import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducers from '../reducers/users'
import postsReducers from '../reducers/posts'
import commentsReducers from '../reducers/comments'
import imagesReducers from '../reducers/iamgesReducers'

const configureStore = () => {

    const store = createStore(combineReducers({
        user : usersReducers,
        posts : postsReducers,
        comments : commentsReducers,
        images : imagesReducers
    }), applyMiddleware(thunk))

    return store

}

export default configureStore