import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav(props) {
 const [searchText, setsearchText] = useState('')

  function handleSearchText(e){
    setsearchText(e.target.value.trim())
  }

  
  function handleClickOnSearch(e) {
    e.preventDefault();
    console.log(searchText)
    props.setquery(searchText);
  }  

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Newsapp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                category
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/business">
                  business 
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                  entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/general">
                  general
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/health">
                  health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                  science
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sports">
                  sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technology">
                  technology
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    top 10 news
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex mx-5" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{minWidth: "25vw"}}
              onChange={handleSearchText}
            />
            <button className="btn btn-outline-primary" type="submit" onClick={handleClickOnSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
