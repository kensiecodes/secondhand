import React from 'react'

export default function Button(props) {
    return (
        <a href={props.link} className="bg-yellow-200 py-2 px-4 m-2 rounded drop-shadow-md">{props.text}</a>
    )
}