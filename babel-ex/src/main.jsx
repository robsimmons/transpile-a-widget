/** @jsx h **/

const {preact} = libraries;
const {h, render, Component} = preact;

class MyForm extends Component {
  constructor() {
    super();
  }
    
  render(props, state) {
    return <center>
      <p>I'm a widget</p>
      <input></input>
    </center>
  }
}dsaf

preact.render(h(MyForm), container);