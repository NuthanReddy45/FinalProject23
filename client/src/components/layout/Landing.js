import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">ELabour WebApp</h1>
          <p className="lead">
            Create a Employer profile and start filling your organizations and
            fill annual returns with various Acts
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
// import  react  from 'react';
// import { Link } from 'react-router-dom';

// import Register from '../auth/Register';

// const Landing = () => {

//   return (

//     <section className="landing">
//       <div className="dark-overlay">
//         <div className="landing-inner">
//           <h1 className="x-large">Developer Connector</h1>
//           <p className="lead">
//             Create developer profile/portfolio, share posts and get help from
//             other developers
//           </p>
//           <div className="buttons">
//             <Link to="/register" className="btn btn-primary">Sign Up</Link>
//             <Link to="/login" className="btn btn">Login</Link>
//           </div>
//         </div>
//       </div>
//     </section>

//   )

// }

// export default Landing;
