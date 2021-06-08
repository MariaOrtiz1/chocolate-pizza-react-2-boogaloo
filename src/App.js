import './App.css';
import React, { Component } from 'react';
import { list1, list2 } from './data.js';


// 
class Flower extends Component {
  render() {
    return (
      <section className="logo-place">
        <div className="logo-container-container">
          <img src="logo.png" width="35px" height="35px" alt="something"/>
            <div className="logo-container">
              <h1>Delicious</h1>
              <h3>The Best Food Blog On The Web</h3>
            </div>
        </div>

        <div className="sm-logos">
          <span className="sm-logos-1">
            <img src="fb-icon.png" width="18px" height="18px" alt="something"/>
            <img src="twit-icon.png" width="18px" height="18px" alt="something"/>
            <img src="gp-icon.png" width="18px" height="18px" alt="something"/>
            <img src="insta-icon.png" width="18px" height="18px" alt="something"/>
            <img src="flic-icon.png" width="18px" height="18px" alt="something"/>
            <img src="pint-icon.png" width="18px" height="18px" alt="something"/>
          </span>
          <span className="sm-logos-2">
          <img src="rss-icon.png" width="18px" height="18px" alt="something"/>
          <img src="mail-icon.png" width="18px" height="18px" alt="something"/>
          </span>
        </div>
      </section>
    )
  }
}

class Image extends Component {
  render() {
    return (
      <div>
        <img src="choco-pizza.png" width="100%" alt="something"/>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content">
        <p>
            For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. 
            Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. 
            Add salt with one or two stirs, set aside and let cool completely.
        </p>
        <p>
            Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm.
            Whisk in the egg yolks. Set mixture in the fridge and wait until the fig micture is cooled.
        </p>
        <p>
            Using an ice cream machine, pour liquids into the frozen basin and process according to the manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding masacarpone, fig jam mixture, and the nuts
            Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
        </p>
      </div>
    )
  }
}

class Ingredient extends Component {
  render() {
    return (
      <li>
        {this.props.amount} {this.props.name}
      </li>
    )
  }
}

class List extends Component {
  render() {
    return (
    <div className="list">
        <ul>
          {list1.map( (food, i) => <Ingredient amount={food.amount} name={food.name}/>)}
        </ul>
        <ul>
        {list2.map( (food, i) => <Ingredient amount={food.amount} name={food.name}/>)}
        </ul>
    </div>
    )
  }
}

class Stem extends Component {
  render() {
    return (
      <article>
        <div className="title">
        <h2>Chocolate Pizza</h2>
        <h6>
            <span>Posted on 15 Dec 2013 / Desserts</span>
            <span><img src="print-icon.png" alt="something"/> Print</span>
        </h6>
    </div>
    <Image/>
    <Content/>
    <List/>
    <div className="boared">

    </div>
    <div className="author">
        <img src="van-pic.png" width="65px" height="65px" alt="something"/>
            <section>
                <h5>Vanessa Stevenson</h5>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
        </section>
        <button type="button">Share Recipe</button>
    </div>
      </article>
    )
  }
}

class Roots extends Component {
  render() {
    return (
      <div>
        <section className="footer-logo">
            <span className="footer-line"></span>
            <img src="small-logo.png" width="30px" height="30px" alt="something"/>
            <span className="footer-line"></span>
        </section>
        <p>Delicious © 2013 • All Rights Reserved.</p>
        <p>Proudly published with Ghost.</p>
      </div>
    )
  }
}



// parent function! ovo/
function App() {
  return (
    <div>
      <Flower/>
      <Stem/>
      <Roots/>
    </div>
  );
}

export default App;
