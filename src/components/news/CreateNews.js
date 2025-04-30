import { useState } from 'react';
// import axios from 'axios';
import api from '../../services/api';

function CreateNews(props) {
    // const [title, setTitle] = useState();
    const initialState = {
        title: undefined,
        slug: '',
        text: undefined,
    };
    const [state, setState] = useState(initialState);
    return (
        <div className='news-create'>
            <div className='container'>
                <h1>Add News</h1>
                <br />

                <input type='text' placeholder='Title' value={state.title}
                    onChange={(event) => {
                        const {
                            target: {
                                value: inputTitle
                            }
                        } = event;
                        // const inputTitle = event.target.value;
                        setState(prevState => ({ ...prevState, title: inputTitle }));
                    }} />
                {state.title}
                <input type='text' placeholder='Slug' value={state.slug}
                    onChange={(event) => {
                        const {
                            target: {
                                value: inputSlug
                            }
                        } = event;
                        setState(prevState => ({ ...prevState, slug: inputSlug }));
                    }} />
                {state.slug}
                <textarea placeholder='Enter your news details here'
                    value={state.text}
                    onChange={(event) => {
                        const {
                            target: {
                                value: inputText
                            }
                        } = event;
                        setState(prevState => ({ ...prevState, text: inputText }));
                    }} />
            </div>
            <button onClick={() => save(state)}>Create News</button>
        </div>
    )
}

const save = async (news) => {

    try{
        const res = await api.post('/novice', { ...news })
        console.log('response: ', res);
        // .then(res => console.log('response: ', res))
        // .catch(err => console.error('error: ', err));
    }
    catch(error){
        console.error('error: ', error);
    }
}

export default CreateNews;