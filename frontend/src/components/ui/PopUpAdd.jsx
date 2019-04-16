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
        error: false,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.enterKeyListener);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.enterKeyListener);
    }

    enterKeyListener = e => {
        if (e.key === 'Enter' && this.state.open) {
            e.preventDefault();
            this.saveTask();
        }
    };

    openDialog = () => this.setState({open: true});
    closeDialog = () => this.setState({open: false, text: '', error: false});
    saveTask = () => {
        if (this.state.text) {
            this.context.addTask(this.state.text);
            this.setState({open: false, text: ''});
        } else {
            this.setState({error: true});
        }
    };

    render() {
        const {open, text, error} = this.state;

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
                            margin="dense"
                            label="Task Text"
                            type="text"
                            placeholder="New Task"
                            InputProps={{
                                onChange: e => this.setState({text: e.target.value, error: false}),
                                value: text,
                            }}
                            autoFocus
                            fullWidth
                            error={error}
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