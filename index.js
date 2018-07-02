import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

//create component
class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        todos: ['Hyper Text MarkUp Language', 'Cascading Style Sheet', 'JavaScript', 'ReactJS']
        };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    render(){
        let todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item = {item} key = {index} onDelete ={this.onDelete}/>
            );
        }.bind(this));
      return(
        <div id="todo-list">
            <h2 Style="text-align: center">Things I have to Learn to become a Web Dev</h2>
            <p>{this.state.age}</p>
            <ul>{todos}</ul>
             <AddItem onAdd={this.onAdd} />
        </div>
      );
  }

    onDelete(item){
      let updatedTodos = this.state.todos.filter(function(val, index){
          return item !== val;
      });
      this.setState({
          todos: updatedTodos
      });
    }
    onAdd(item){
      let updatedTodos = this.state.todos;
      updatedTodos.push(item);
      this.setState({
        todos: updatedTodos
      });
    }
};

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render(){
        return(
            <li>
                <div className = "todo-item">
                    <span className = "item-name">{this.props.item}</span>
                     <span className = "item-delete" Style= "cursor: pointer" onClick={this.handleDelete}>X</span>
                </div>

            </li>
        );
    }
    handleDelete(){
       this.props.onDelete(this.props.item);
    }
};

class AddItem extends React.Component{
       constructor(props){
         super(props);
         this.handleSubmit = this.handleSubmit.bind(this);
       }

       render(){
            return(

              <form id="add-todo" onSubmit={this.handleSubmit}>
                 <input type="text" ref="newItem" required/>
                 <input type="submit" value="Add me" />
              </form>
            );
       }

       handleSubmit(event){
           event.preventDefault();
           this.props.onAdd(this.refs.newItem.value);
       }
};
//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('root'));
