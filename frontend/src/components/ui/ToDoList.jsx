import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import ToDoTask from './ToDoTask';
import { TaskContext } from 'TaskStore';
import PopUpAdd from './PopUpAdd';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 4,
    },
    popUpContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing.unit * 2,
    },
});

class ToDoList extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        title: PropTypes.string,
    };

    static defaultProps = {
        title: 'My To Do List',
    };

    static contextType = TaskContext;

    render() {
        const {classes, title} = this.props;
        const {tasks} = this.context;

        return (
            <Paper className={classes.root} elevation={10}>
                <Typography variant="h4">
                    {title}
                </Typography>
                {tasks.map(task => <ToDoTask task={task} />)}
                <div className={classes.popUpContainer}>
                    <PopUpAdd />
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(observer(ToDoList));