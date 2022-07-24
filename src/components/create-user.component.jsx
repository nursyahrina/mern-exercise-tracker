import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then((response) => console.log(response.data));

    this.setState({
      username: '',
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div className="container mx-auto px-4 max-w-[640px] mt-14">
        <h3 className="mb-12 text-3xl text-center text-blue-900">Create New User</h3>
        <form onSubmit={this.onSubmit} className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-1 text-lg"
            >
              Username

            </label>
            <input
              type="text"
              required
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <button type="submit" className="my-5 text-[#fffff9] bg-gradient-to-r from-blue-900 via-gray-900 to-slate-900 hover:bg-gradient-to-r hover:from-slate-900 hover:via-gray-900 hover:to-blue-900 focus:ring-4 hover:drop-shadow-md focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-6 py-2.5">Create New Exercise</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
