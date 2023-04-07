import { useNavigate } from "react-router-dom";
import "./aboutUs.css";
function AboutUsPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <div className="wrapper-about">
      <h1>Hello !</h1>

      <h2>Explore the Animal Kingdom</h2>
      <div className="main">
        <div className="description">
          <p className="description-p">
            This website is developed as part an assignment in the courses of
            the RSShcool. Here you can find the images according to the entered
            query in the search field. The <strong>Pixabay </strong>service was
            used as a source of information.
          </p>
          <a href="#" className="btn" onClick={handleClick}>
            Get Started
          </a>
        </div>
        <img
          className="img"
          alt="Welcome image"
          src="https://source.unsplash.com/800x600/?tiger"
        ></img>
      </div>
    </div>
  );
}

export default AboutUsPage;
