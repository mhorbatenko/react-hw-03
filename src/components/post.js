
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {SkipNextIcon} from '@mui/icons-material/SkipNext';
import Grid from '@mui/material/Grid';
import {Paper} from "@mui/material";

import { useState, useEffect } from "react"
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export  default function Post({id, title, body, removePost}) {
    // const theme = useTheme();

    return (
      <Grid key={id} xs={12}>
        <Paper key={id} elevation={4}>

          <Typography>Post #{id}</Typography>
            <Button onClick={() => removePost(id)} variant="contained" color="error">
              <CloseIcon />
            </Button>

          <Typography fontSize={14} fontFamily={"cursive"}>{title}</Typography>
          <Typography fontSize={14} fontFamily={"cursive"}>{body}</Typography>

        </Paper>
      </Grid>
    )
}