import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { observer } from 'mobx-react';
import TaskLabel from './TaskLabel';

class ToDoTask extends React.Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
    };

    render() {
        const {task} = this.props;
        const {text, isChecked} = task;
        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={event => task.isChecked = event.target.checked}
                            value={text}
                            color="secondary"
                        />
                    }
                    label={<TaskLabel task={task} />}
                />
            </FormGroup>
        );
    }
}

export default observer(ToDoTask);