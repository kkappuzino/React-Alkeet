import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from'./hello.js';
import Course from'./Components/Course.js';
import CourseInfo from './Components/CourseInfo';
import Skills from './Components/Skills';
import ToggleButton from './Components/ToggleButton';


const coursePart = ["React alkeet, osa 1", "Tehtävä 1", "Tehtävä 2"];
const courseDate = "12.8.2019";
const courseContents = ["create_react_app", "gitbash", "JSX", "DOM", "Array"];
const courseInfo = ["Venla Paanila", "venla.paanila@edu.tampere.fi", "linkki"];
const course1 = {id:0, course: "Javascript", teacher: "Tiina Partanen",  class:"B2074"};
const course2 ={id:1, course:"Java",teacher: "Eerikki Maula",class: "B2069"};
const courses = [course1, course2];
const initialSkills = ["create_react_app", "gitbash", "JSX", "DOM", "Array"];

function App() {
  const [skills, setSkill] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState('');
  const [show, setShow]=useState(true)

  const HandleClick = buttonNumber=> {
    let tempShow = [...show];
    tempShow[buttonNumber] = tempShow[buttonNumber] ? false : this;
    setshow(tempShow);
    
  }
  function handleForm(e, text){
    e.preventDefault()
    console.log(skills, text, "handleformissa");
    setSkill(skills.concat(text))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        
        <img src={logo} className="App-logo" alt="logo" />


      </header>
      <body>
        {show &&<Course partName={coursePart} partDate={courseDate} partContents={courseContents} partInfo={courseInfo} course={course1}/>}
        {show &&<CourseInfo courses={courses}/>}
        {show &&<Skills handleForm={handleForm} skills={skills} setSkill={setSkill} newSkill={newSkill} setNewSkill={setNewSkill}/>}
        <ToggleButton HandleClick={HandleClick} buttonNumber={buttonNumber}/>
      </body>
      <footer>

      </footer>

    
    </div>
  )

}

export default App;
