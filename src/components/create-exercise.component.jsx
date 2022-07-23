/* eslint-disable react/no-string-refs */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user',
    });
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onChangeDuration = (event) => {
    this.setState({
      duration: event.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { exercise } = this.state;

    // eslint-disable-next-line no-console
    console.log(exercise);

    window.location = '/';
  };

  render() {
    const {
      username, description, duration, date, users,
    } = this.state;
    return (
      <div className="container mx-auto px-4 max-w-[640px] mt-14">
        <h3 className="mb-12 text-3xl text-center text-blue-900">Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit} className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-1 text-lg"
            >
              Username

            </label>
            <select
              id="username"
              ref="userInput"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              required
              value={username}
              onChange={this.onChangeUsername}
            >
              {
                  users.map((user) => (
                    <option
                      key={user}
                      value={user}
                    >
                      {user}
                    </option>
                  ))
                }
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-1 text-lg"
            >
              Description

            </label>
            <input
              type="text"
              required
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              value={description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="mb-4 flex sm:flex-row flex-col justify-between">
            <div className="sm:w-[48%] w-full">
              <label
                htmlFor="duration"
                className="block mb-1 text-lg"
              >
                Duration

              </label>
              <input
                type="number"
                id="duration"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                value={duration}
                onChange={this.onChangeDuration}
              />
            </div>
            <div className="sm:w-[48%] w-full">
              <label
                htmlFor="date"
                className="block mb-1 text-lg"
              >
                Date

              </label>
              <DatePicker
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                selected={date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <button type="submit" className="my-5 text-[#fffff9] bg-gradient-to-r from-blue-900 via-gray-900 to-slate-900 hover:bg-gradient-to-r hover:from-slate-900 hover:via-gray-900 hover:to-blue-900 focus:ring-4 hover:drop-shadow-md focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-6 py-2.5">Create New Exercise</button>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
