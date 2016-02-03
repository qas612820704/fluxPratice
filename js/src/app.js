import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'babel!./components/TodoApp.react';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
