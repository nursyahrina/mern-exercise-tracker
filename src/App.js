import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, useParams,
} from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function Wrapper(props) {
  const params = useParams();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <EditExercise {...{ ...props, match: { params } }} />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ExerciseList />} />
        <Route path="/edit/:id" element={<Wrapper />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
