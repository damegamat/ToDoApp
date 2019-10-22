import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: []
  };
  counter = this.state.tasks.length;
  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };
  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };
  addTask = (text, date, priority) => {
    const task = {
      id: this.counter,
      text,
      date,
      important: priority,
      active: true,
      finishDate: null
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <h2>Add Your Task</h2>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          status={this.changeTaskStatus}
          delete={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
