import React from 'react';
import ReactDom from 'react-dom';
import Bullets from './core/bullet-list';

// testing ...
window.Bullets = Bullets;
// testing ...

const Main = React.createClass({
  render() {
    return (
      <h1>Hello Bullet journal!</h1>
    );
  },
});

ReactDom.render(<Main></Main>, document.getElementById('app'));
