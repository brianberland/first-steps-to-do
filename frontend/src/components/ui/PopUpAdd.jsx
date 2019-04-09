import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TaskContext } from 'TaskStore';

export default class PopUpAdd extends React.Component {
    static contextType = TaskContext;
    
    state = {
        open: false,
        text: '',
    };

    openDialog = () => this.setState({open: true});
    closeDialog = () => this.setState({open: false});
    saveTask = () => {
        this.context.addTask(this.state.text);
        this.setState({open: false, text: ''});
    };

    render() {
        const {open, text} = this.state;

        return (
            <React.Fragment>
                <Button variant="contained" color="primary" size="large" onClick={this.openDialog}>
                    Add a New Task
                </Button>
                <Dialog
                    open={open}
                    onClose={this.closeDialog}
                >
                    <DialogTitle>New Task</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Write out your New Task below:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            fullWidth
                            margin="dense"
                            label="Task Text"
                            type="text"
                            placeholder="New Task"
                            InputProps={{
                                onChange: e => this.setState({text: e.target.value}),
                                value: text,
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.saveTask} variant="contained" color="primary">
                            Add Task
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}