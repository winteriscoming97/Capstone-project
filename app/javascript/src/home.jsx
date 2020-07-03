import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <h1 className="text-white">Hello World</h1>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,

    document.body.appendChild(document.createElement('div')),
  )
})
