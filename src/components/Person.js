import React from 'react'

function Person({person,key}) {
    return (
        <div>
           <h1>{key}This is {person.name}, {person.age} years old
           , skilled in {person.skill}</h1> 
        </div>
    )
}

export default Person