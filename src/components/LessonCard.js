import { Component } from 'react';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInfoVisible: false
        }
    }

    render() {
        return (
            <div className="lesson-card">
                <h2>{this.props.name}</h2>
                <div>
                    <p>
                        Check what we are going to learn under this lesson
                    </p>
                </div>
                <button onClick={() => this.toggleVisibility()}>
                    View Summary
                </button>
                {
                    this.state.isInfoVisible &&
                    <div id="moreInfo"
                        className="more-info-panel">
                        <p className="black-text">
                            If you take the first lesson you can do the second one :)
                        </p>
                        <a href="./lesson-page.html">Go to lesson</a>
                    </div>

                }
            </div>
        );
    }

    toggleVisibility() {
        this.setState(
            {
                ...this.state,
                isInfoVisible: !this.state.isInfoVisible
            })
    }
}

export default LessonCard;