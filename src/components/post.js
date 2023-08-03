
import * as React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Paper} from "@mui/material";

import { useState } from "react"
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


export  default function Post({id, title, body, removePost}) {

    const [removeConfirm, setRemoveConfirm] = useState(false)

    const handleRemoveConfirm = (id) => {
      removePost(id)
      handleClose();
    };

    const handleOpen = () => {
      setRemoveConfirm(true)
    }

    const handleClose = () => {
      setRemoveConfirm(false);
    };

    return (
      <Grid key={id} xs={12}>
        <Paper key={id} elevation={4}>

          <Typography>Post #{id}</Typography>
            <Button onClick={() => handleOpen()} variant="contained" color="error">
              <CloseIcon />
            </Button>

          <Typography fontSize={14} fontFamily={"cursive"} contentEditable>{title}
          </Typography>
          <Typography fontSize={14} fontFamily={"cursive"} contentEditable>{body}</Typography>

        </Paper>
            <Dialog
            open={removeConfirm}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Please confirm removing post with id "{id}"?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={() => handleRemoveConfirm(id)} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
      </Grid>
    )
}