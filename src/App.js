import React, {useState} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Hello from'./hello.js';
import Course from'./Components/Course.js';
import CourseInfo from './Components/CourseInfo';
import Skills from './Components/Skills';
import ToggleButton from './Components/ToggleButton';
import Pictures from './Components/picture';

const coursePart = ["React alkeet, osa 1", "Tehtävä 1", "Tehtävä 2"];
const courseDate = "12.8.2019";
const courseContents = ["create_react_app", "gitbash", "JSX", "DOM", "Array"];
const courseInfo = ["Venla Paanila", "venla.paanila@edu.tampere.fi", "linkki"];
const course1 = {id:0, course: "Javascript", teacher: "Tiina Partanen",  class:"B2074"};
const course2 ={id:1, course:"Java",teacher: "Eerikki Maula",class: "B2069"};
const courses = [course1, course2];
const initialSkills = ["create_react_app", "gitbash", "JSX", "DOM", "Array"];

const pic = {url:'https://www.nainen.com/wp-content/uploads/2016/04/Koirakollottelee-750x527.jpg', title:'koira1', desc:'fsdhlisfhlksdhf'};
const pic1 = {url:'https://sporttirakki.fi/wp-content/uploads/2017/09/kuka_osaa_kouluttaa_koiria.jpg', title:'koira2', desc:'sdfjlfhsdlökfh'};
const pic2 = {url:'https://www.helsinki.fi/sites/default/files/thumbnails/image/koiratutkimusrahasto_nosto.jpg', title:'koira3', desc:'lösdhifldsfkh'};
const pictures=[pic, pic1, pic2];

function App() {
  const [skills, setSkill] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState('');
  const [show, setShow]=useState(true)

  const HandleClick = ({buttonNumber}) => {
    let tempShow = [...show];
    tempShow[buttonNumber] = tempShow[buttonNumber] ? false : this;
    setShow(tempShow);
    
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
      <section>
        <Course partName={coursePart} partDate={courseDate} partContents={courseContents} partInfo={courseInfo} course={course1} HandleClick={HandleClick}/>
        <CourseInfo courses={courses} HandleClick={HandleClick}/>
        <Pictures pictures={pictures}/>
        <Skills handleForm={handleForm} skills={skills} setSkill={setSkill} newSkill={newSkill} setNewSkill={setNewSkill} HandleClick={HandleClick}/>
      </section>
      <footer>

      </footer>

    
    </div>
  )

}

export default App;
