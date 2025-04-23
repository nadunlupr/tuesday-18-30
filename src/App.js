// import logo from './logo.svg';
import './App.css';
import React from 'react';
import LessonCard from './components/LessonCard';
import axios from 'axios';
import Functional from './components/functional-components/Functional';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: []
        };
    }

    componentDidMount() {
        this.getLessons();
    }

    render() {
        return (
            <div className="content-container">
                <div className="main-content">
                    <h1 className="header-text">
                        Welcome back to &lt;HTML/&gt;
                    </h1>
                    <div className="sub-heading-container">
                        <p>
                            <span className="sub-heading">
                                Let's brush up our html, js and css knowledge
                            </span>
                        </p>
                    <Functional sampleProp='this is the prop'/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {
                            this.state.lessons.map(l => <LessonCard name={l.text}
                                id={l.value}
                                key={l.value}
                                description={l.title} />)
                        }
                    </div>
                </div>

            </div>
        )
    }

    getLessons() {
        axios.get('https://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120/')
            .then(({ data: lessons }) => {
                // const {
                //     data: lessons
                // } = res;
                console.log('response: ', lessons);
                this.setState(prevState => ({ ...prevState, lessons }))
            })
            .catch(err => console.error('error: ', err));


        // return [{
        //     id: '001',
        //     name: 'Lesson 1'
        // },
        // {
        //     id: '002',
        //     name: 'Lesson 2'
        // },
        // {
        //     id: '003',
        //     name: 'Lesson 3'
        // },
        // {
        //     id: '004',
        //     name: 'Lesson 4'
        // }]
    }
}

export default App;
