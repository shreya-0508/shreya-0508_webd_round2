import React from "react";
import News from "./News";
function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <img src="./logo.png" width="100" height="70" />
        <a class="navbar-brand">Empire Emperors</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#gif">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#news">
                News
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#schedule">
                Fixtures
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Leagues & Cups
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#league">
                  UEFA Europa League
                </a>
                <a class="dropdown-item" href="#league">
                  FIFA World Cup
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#summary">
                Match Summary
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">
                Teams
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#player">
                Player
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
