import "./notFound.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/main");
  };
  return (
    <div className="notfound-wrapper">
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      <p className="notfound">404 Page Not Found</p>
    </div>
  );
}

export default NotFoundPage;
