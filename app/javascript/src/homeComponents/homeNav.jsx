import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render () {
    return (
      <React.Fragment>
        <nav className="navbar navbar-default navbar-fixed-top shadow-sm mb-3">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false">language: <strong>English</strong><span className="caret"></span></a>
                <ul className="dropdown-menu row" role="menu">
                  <li className="col-xs-12"><a href="#">Español</a></li>
                  <li className="col-xs-12"><a href="#">डोगरी</a></li>
                  <li className="col-xs-12"><a href="#">français</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar