import React, { useEffect, useState } from 'react';

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(InitialValue) {
    const [value, setValue] = useState('')

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: { value, onChange },
        value,
        clear
    }
}

const MyHooks = () => {
    const input = useInput('')
    // const lastName = useInput('')

    useLogger(input.value)
    return (
        <div>
            {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
            <input type="text" {...input.bind} />
            {/* <input type="text" {...lastName} /> */}
            <button className="btn btn-danger" onClick={() => input.clear()}>Очистить</button>
            <h1>
                {input.value}
                {/* {lastName.value} */}
            </h1>

        </div>
    );
};

export default MyHooks;