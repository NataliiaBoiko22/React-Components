import "./notFound.css";
import { useNavigate } from "react-router-dom";
import React from "react";
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

// import Header from "../Header/Header";
// import { isRouteErrorResponse, useRouteError } from "react-router-dom";
// import React from "react";

// export const NotFound = () => {
//   const error = useRouteError();
//   return (
//     <div id="error-page">
//       <Header />
//       <h1>404</h1>
//       <p data-testid="error-text">Sorry, this page doesn&apos;t exist.</p>
//       <p>
//         <i> {isRouteErrorResponse(error) && error.statusText}</i>
//       </p>
//     </div>
//   );
// };
