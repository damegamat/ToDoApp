import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };
  handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    const type = e.target.type;

    if (type === "checkbox") value = e.target.checked;
    this.setState({
      [name]: value
    });
  };
  handleAdd = () => {
    const { text, checked, date } = this.state;
    if (text.length > 0) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("Wpisz zadanie");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          name="text"
          onChange={this.handleChange}
          type="text"
          placeholder="add task "
          value={this.state.text}
        ></input>
        <input
          name="checked"
          onChange={this.handleChange}
          id="priority"
          type="checkbox"
          checked={this.state.checked}
        ></input>
        <label htmlFor=" priority">Priority</label>
        <div>
          <label htmlFor="date"> Lead time</label>
          <input
            name="date"
            onChange={this.handleChange}
            id="date"
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
          ></input>
        </div>

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddTask;
