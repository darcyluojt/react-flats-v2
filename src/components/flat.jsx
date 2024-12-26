import React, {Component} from 'react';

class Flat extends Component {
  handleClick = (event) => {
    const id = event.target.id;
    console.log(id);
    this.props.selectedFlat(id)
  }

  render() {
    return (
    <div
    id={this.props.id}
    className="card"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.image})`
    }}
    onClick={this.handleClick}
>
      <div className="card-category">{this.props.price}</div>
      <div className="card-description">
        <h2>{this.props.name}</h2>
      </div>
      {/* <a classNamee="card-link" href={this.props.link}></a> */}
    </div>

    )
  }

}

export default Flat;
