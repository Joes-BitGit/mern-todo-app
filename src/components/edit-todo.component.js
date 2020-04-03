import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
  }

componentDidMount() {
  axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        todo_description: response.data.todo_description,
        todo_responsible: response.data.todo_responsible,
        todo_priority: response.data.todo_priority,
        todo_completed: response.data.todo_completed
      })
    })
    .catch(function(error) {
      console.log(error)
    })
}

  render(){
    return (
      <div>
        <h3>Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
                   className="form-control"
                   value={this.state.todo_description}
                   onChange={this.onChangeTodoDescription}
            />
            <label>Responsible: </label>
            <input type="text"
                   className="form-control"
                   value={this.state.todo_responsible}
                   onChange={this.onChangeTodoResponsible}
            />
          </div>
        </form>
      </div>
    )
  }
}
