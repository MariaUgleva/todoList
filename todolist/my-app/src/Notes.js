import React, { Component } from "react";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correct: true
        };
    }
    onCorrect = () => {
        this.setState({
            correct: !(this.state.correct)
        });
    };
    render() {
        return (
            <div className="Notes-Note">
                <div className="Notes-Note-Correct" onClick={this.onCorrect}></div>
                {(this.state.correct === false) ? <s>{this.props.text}</s> : <div>{this.props.text}</div>}
                <div className='Notes-Note-Checkbox'>
                    <div className="Notes-Note-Delete" onClick={this.props.onDelete}></div>
                </div>
            </div>
        );
    }
}

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.inputRef = React.createRef();
    }
    onTextChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    onReset = () => {
        this.setState(
            {
                text: ""
            },
            () => {
                this.inputRef.current.focus();
            }
        );
    };

    onSave = () => {
        this.props.onCreate(this.state.text);
        this.onReset();
    };

    render() {
        return (
            <div className="Notes-Create">
                <textarea cols="50" rows='5'
                    ref={this.inputRef}
                    className="Notes-Create-Input"
                    value={this.state.text}
                    onChange={this.onTextChange}
                />
                <div className="Notes-Create-Buttons">
                    <button className="Notes-Create-Button"
                        onClick={this.onSave}>Сохранить</button>
                    <button className="Notes-Create-Button Notes-Create-Button-reset"
                        onClick={this.onReset}>Сброс</button>
                </div>
            </div>
        )
    }
}

class Notes extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className="Notes">
                    <CreateNote onCreate={this.props.onCreate} />
                    {this.props.notes.map((text, index) => {
                        return (
                            <Note
                                text={text}
                                key={text}
                                onDelete={() => this.props.onDelete(index)} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Notes;