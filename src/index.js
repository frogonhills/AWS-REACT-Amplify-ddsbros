import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Person = ({ img, name, job, children }) => {
 
  const url = `/images/${img}.jpg`;
  return (
    
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
    
  );
};
const info =()=>{
  return(
  <ul>
   <li><a href="default.asp">Home</a></li>
   <li><a href="news.asp">News</a></li>
   <li><a href="contact.asp">Contact</a></li>
   <li><a href="about.asp">About</a></li>
  </ul>
  )
}
const PersonList = () => {
  return (
    <div>
      <body>

           <ul>
             <li><a className="active" href="#home">Deep Data Science Team.</a></li>
             <li><a href="#news">News</a></li>
             <li><a href="#contact">Contact</a></li>
             
           </ul>
 
      </body>
    <section className="person-list">
      <Person img="shifat" name="Shifat Ahmed" job="React Developer" />
      <Person img="saddam" name="Saddam Sir" job="Boss" />
      <Person img="ameer" name="Ameer" job="Data  Analyst"> 
          <p>Marriage material</p>
      </Person>
      <Person img="navid" name="Shaykh Navid" job="Data  Analyst" />
      <Person img="tajim" name="Tajim" job="FullStack Developer" />
      
    </section>
    </div>
  );
};







ReactDOM.render(<PersonList />, document.getElementById("root"));
