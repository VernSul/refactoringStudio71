import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        formValue: null
    }
    this.formField = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  componentDidMount(){
      this.formField.current.focus();
  }

  onChange(event){
      let formValue = event.target.value;
      this.setState({ formValue });
  }

  onSubmit(event){
    event.preventDefault();
    if(this.state.formValue){
      var newItemValue = this.state.formValue;
      this.props.addItem({ newItemValue });
      this.formField.current.reset();
      this.setState( {formValue: null} )
    }
  }
  render() {
    return (
      <form id="todoForm" onSubmit={this.onSubmit} className="form-inline" ref={this.formField}>
        <input
          type="text"
          id="itemName"
          className="form-control"
          onChange = {this.onChange}
          placeholder="add a new todo..."
          />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;