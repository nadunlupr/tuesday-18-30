// import logo from './logo.svg';
import './App.css';
import React from 'react';
import LessonCard from './components/LessonCard';

class App extends React.Component {
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
                    </div>
                    <div style={{ display: 'flex' }}>
                        {
                            this.getLessons().map(l => <LessonCard name={l.name} key={l.id}/>)
                        }
                    </div>
                </div>

            </div>
        )
    }

    getLessons() {
        return [{
            id: '001',
            name: 'Lesson 1'
        },
        {
            id: '002',
            name: 'Lesson 2'
        },
        {
            id: '003',
            name: 'Lesson 3'
        },
        {
            id: '004',
            name: 'Lesson 4'
        }]
    }
}

export default App;
