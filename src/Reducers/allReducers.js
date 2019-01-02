import { combineReducers } from 'redux';
import articlesReducer from './articles_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from './users_reducer'

const rootReducer = combineReducers({
 articles: articlesReducer,
 comments: commentsReducer,
 users: usersReducer
})

export default rootReducer;