import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ToDoList from 'components/ui/ToDoList';

const styles = {
    root: {
        height: '100%',
        display: 'flex',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

class Dashboard extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired,
    };

    render() {
        const {classes, store} = this.props;

        return (
            <div className={classes.root}>
                <ToDoList tasks={store.tasks} />
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);