import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class InputItem extends Component{
    state = {
        value: null
    };

    buttonHandler = () => {
        this.props.addTask(this.state.value);
        this.setState({ value: null });
    };

    render() {
        return (<div>
            <TextField
                id="standard-dense"
                label="Добавить задание"
                margin="dense"
                value={this.state.value || ''}
                onChange={event => this.setState({value: event.target.value})}
            />
            <Button
                onClick={this.buttonHandler}
                disabled={this.state.value === null || this.state.value === ''}
            >
                Добавить
            </Button>
        </div>);
    }
}

export default InputItem;
