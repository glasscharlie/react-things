import React, { Component } from 'react';


export default props => (
    <>
    <h1>list of things </h1>
    <ul>
        {props.things.map(thing => <ThingItem thing={thing} onDelete={props.onDelete} />)}
    </ul>
    <ThingForm onCreated={props.onCreated}/>
    </>
)

function ThingItem(props) {
    return (
    <>
    <li>
        <p>{props.thing.name}</p>
        <button onCLick={() => props.onDelete(props.thing)}>delete</button>
    </li>
    </>
    )
}

createThing(event) {
    event.preventDefault();
    this.props.onCreated({name: this.state.formThing})
}


changeHandler(event) {
    this.setState {
        formThing: event.target.value
    }
}



class ThingForm extends Component {
    constructor(props) {
        super(props)
        this.createThing = this.createThing.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            formThing : '',
        }
    }
}
render() {
    return (
        <form onSubmit={this.createThing}>
             <fieldset>
                <legend>Enter Thing</legend>
                <input value={this.stateonChance} onClick={this.changeHandler} type="text" />
                <Button>OK</Button>
            </fieldset>
        </form>
            )
    }