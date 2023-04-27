import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    allPaintings: []
}

const paintingsSlice = createSlice({
    name: "painting",
    initialState,
    reducers: {
        actionAllPaintings: (state, {payload}) =>{
            state.allPaintings = [...payload]
        }
    }
});

export const {
    actionAllPaintings
} = paintingsSlice.actions

export const actionFetchAllPaintings = () => (dispatch) =>{
    return axios
    .get("https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043")
    .then(({data}) =>{
        dispatch(actionAllPaintings(data))
    })
    .catch(() => {
    
      });
}

export default paintingsSlice.reducer