import React from 'react';
let {PropTypes} = React;

let ENTER_KEY_CODE = 13;

export default class TodoTextInput extends React.Component {

  constructor(props) {
    super(props);

    this._save = this._save.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }

  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  _onKeyDown(event) {
    if( event.keyCode === ENTER_KEY_CODE)
      this._save();
  }

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    value: PropTypes.string
  };
  state = {
    value: this.props.value || ''
  };
}
