import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    watchlist: [],
  };
const watchlistSlice  = createSlice({
    name: 'watchlist',
    initialState,
    reducers:{
        addToWatchList: (state, action) => {
            state.watchlist = [...state.watchlist, action.payload];
            toast.success(`Movie Added to Watchlist!`, {
            position: 'top-right',
            autoClose: 2500,
            closeOnClick: true
          });
        },
        removefromWatchList: (state, action) => {
            const movieToRemove = action.payload;
            const updatedWatchlist = state.watchlist.filter(movie => movie !== movieToRemove);
            
            toast.success(`Movie Removed from Watchlist!`, {
                position: 'top-right',
                autoClose: 2500,
                closeOnClick: true
            });
        
            state.watchlist = updatedWatchlist;
        }
    }
})

export const {addToWatchList, removefromWatchList} = watchlistSlice.actions;
export default watchlistSlice.reducer;