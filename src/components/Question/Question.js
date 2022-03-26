import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='container'>
            <div>
            <h4>Q1. How React Works?</h4>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.The majority of React's functionality is built on DOM manipulation. React makes use of a virtual DOM, which is a JavaScript implementation of a DOM tree. When we make changes to the code, React evaluates the virtual and real DOM and updates the UI. React updates the actual DOM only when it finds error-free JSX changes.</p>
            </div>
            <div>
                <h4>Q2. What are the difference between Props and useState ?</h4>
                <p>The processing of data is the most fundamental but significant distinction between props and useState.Use props to pass data & event handlers down to your child components. Data can be passed from one component to another via Props. However, data cannot be transferred from one component to another via the useState. UseStates, on the other hand, saves data records locally. Despite the fact that the props and useStates are related, data from the useState is normally sent as props data.</p>
            </div>
        </div>
    );
};

export default Question;