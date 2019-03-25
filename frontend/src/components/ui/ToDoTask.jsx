import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class ToDoTask extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        isChecked: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {text, isChecked, onClick} = this.props;
        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={(event) => onClick(event.target.checked)}
                            value={text}
                            color="primary"
                        />
                    }
                    label={text}
                />
            </FormGroup>
        );
    }
}
export default ToDoTask;