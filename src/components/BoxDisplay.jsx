import React from 'react';

const BoxDisplay = props => {
    const { boxColorArray } = props;
    return (
        <div>
            {
                boxColorArray.map((box, i) => (
                    <div key={i} style={
                        {
                            display: 'inline-block',
                            margin: "20px",
                            height: box.height,
                            width: box.width,
                            backgroundColor: box.color
                        }}>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxDisplay;