import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';
import { combineReducers } from 'redux';

it('handles action of type SAVE_COMMENT', ()=>{
   const action = {
       type: SAVE_COMMENT,
       payload: 'new comment'
   };

   const newState = commentsReducer([], action);

   expect(newState).toEqual(['New Comment']);

});

it('handles action of unknown type', ()=>{
    const action = {
        type: 'Unknown'
    };

    const newState = combineReducers([], newState);

    expect(newState).toEqual([]);
});