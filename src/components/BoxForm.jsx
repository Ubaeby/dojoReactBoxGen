import React, { useState } from 'react';

const BoxForm = props => {
    const {boxColorArray, setBoxColorArray } = props;
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);


    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxColorArray( [...boxColorArray, {color: color, width: width + "px", height: height + "px"}]);
        setColor("");
        setHeight(0);
        setWidth(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input type="text" value={color} onChange={e => setColor(e.target.value)} />

            <label htmlFor="width">Width: </label>
            <input type="text" value={width} onChange={e => setWidth(e.target.value)} />

            <label htmlFor="height">Height: </label>
            <input type="text" value={height} onChange={e => setHeight(e.target.value)} />

            <input type="submit" value="Create box" />
        </form>
    )
};

export default BoxForm;