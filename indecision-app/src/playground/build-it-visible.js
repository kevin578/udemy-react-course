let visibility = false;

class Title extends React.Component {

  constructor() {
      super();
      this.state = {
        showMessage: false
      }
      this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return prevState.showMessage? { showMessage:false } : { showMessage:true }
    });
  }

  render() {
  return (
    <div>
      <h1>Visibiltiy Toggle</h1>
      <button onClick = {this.toggleVisibility}>{this.state.showMessage? 'Hide':'Show' }</button>
      {this.state.showMessage &&
      <p>Look it's a new message!</p>
      }
    </div>
  )
  }

}


ReactDOM.render(<Title />, document.getElementById('app'));
