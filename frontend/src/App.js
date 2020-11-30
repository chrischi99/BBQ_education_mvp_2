import React, {Component} from 'react';
import './App.css';
import './login_screen.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {AiOutlineMail } from 'react-icons/ai';
import {VscKey } from 'react-icons/vsc';
import {FaRegHandPaper } from 'react-icons/fa';
import {GiDango } from 'react-icons/gi';
import {RiAccountCircleFill } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {BsPerson } from 'react-icons/bs';
import {CgGirl } from 'react-icons/cg';
import {BiRadioCircleMarked } from 'react-icons/bi';
import {AiOutlinePlus } from 'react-icons/ai';
import {BsFillTriangleFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

class Login_page extends Component {
  
  render(){
    return (
    <div className="Login">
      <div className = "top_menu">
        <span className = "bbq_logo"><GiDango size="40px"/></span>
        <Link className = "nav-link" to="/"><span className = "login_menu">Login</span></Link>
        <Link className = "nav-link" to="/registerPage"><span className = "register_menu" >Register</span></Link>


        <span className = "welcome_menu">Welcome to BBQ Education !</span>
        <span className = "user_log"><RiAccountCircleFill size="70px"/></span>
      </div>

      <div className = "triangle_icon"><BsFillTriangleFill size = "24px" /></div>
      <div className = "border"></div>

      <div className="Login_middle_box">
        <p className = "logo">BBQ</p>
      <form className = "query_form_2">
        <span className = "email_icon"><AiOutlineMail size = "20px"/></span>
      
        <span className = "email_instru">Email :</span>
        <input className = "user_email" type="text"/>
        <span className = "passwored_icon"><VscKey size = "20px"/></span>
        <span className = "password_instru">Password :</span>   
        <input className = "user_password" type="text"/>
        <span className = "login_logo"><FaRegHandPaper size = "40px"/></span>
        <Link className = "nav-link" to="/personalPage"><span className = "submit_button">Login !</span></Link>
      </form>
      </div>
    </div>
  )
}
}


class Register_page extends Component {
    
  render(){
    return (
    <div className="Login">
      <div className = "top_menu">
        <span className = "bbq_logo"><GiDango size="40px"/></span>
        <Link className = "nav-link" to="/"><span className = "login_menu">Login</span></Link>
        <Link className = "nav-link" to="/registerPage"><span className = "register_menu" >Register</span></Link>


        <span className = "welcome_menu">Welcome to BBQ Education !</span>
        <span className = "user_log"><RiAccountCircleFill size="70px"/></span>
      </div>

      <div className = "triangle_icon_2"><BsFillTriangleFill size = "24px" /></div>
      <div className = "border"></div>

      <div className="Login_middle_box_2">
        <p className = "logo">BBQ</p>

      


      <form className = "query_form_2">
      <span className = "user_select_icon"><BsPerson size="20px"/></span>
      <div className = "user_type">User Type</div>
      <div className = "student_selection"><input checked="checked" type="radio" name = "user_type" value="S" /> Student </div>
      <div className = "instructor_selection"><input name="answer" type="radio" name = "user_type" value="I" /> Instructor </div>
        
        <span className = "email_icon_2"><CgGirl size = "20px"/></span>
        <span className = "email_instru_2">User Name :</span>
        <input className = "user_email_2" type="text"/>


        <span className = "passwored_icon_2"><AiOutlineMail size = "20px"/></span>
        <span className = "password_instru_2">Email :</span>   
        <input className = "user_password_2" type="text"/>

        <span className = "passwored_icon_3"><VscKey size = "20px"/></span>
        <span className = "password_instru_3">Password :</span>   
        <input className = "user_password_3" type="text"/>

        <span className = "passwored_icon_4"><VscKey size = "20px"/></span>
        <span className = "password_instru_4">Confirm Password :</span>   
        <input className = "user_password_4" type="text"/>





        <span className = "login_logo_2"><FaRegHandPaper size = "40px"/></span>
        <Link className = "nav-link_2" to="/"><span className = "submit_button_2">Register !</span></Link>
      </form>
      </div>
      
      
    </div>
      );
  }
}

class Personal_page extends Component {

  render(){
    const courses = [["Core","CS 61B: Data Structure","Paul N Hilfinger","90%"],["Core","CS 61A: The Structure and Interpretation...","Dan Garcia","100%"],
    ["Advanced","CS 189: Machine Learning","Paul N Hilfinger","20%"],["Core","CS 61C: Computer Architecture","Nick Weaver","90%"],[
      "Advanced","CS W186: Database Design","Josh Hug","40%"]];
    return (
    <div>
      <div className = "top_menu">
        <span className = "bbq_logo"><GiDango size="40px"/></span>
        <Link className = "nav-link" to="/personalPage"><span className = "login_menu">Course</span></Link>
        <Link className = "nav-link" to="/registerPage"><span className = "register_menu" >Analysis</span></Link>


        <span className = "username">Ruiwei</span>
        <span className = "user_email_info">ruiweixiao98@gmail.com</span>

        <span className = "user_log"><RiAccountCircleFill size="70px"/></span>
      </div>
      <div className = "border"></div>
      <div className = "triangle_icon"><BsFillTriangleFill size = "24px" /></div>
      

      <div className = "current_courses">Current Courses</div>
      <div className = "course_box">
            {courses.map(each_course => (
                <span className = "individual_course">    
                  <div className = {each_course[0] == "Core" ? 'course_icon' : "course_icon_2"}><BiRadioCircleMarked size = "32px"/></div>
                  <div className ={each_course[0] == "Core" ? 'level' : "level_2"}>{each_course[0]} </div>
                  <div className = "name">{each_course[1]}</div>
                  <div className = "professor">Professor: {each_course[2]}</div>
                  <div className = "course_progress">{each_course[3]}</div>
                </span>
            ))}
            <span className = "individual_course_2">  
            <Link className = "nav-link_2" to="/search_page"><div className = "add_icon"><AiOutlinePlus size = "32px"/></div></Link>
            <Link className = "nav-link_2" to="/search_page"><div className = "add_course">Add another Course</div></Link>
            </span>
      </div>

      
    </div>
      
  );
}
}


class Search_page extends Component {

  render(){
    const courses = [["Core","CS 61B: Data Structure","Paul N Hilfinger","90%"],["Core","CS 61A: The Structure and Interpretation...","Dan Garcia","100%"],
    ["Advanced","CS 189: Machine Learning","Paul N Hilfinger","20%"],["Core","CS 61C: Computer Architecture","Nick Weaver","90%"],[
      "Advanced","CS W186: Database Design","Josh Hug","40%"]];
    return (
    <div>
      <div className = "top_menu">
        <span className = "bbq_logo"><GiDango size="40px"/></span>
        <Link className = "nav-link" to="/personalPage"><span className = "login_menu">Course</span></Link>
        <Link className = "nav-link" to="/registerPage"><span className = "register_menu" >Analysis</span></Link>


        <span className = "username">Ruiwei</span>
        <span className = "user_email_info">ruiweixiao98@gmail.com</span>

        <span className = "user_log"><RiAccountCircleFill size="70px"/></span>
      </div>
      <div className = "border"></div>
      <div className = "triangle_icon"><BsFillTriangleFill size = "24px" /></div>
      

      <div className = "current_courses">Current Courses</div>
      
      <div className = "search_box">
        <div className = "search_course_id">Course ID</div>
        <input className = "course_form" type="text"/>
        <div className = "search_icon"><AiOutlineSearch size = "50px"/></div>
      </div>


    </div>
      
  );
}
}




function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Login_page} />
          <Route path="/registerPage" exact component={Register_page} />
          <Route path="/personalPage" exact component={Personal_page} />
          <Route path="/search_page" exact component = {Search_page} />
      </Router>
    </div>
  );
}


export default App;