import React, { useEffect, useRef, useState } from 'react';

// если я не хочу часто перерисовывать компоненту например - renderCount 
// могу получить ссылки на DOM элементы например - focus
// могу получить значение предыдущего state например - prevValue

const UseRef = () => {
    const [value, setValue] = useState("initial")
    const renderCount = useRef(1) // есть св-во current
    const inputRef = useRef(null)
    const prevValue = useRef("")

    const focus = () => inputRef.current.focus()  // могу сделать фокус потомучто обычный DOM эл-т

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h1>Предыдущее состояние: {prevValue.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button
                onClick={focus} className="btn btn-success">Фокус</button>
        </div>
    );
};

export default UseRef;