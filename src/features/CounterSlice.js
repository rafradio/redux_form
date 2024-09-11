import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tableDatas } from './data/dataForTable';

const initialState = {
    // counterValue: 0,
    // status: "idle",
    newValue: 0,
    // posts: [
    //     { id: '1', title: 'First Post!', content: 'Hello!' },
    //     { id: '2', title: 'Second Post', content: 'More text' }
    // ],
    // dataTable: [{id: '1',firstName: 'firstName', lastName: 'test'}],
    dataTable: tableDatas(),
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