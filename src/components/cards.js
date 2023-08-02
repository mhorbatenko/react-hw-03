"use client"
import { Card, CardContent, Grid, Item } from "@mui/material"
import {Typography} from "@mui/material"
import Box from '@mui/system/Box';
import { useState, useEffect } from "react"
import { Button } from "@mui/material";
import Post from '@/components/post'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {Paper} from "@mui/material";


import uuidV4 from "@/app/utils/uuid";

export default function ToDosCards() {

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
        const updatedPosts = [...posts, {id: uuidV4(), title: 'new', content: 'foo-bar'}]
        updatedPosts.reverse()
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
        <Grid item xs={3}>
            <Paper elevation={4}>
                <Button variant="contained" onClick={() => addPostHandler()}>Add Post<AddIcon></AddIcon></Button>
            </Paper>
        </Grid>
            {
                posts.map(
                    (post) => (
                            <Grid key={post.id} xs={3}>
                            <Paper key={post.id} elevation={4}>

                            <Typography>Post #{post.id}</Typography>
                            <Button
                                onClick={() => removePost(post.id)}
                                variant="contained"
                                color="error">
                                <CloseIcon />
                            </Button>

                            <Typography fontSize={14} fontFamily={"cursive"}>{post.title}</Typography>
                            <Typography fontSize={14} fontFamily={"cursive"}>{post.body}</Typography>

                            </Paper>
                            </Grid>
                    )
                )
            }

        </Grid>

        )
}