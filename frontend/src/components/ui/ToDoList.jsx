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

    renderTasks(task) {
        const {text, isChecked} = task;

        return (
            <ToDoTask 
                text={text} 
                isChecked={isChecked} 
                onClick={value => task.isChecked = value} 
            />
        );
    }

    render() {
        const {classes, title, tasks} = this.props;

        return (
            <Paper className={classes.root} elevation={10}>
                <Typography variant="h2">
                    {title}
                </Typography>
                {tasks.map(this.renderTasks)}
            </Paper>
        );
    }
}

export default withStyles(styles)(ToDoList);