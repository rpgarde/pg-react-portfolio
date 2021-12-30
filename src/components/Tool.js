import React from 'react'

const style = {
    marginRight:'2px'
}

function Tool(props) {
    return (
        <div class="d-inline-block badge bg-dark rounded-pill" style = {style}>{props.techItem}</div>
    )
}

export default Tool
