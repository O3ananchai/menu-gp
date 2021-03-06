import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
class HeaderNav extends PureComponent {
  render() {
    return <div>
        <nav className="main-nav-outer" id="test">
          <div className="container">
            <ul className="main-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#service">Menu1</a>
              </li>
              <li>
                <a href="#Portfolio">Menu2</a>
              </li>
              <li>
                <a href="#client">Menu3</a>
              </li>
              <li>
                <a href="#team">Menu4</a>
              </li>
              <li>
                <a href="#contact">Menu5</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  }
}
export default HeaderNav
