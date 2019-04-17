import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import ToDoTask from './ToDoTask';
import { ListContext } from 'TaskStore';
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
        list: PropTypes.object.isRequired,
    };

    static contextType = ListContext;

    render() {
        const {classes, list: {title, tasks, addTask}} = this.props;

        return (
            <Paper className={classes.root} elevation={10}>
                <Typography variant="h4">
                    {title}
                </Typography>
                {tasks.map((task, idx) => <ToDoTask task={task} key={idx} />)}
                <div className={classes.popUpContainer}>
                    <PopUpAdd addTask={addTask} />
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(observer(ToDoList));