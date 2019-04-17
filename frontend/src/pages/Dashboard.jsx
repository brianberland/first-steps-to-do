import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { observer } from 'mobx-react';

import ToDoList from 'components/ui/ToDoList';
import { ListContext } from '../TaskStore';

const styles = theme => ({
    root: {
        height: '100%',
        display: 'flex',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
    },
});

class Dashboard extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    static contextType = ListContext;

    render() {
        const {classes} = this.props;
        const {lists} = this.context;

        return (
            <div className={classes.root}>
               {lists.map((list, idx) => <ToDoList list={list} key={idx} />)}
               <Fab className={classes.fab} onClick={() => this.context.addList()}>
                   <AddIcon />
               </Fab>
            </div>
        );
    }
}

export default withStyles(styles)(observer(Dashboard));