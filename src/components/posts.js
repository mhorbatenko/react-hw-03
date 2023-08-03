"use client"
import { Grid } from "@mui/material"
import { useState, useEffect } from "react"
import { Button } from "@mui/material";
import Post from '@/components/post'
import AddIcon from '@mui/icons-material/Add';
import uuidV4 from "@/app/utils/uuid";


export default function Posts() {

    const [posts, setPosts] = useState([])

    const getApiData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        ).then((response) => response.json());
        setPosts(response);
      };

    useEffect(() => {
        getApiData();
    }, []);

    function addPostHandler() {
        const updatedPosts = [{id: uuidV4(), title: 'Write post title', body: 'Write post body'}, ...posts]
        setPosts(updatedPosts)
    }

    function removePost(idToRemove) {
        const updatedPosts = posts.filter((post) => {
            return post.id != idToRemove
        });
        setPosts(updatedPosts)
    }
    return (
        <Grid container gap={2}>
        <Grid item xs={12}>
                <Button variant="contained" onClick={() => addPostHandler()}>Add Post<AddIcon></AddIcon></Button>
        </Grid>
            {
                posts.map(
                    (post) => (
                        <Post id={post.id} body={post.body} title={post.title} removePost={removePost}/>
                    )
                )
            }

        </Grid>

        )
}