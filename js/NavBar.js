import React from 'react'

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <li value={page}>
          <a href="#">
            {page}
          </a>
        </li>
      )
    });

    return <header><div className="wrapper"><nav className="main__navigation"><ul>{navLinks}</ul></nav></div></header>;
  }
}