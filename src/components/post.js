
// import { Card, Typography, Grid } from "@mui/material";
// import { Grid } from "@mui/material";
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

export  default function Post({id, content}) {
    const theme = useTheme();

    return (
      <Grid item xs={4}>
        <Card>
          <CardContent>
          <Typography>#{id}</Typography>
            <Typography>{content}</Typography>
          </CardContent>
        </Card>
    </Grid>
    )
}