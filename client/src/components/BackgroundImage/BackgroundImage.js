import React, { Component } from 'react';
import './BackgroundImage.css';

class BackgroundImage extends Component {
    state = {
      x: null,
      y: null,
    }
    componentWillMount() {
      const w = window;
      const d = document;
      const e = d.documentElement;
      const g = d.getElementsByTagName('body')[0];
      const x = w.innerWidth || e.clientWidth || g.clientWidth;
      const y = w.innerHeight || e.clientHeight || g.clientHeight;
      this.setState({ x, y });
    }

    render() {
      return (
        <div>
          <img className="bg" src="../../../public/apt.jpg" alt="apartment building" />
        </div>
      );
    }
}

export default BackgroundImage;
