import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutsideClickHandler from 'react-outside-click-handler';

const styles = theme => ({
    labelContainer: {
        padding: '2px 4px',

        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            transitionProperty: 'background-color, color, border-radius',
            transitionTimingFunction: 'linear',
            transitionDuration: '0.4s',
            borderRadius: '6px',
        },
    },
});

class TaskLabel extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        task: PropTypes.object.isRequired,
    };

    state = {
        text: '',
        textField: false,
        error: false,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.enterKeyListener);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.enterKeyListener);
    }

    enterKeyListener = e => {
        if (e.key === 'Enter' && this.state.textField) {
            e.preventDefault();
            this.closeField();
        }
    };

    openField = (e) => {
        e.preventDefault();
        this.setState({textField: true, text: this.props.task.text});
    };

    closeField = () => {
        if (this.state.text) {
            this.props.task.text = this.state.text;
            this.setState({textField: false, error: false});
        } else {
            this.setState({error: true});
        }
    }

    renderLabel = () => (
        <Typography 
            className={this.props.classes.labelContainer}
            onClick={this.openField}
        >
            {this.props.task.text}
        </Typography>
    );

    renderTextField = () => (
        <OutsideClickHandler onOutsideClick={this.closeField}>
            <TextField 
                InputProps={{
                    onChange: e => this.setState({text: e.target.value}),
                    value: this.state.text,
                }}
                error={this.state.error}
                autoFocus
            />
        </OutsideClickHandler>
    );

    render() {
        const {textField} = this.state;

        return textField ? this.renderTextField() : this.renderLabel();
    }
}

export default withStyles(styles)(TaskLabel);