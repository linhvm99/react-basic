import React from 'react';
import AddTodo from './AddTodo';
import './ListTodo.scss'
import { toast } from 'react-toastify';
import Color from '../HOC/Color';


class ListTodo extends React.Component{

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework'},
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Coding project' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast('Delete Successfully')
    }

    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // Save
        if(isEmptyObj === false && editTodo.id === todo.id){
            
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))

            console.log('Before update: ', listTodosCopy[objIndex])

            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''
            })

            toast('Update successfully')

            return;
        }

        // Edit
        this.setState({
            editTodo: todo
        })
        

        
    }

    handleOnChangeEditTodo = (e) => {
        let editTodoCoppy = {...this.state.editTodo}
        editTodoCoppy.title = e.target.value

        this.setState({
            editTodo: editTodoCoppy
        })
    }


    render(){
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('>>> check empty object: ', isEmptyObj)

        return (
            <>
            <p>Simple Todos App</p>
            <div className='list-todo-container'>
                <AddTodo 
                    addNewTodo = {this.addNewTodo}    
                />
                <div className='list-todo-content'>
                    { listTodos && listTodos.length > 0 && 
                        listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            { editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - 
                                                    <input 
                                                        value={editTodo.title} 
                                                        onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                                          
                                    }
                                    
                                    {/* <input value={item.title} /> */}
                                    
                                    <button 
                                        className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        { isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button 
                                        className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            </>
        )
        
    }
}

export default Color(ListTodo) 