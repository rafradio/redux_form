import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    counterValue: 0,
    status: "idle",
    newValue: 0,
    posts: [
        { id: '1', title: 'First Post!', content: 'Hello!' },
        { id: '2', title: 'Second Post', content: 'More text' }
    ]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.counterValue += 1
        },
        postAdded: (state, action) => {
            state.posts.push(action.payload);
        }
    },
});

export const { increment, postAdded } = counterSlice.actions;

export default counterSlice.reducer;