import React from 'react'
import Person from './Person'

function ListRender(props) {
    //const names = ['Bruce', 'Clark', 'Diana']
    //const listnames = names.map(name => <h1>{name}</h1>)
    const persons = [
        {
            id : 1,
            name: 'Bruce',
            age : 34,
            skill : 'Flask'
        },
        {
            id : 2,
            name: 'Diana',
            age : 38,
            skill : 'C++'
        },
        {
            id : 3,
            name: 'Clark',
            age: 35,
            skill: 'React'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {/*{names.map((name) => <h1>{name}</h1>)}*/}
            {/*listnames*/}
            {personList}
        </div>
    )
}

export default ListRender