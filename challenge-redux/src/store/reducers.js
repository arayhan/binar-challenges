import { combineReducers } from 'redux';
import movieReducer from './movie/movie.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
	user: userReducer,
	movie: movieReducer,
});
