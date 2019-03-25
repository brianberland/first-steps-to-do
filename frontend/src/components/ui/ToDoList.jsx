import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ToDoTask from './ToDoTask';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 4,
    },
});

class Task {
    constructor({text, isChecked}) {
        this.text = text || '';
        this.isChecked = isChecked || false;
    }
    text = '';
    isChecked = false;
    onClick = (checked) => this.isChecked = checked;
}

class ToDoList extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        title: PropTypes.string,
        tasks: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        title: 'My To Do List',
        tasks: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            task: new Task({
                text: 'fish tiddies', 
                isChecked: true
            }),
            isChecked: true,
        };
    }

    render() {
        const {classes, title} = this.props;
        const {task, isChecked} = this.state;

        return (
            <Paper className={classes.root} elevation={10}>
                <Typography variant="h2">
                    {title}
                </Typography>
                <ToDoTask text={task.text} isChecked={isChecked} onClick={(checked) => this.setState({isChecked: checked})} />
            </Paper>
        );
    }
}

export default withStyles(styles)(ToDoList);