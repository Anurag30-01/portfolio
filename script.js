const skills =
  "My technical skills include proficiency in programming languages such as C/C++, C#, JS, Python, and experience in web and game development.<br><br> I have also undertaken coursework in Data Structures, Database Management Systems (DBMS), and Design and Analysis of Algorithms.";
const info =
  "I am a beginner developer currently pursuing a B.Tech in Computer Science at Netaji Subhas University of Technology (NSUT).I have a strong passion for exploring and learning about technology and the sciences. My interests drive me to constantly seek new knowledge and skills in various technological fields. Through my academic journey and personal projects, I aim to deepen my understanding and contribute effectively to the world of technology.";
const projects =
  "I have worked on several projects including a personal portfolio webpage. <br><br> A rolling dice using Arduino. <br><br> A simple car game using Unity 3D. <br><br> A webpage built using ReactJS.<br><br>";
function change(newtext) {
  if (newtext === "skills") {
    document.getElementById("text").innerHTML = skills;
    setActiveClass("skills");
  } else if (newtext === "info") {
    document.getElementById("text").innerHTML = info;
    setActiveClass("info");
  } else {
    document.getElementById("text").innerHTML = projects;
    setActiveClass("projects");
  }
}
function setActiveClass(activeClass) {
  const sections = ["skills", "info", "projects"];
  sections.forEach((section) => {
    const elements = document.getElementsByClassName(section);
    for (let i = 0; i < elements.length; i++) {
      if (section === activeClass) {
        elements[i].classList.add("active");
      } else {
        elements[i].classList.remove("active");
      }
    }
  });
}
// --------------------------------------------
{/* <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script> */}
// var typed = new Typed('#element', {strings: ['College Student', '&amp; Web Developer.'],typeSpeed: 55,});

