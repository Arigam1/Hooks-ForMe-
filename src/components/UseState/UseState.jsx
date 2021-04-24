import React, { useState } from 'react';

function random() {
    console.log("forJust")
    return Math.trunc(Math.random() * 20)
}

const UseState = () => {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(() => {
        return random()
    });

    const [state, setState] = useState({
        title: "Счетчик",
        date: Date.now()
    })


    const addCount = () => {
        // setCount(count + 1)
        // setCount(count + 1)

        setCount((prevCount) => {
            return prevCount + 1
        })
        setCount(prev => prev + 1)

    }
    const deleteCount = () => {
        setCount(count - 1)
    }


    // updateTitles - На крайняк, лучше всего отдельно изменять каждое 
    // состояние отдельно(useState для date and title))) 
    const updateTitles = () => {
        setState(prev => {
            return {
                ...prev,
                title: "New Title"
            }
        })
    }

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button className="btn btn-success" onClick={addCount}>Add</button>
            <button className="btn btn-danger" onClick={deleteCount}>Delete</button>

            <button className="btn btn-default" onClick={updateTitles}>Изменить титле</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
};

export default UseState;