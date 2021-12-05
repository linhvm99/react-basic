import React from "react"

function getRandomColor() {
    var letter = '0123456789ABCDEF'
    var color = '#'
    for(var i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color
}

const Color = (WrappedComponent) => {

    const randomColor = getRandomColor();

    return (props) => (
        <div style={{color: randomColor}}>
            <WrappedComponent  {...props} />
        </div>
    )
}

export default Color