import React, { Component, PureComponent } from 'react';
import './App.css';

class Task extends PureComponent {
  render() {
    const { t } = this.props
    console.log(t)
    return (
      <div>
        <span>X</span>
        {t.value}
      </div>
    )
  }
}

class App extends Component {
  state = {
    tasks: []
  }

  handleSubmit = e => {
    e.preventDefault()
    const value = e.target[0].value
    const id = Math.random().toString(16)
    const task = { value, id }
    this.setState(state => ({
      tasks: [
        ...state.tasks,
        task
      ]
    }))

    // clean input
    e.target[0].value = ''
  }

  render() {
    const { tasks } = this.state
    return (
      <div className="App">
        <h1 className="title">shouldComponentUpdate</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" id="task" placeholder="task input" />
          <button className="btn">Add task</button>
        </form>
        <div className="taskList">
          {tasks.map(t => (<Task
              key={t.id}
              t={t}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
