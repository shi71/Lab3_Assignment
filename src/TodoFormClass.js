import React from "react";

class TodoFormClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      //errorCount: 0
    };

    this.onFormSubmitted = this.onFormSubmitted.bind(this);
    this.onTaskChanged = this.onTaskChanged.bind(this);
  }

  componentDidMount() {
    console.log("did mount", this.state, this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update", this.state, this.props, prevProps, prevState);

    // DO NOT DO THIS WITHOUT ANY LOGIC BEFORE!!!
    //this.setState({ errors: [] });

    if (prevProps != this.props) {
        console.log('props changed');
    }

    if (prevState != this.state) {
        console.log('state changed');
    }
  }

  componentWillUnmount() {
    console.log("will unmount", this.state, this.props);
  }

  onFormSubmitted(event) {
    event.preventDefault();

    const value = event.target.task.value;

    const newErrors = [];

    // Testing logic
    if (value == '') {
      newErrors.push('Task cannot be empty.');
    } else if (value.trim() == '') {
      newErrors.push('Task cannot be whitespaces.');
    }

    // DO NOT DO THIS!!!!!!!!!!!!!!!!!
    //this.state.errors = newErrors;

    // DO THIS!!!
    this.setState({ errors: newErrors }, () => console.log('state changed'));

    //setErrors(newErrors);
    
    if (newErrors.length == 0) {
        //const { onTaskAdded } = this.props;
        //onTaskAdded(value);

        this.props.onTaskAdded(value);

    }
  }

  onTaskChanged(event) {
    const value = event.target.value;

    const newErrors = [];

    // Testing logic
    if (value == '') {
      newErrors.push('Task cannot be empty.');
    } else if (value.trim() == '') {
      newErrors.push('Task cannot be whitespaces.');
    }

    // Functional component state change:
    //setErrors(newErrors);

    // Class component state change:
    this.setState({ errors: newErrors });
  }

  render() {
    const { } = this.props;
    const { errors } = this.state;

    const ulStyles = {
      color: "red",
    };

    const hasErrors = errors.length > 0 ? true : false;

    const errorEls = errors.map((error, index) => <li key={index}>{error}</li>);

    return (
      <form onSubmit={this.onFormSubmitted}>
        <input type="text" name="task" id="task" onChange={this.onTaskChanged} />
        <button type="submit" disabled={hasErrors}>
          Add Task
        </button>

        <ul style={ulStyles}>{errorEls}</ul>
      </form>
    );
  }
}

export default TodoFormClass;