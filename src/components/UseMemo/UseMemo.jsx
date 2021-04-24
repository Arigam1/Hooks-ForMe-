import React, { useState, useMemo, useEffect } from 'react';

const complexCompute = (num) => {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

const UseMemo = () => {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    // const computed = complexCompute(number)
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    useEffect(() => {
        console.log("styles change")
    }, [styles])

    return (
        <div>
            <h1 style={styles}>xDDDADA{number}</h1>
            <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>add</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>delete</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>color</button>
        </div>
    );
};

export default UseMemo;