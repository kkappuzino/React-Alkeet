import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from'./hello.js';
import Course from'./Components/Course.js';

const coursePart = ["React alkeet, osa 1", "Tehtävä 1", "Tehtävä 2"];
const courseDate = "12.8.2019";
const courseContents = ["create_react_app", "gitbash", "JSX", "DOM", "Array"];
const courseInfo = ["Venla Paanila", "venla.paanila@edu.tampere.fi", "linkki"];
const course1 = {course: "Javascript", teacher: "Tiina Partanen",  class:"B2074"};
const course2 ={course:"Java",teacher: "Eerikki Maula",class: "B2069"};
const courses = [course1, course2];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        
        <img src={logo} className="App-logo" alt="logo" />

        <Course partName={coursePart} partDate={courseDate} partContents={courseContents} partInfo={courseInfo} course={course1}/>
      </header>


     
    </div>
  );
}

export default App;
