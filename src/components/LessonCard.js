import { Component } from 'react';

class LessonCard extends Component {
    render() {
        return (
            <div className="lesson-card">
                <h2>{this.props.name}</h2>
                <div>
                    <p>
                        Check what we are going to learn under this lesson
                    </p>
                </div>
                <button onClick={() => console.log('clicked')}>
                    View Summary
                </button>
                <div id="moreInfo"
                    style={{ display: 'none' }}
                    className="more-info-panel">
                    <p className="black-text">
                        If you take the first lesson you can do the second one :)
                    </p>
                    <a href="./lesson-page.html">Go to lesson</a>
                </div>
            </div>
        );
    }
}

export default LessonCard;