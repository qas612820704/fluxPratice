import React from 'react';
let ReactPropTypes = React.PropTypes;

import TodoActions from '../actions/TodoActions';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    
    this._onClearCompletedClick = this._onClearCompletedClick.bind(this);
  }

  render() {
    let allTodos = this.props.allTodos;
    let total = Object.keys(allTodos).length;

    if (total == 0) {
      return null;
    }

    let completed = 0;
    for (var key in allTodos) {
      completed++;
    }

    let itemLeft = total - completed;
    let itemLeftPhrase = itemLeft === 1 
      ? ' item '
      : ' items ';
    itemLeftPhrase += 'left';

    let clearCompletedButton;
    if (completed) {
      clearCompletedButton = 
        <button
          id="clear-complted"
          onClick={this._onClearCompletedClick}>
          Clear completed ({completed})
        </button>;
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemLeft}
          </strong>
          {itemLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  }

  _onClearCompletedClick() {
    TodoActions.destroyCompleted();
  }

  static propTypes = {
    allTodos: ReactPropTypes.object.isRequired
  };
}
