import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500'},
            { id: 'abcJob2', title: 'Tester', salary: '400'},
            { id: 'abcJob3', title: 'PM', salary: '1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('Check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;

        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('>>> Run did update: ', 'prev state: ', prevState, 'current state: ', this.state)
    }

    componentDidMount(){
        console.log('>>> Run component did mount')
    }


    render(){
        return (
            <>  
                <AddComponent
                    addNewJob={this.addNewJob}
                />         
                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent