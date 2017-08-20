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

    return <header><div className="wrapper"><figure className="logo"><img src="http://www.pngall.com/wp-content/uploads/2016/03/Star-Wars-Logo-PNG.png" /></figure><nav className="main__navigation"><ul>{navLinks}</ul></nav></div></header>;
  }
}


