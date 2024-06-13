import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { menuAPI } from '../api/api'

const initialState = {
    menu: [],
}

export const fetchMenu = createAsyncThunk(
    'menu/fetchMenu', async () => {
        const response = await menuAPI.getMenu();
        console.log(response)
        return response;
    }
);
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuAction: (state, action) => {
            if (action.payload && action.payload.menu) {
                state.menu = action.payload.menu;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenu.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchMenu.fulfilled, (state, action) => {
                if (action.payload && action.payload.menu) {
                    state.menu = action.payload.menu;
                }
            });
    }
})

// Action creators are generated for each case reducer function
export const { setMenuAction } = menuSlice.actions


export default menuSlice.reducer