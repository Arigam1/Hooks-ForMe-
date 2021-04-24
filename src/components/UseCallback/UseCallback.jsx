import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ItemsList from '../UseCallback/ItemsList'

const UseCallback = () => {
    const [number, setNumber] = useState(1)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(number).fill('').map((_, i) => `Элемент ${i + 1}`)
    }, [number])

    return (

        <div>
            <h1 style={styles}>Изменения {number}</h1>
            <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>add</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>color</button>

            <ItemsList getItems={generateItemsFromAPI} />
        </div>
    );
};

export default UseCallback;