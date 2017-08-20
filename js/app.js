import ReactDOM from 'react-dom'
import React from 'react'
import { NavBar } from './NavBar.js';


class HeaderNav extends React.Component {
  render() {
    return (
      <section className="introduction clearfix">
        <div className="wrapper">
          <h1>SWAPI APP</h1>
          <p>Stretch out with your feelings. You see, you can do it. I call it luck. In my experience, there's no such thing as luck. Look, going good against remotes is one thing. Going good against the living? That's something else. Looks like we're coming up on Alderaan. You know, I did feel something. I could almost see the remote. That's good. You have taken your first step into a larger world.</p>
        </div>
      </section>
    );
  }
};

class FilterList extends React.Component {
  render() {
    return (
      <div className="list__filter">
        <span>
          View:
        </span>
        <a className="thumbnail" href="#">Thumbnail</a>
        <a className="grid" href="#">Grid</a>
      </div>
    );
  }
};

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer clearfix">
        <span>Copyright Jim Servaas - BRTHMRK </span>
      </footer>
    );
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    const URL = 'http://swapi.co/api/people/5';
    fetch(URL)
      .then((data) => data.json())
      .then((json) => {
        this.setState(json);
    });
      
  }
  render() {
    return (
      <div id="content">
        <NavBar />
        
        <HeaderNav />

        <section className="list clearfix">

          <div className="wrapper">

            <FilterList />

            <div className="item thumbnail in-view" id="item__modal">
              <h2 className="teaser__title">Name: {this.state.name}</h2>
            </div>

            <div id="myModal" className="modal">
              <ul className="modal-content">
                <span className="close">&times;</span>
                <li><h2 className="teaser__title">Name: {this.state.name}</h2></li> 
                <li>Birth year: {this.state.birth_year}</li>  
                <li>Eye color: {this.state.eye_color}</li>  
                <li>Gender: {this.state.gender}</li>  
                <li>Hair color: {this.state.hair_color}</li>  
                <li>Height: {this.state.height}</li>  
                <li>Skin color: {this.state.skin_color}</li>       
              </ul>
            </div>
          </div>
        </section>

        <Footer />
     </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));