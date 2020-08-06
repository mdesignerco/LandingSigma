import React from 'react';

class Input extends React.Component{
  render() {
    return (
      <>
        <label for={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type} className="form-control"
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
        />
      </>
    );
  }
}

export default Input;