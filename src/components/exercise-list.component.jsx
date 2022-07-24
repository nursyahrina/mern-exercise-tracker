/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

function Exercise(props) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {props.exercise.username}
      </th>
      <td className="py-4 px-6">
        {props.exercise.description}
      </td>
      <td className="py-4 px-6">
        {props.exercise.duration}
      </td>
      <td className="py-4 px-6">
        {props.exercise.date.substring(0, 10)}
      </td>
      <td className="py-4 px-6 flex gap-x-3">
        <Link
          to={`/edit/${props.exercise._id}`}
          className="py-1 px-3 rounded-lg bg-blue-800 text-[#fffff9] hover:bg-blue-700"
        >
          edit

        </Link>
        <button
          className="py-1 px-3 rounded-lg bg-slate-800 text-[#fffff9] hover:bg-slate-600"
          type="button"
          onClick={() => props.deleteExercise(props.exercise._id)}
        >
          delete

        </button>
      </td>
    </tr>
  );
}

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  exerciseList = () => (
    this.state.exercises.map((currentExercise) => (
      <Exercise
        exercise={currentExercise}
        deleteExercise={this.deleteExercise}
        key={currentExercise._id}
      />
    ))
  );

  deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/exercises/${id}`)
      .then((response) => console.log(response.data));

    this.setState((prevState) => ({
      exercises: prevState.exercises.filter((exercise) => exercise._id !== id),
    }));
  };

  render() {
    return (
      <div className="container mx-auto px-4 max-w-[750px] mt-14">
        <h3 className="mb-12 text-3xl text-center text-blue-900">Logged Exercises</h3>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Username
                </th>
                <th scope="col" className="py-3 px-6">
                  Description
                </th>
                <th scope="col" className="py-3 px-6">
                  Duration (Minutes)
                </th>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              { this.exerciseList() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ExerciseList;
