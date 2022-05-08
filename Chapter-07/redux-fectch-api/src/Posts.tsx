import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Hooks"
import { fetchPostsThunk, postsSelector } from "./PostsSlice"

export default function Posts() {

    const posts = useAppSelector(postsSelector)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPostsThunk());
    }, [dispatch]);

    return (
        <div style={{ padding: '100px' }}>
            <h1>Posts</h1>
            <table>
                <thead>
                    <tr>
                        <th>USER ID</th>
                        <th>POST ID</th>
                        <th>TITLE</th>
                        <th>CONTENT</th>
                    </tr>
                </thead>

                <tbody>
                    {posts && posts.map((item: any) => {
                        return (
                            <tr>
                                <td>{item.userId}</td>
                                <td> {item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body} </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )

}