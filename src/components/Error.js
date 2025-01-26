import { useRouteError } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError(); // 9
  const location = useLocation(); // 10
  const currentPath = location.pathname;
  console.log(currentPath);
  return (
    <div>
      {/* <img className="errImage" src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png" /> */}
      <div className="err-container container">
        <div className="tot-err ">
          <div className="errorImage"></div>
          <div>
            <h2>Oops!</h2>
          </div>
          <div>
            <p>
              {err.status} : {err.statusText}
            </p>
          </div>
          <div>
            {/* <button><Link to={currentPath}>Retry</Link></button> */}
            <button className="retry-btn"><a href={currentPath}>Retry</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
