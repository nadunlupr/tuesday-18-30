import { Component } from 'react';
import axios from 'axios';
import loaderImg from '../assets/images/loader.gif';
import { Link } from 'react-router';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInfoVisible: false,
            description: undefined
        }
    }
    // componentDidMount() {
    //     this.getLessonDetails();
    // }

    render() {
        const {
            name,
            description,
            // anything
        } = this.props;

        return (
            <div className="lesson-card">
                <h2>{name}</h2>
                <div>
                    <p>
                        {description}
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
                            {
                                !this.state.description ?
                                    <div>
                                        <img src={loaderImg} width='40px' alt='Loading...' />
                                    </div> :
                                    <div>{this.state.description}</div>
                            }
                        </p>
                        <Link to='/lesson'>Go to lesson</Link>
                    </div>

                }
            </div>
        );
    }

    getLessonDetails() {
        const {
            id
        } = this.props;
        axios.get(`https://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120/${id}`)
            .then(res => {
                const {
                    data: {
                        info: {
                            description
                        } = {}
                    }
                } = res;
                console.log(description);
                this.setState(prevState => ({ ...prevState, description }));
            })
            .catch(err => console.error('error: ', err))
    }

    toggleVisibility() {
        this.setState(
            {
                ...this.state,
                isInfoVisible: !this.state.isInfoVisible
            })
        this.getLessonDetails();
    }
}

export default LessonCard;