"use client"
import { Card, CardContent, Grid, Item } from "@mui/material"
import {Typography} from "@mui/material"
import Box from '@mui/system/Box';
import { useState, useEffect } from "react"
import { Button } from "@mui/material";
import Post from '@/components/post'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import uuidV4 from "@/app/utils/uuid";


export default function Posts() {

    const [posts, setPosts] = useState([])
    const [agreement, SetAgreement] = useState(false)


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

    const handleClickOpen = () => {
        SetAgreement(true);
      };
    
      const handleClose = () => {
        SetAgreement(false);
      };

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