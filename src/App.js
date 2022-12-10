import "./App.css"
import Card from "./components/Card";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Information from "./Information";

function App() {
  const linkList = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamedghoul/",
      icon: process.env.PUBLIC_URL + "/assets/icons/linkedin.png"
    },
    {
      name: "GitHub",
      url: "https://github.com/mohamedghoul",
      icon: process.env.PUBLIC_URL + "/assets/icons/github.png"
    },
    {
      name: "Send me an email",
      url: "mailto:ghoul_mohamed@outlook.com",
      icon: process.env.PUBLIC_URL + "/assets/icons/mail.png"
    },
    {
      name: "Download my resume",
      url: "https://drive.google.com/file/d/1otzIaYlcW5KjdkuTqFst3WYJYEHt0PrH/view?usp=sharing",
      icon: process.env.PUBLIC_URL + "/assets/icons/resume.png"
    },
  ]

  return (
    <div className="App">
      <Card>
        <Information img="https://avatars.githubusercontent.com/u/84982938?v=4" name="Mohamed Ghoul" description="Senior Computer Science Student | Software Engineer" />
        <Section links={linkList} />
      </Card>
      <Footer />
    </div>
  );
}

export default App;