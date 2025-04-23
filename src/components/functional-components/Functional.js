import { useState } from 'react';

function Functional({sampleProp}) {
    // const {
    //     sampleProp
    // } = props;
    const [attr, setAttr] = useState();
    
    return (
        <div>
            <h1>Our first functional component</h1>
            {sampleProp}
        </div>
    )
}

export default Functional;