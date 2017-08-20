import React from 'react'

export class introductionText extends React.Component {
  render() {
    return (
      <section className="introduction">
        <div className="wrapper small">
          <h1>SWAPI App</h1>
          <p>
            Faka G
          </p>
        </div>
      </section>
    );
  }
}

introductionText.defaultProps = { text: 'Yo faka' };
