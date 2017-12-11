class IndecisionApp extends React.Component {

  constructor(){
    super();
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.pickOption = this.pickOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: ['Thing 1', 'Thing 2', 'Thing 4']
    }

  }

  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options: []
      }
    })
  }

  addOption(option) {
    this.setState((prevState)=>{
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  pickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option)
  }

  render() {

    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          disableButton = {!this.state.options.length > 0}
          pickOption = {this.pickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption
          addOption = { this.addOption }
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>

      </div>
    );
  }
}

class Action extends React.Component {


  render() {
    return (
      <div>
        <button onClick = {this.props.pickOption} disabled = {this.props.disableButton}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {


  render() {
    return (
      <div>
        <button onClick = {this.props.handleDeleteOptions}>Remove all</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor() {
    super();
        this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = '';
    this.props.addOption(option)
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleAddOption}>
          <input type = 'text' name = 'option'/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
