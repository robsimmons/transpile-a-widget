/** @jsx h **/

const { preact } = libraries;
const { h, render, Component } = preact;

class MyForm extends Component {
    constructor() {
        super();
        this.state.input = "";
        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.setState({ input: e.target.value });
    }

    render(props, state) {
        return (
            <center>
                <input onInput={this.onInput} />
                <p>
                    I'm a widget{state.input !== "" ? ` containing the text "${<tt>state.input</tt>}"` : ""}
                </p>
            </center>
        );
    }
}

preact.render(h(MyForm), container);
