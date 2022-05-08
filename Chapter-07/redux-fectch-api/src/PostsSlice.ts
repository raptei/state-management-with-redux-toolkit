import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./Store";

export const fetchPostsThunk = createAsyncThunk(
    'posts/fetchAll',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return (await response.json());
    }
)

interface PostsState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: PostsState = {
    entities: [],
    loading: 'idle',
}

const postsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsThunk.pending, (state: any, action: any) => {
            state.entities = [];
            state.loading = 'pending';
        }).addCase(fetchPostsThunk.rejected, (state: any, action: any) => {
            state.entities = [];
            state.loading = 'failed';
        }).addCase(fetchPostsThunk.fulfilled, (state: any, action: any) => {
            state.entities = action.payload;
            state.loading = 'succeeded';
        })
    },
})

export const postsSelector = (state: RootState) => state.posts.entities;

export default postsSlice.reducer;