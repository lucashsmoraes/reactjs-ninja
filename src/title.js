'use strict'

import React from 'react'

// const Title = (props) => (
//     <h1> Olá {`${props.name} ${props.lastName}`}</h1>
// )
const Title = ({name, lastName}) => (
    <h1> Olá {`${name} ${lastName}`}</h1>
)
Title.defaultProps = {
    name: 'Desconhecido',
    lastName: "sem sobrenome"
}

// const Title = React.createClass({
//     getDefaultProps: function () {
//         return {
//             name: 'Desconhecido',
//             lastName: 'sem sobrenome',
//             testObject: {
//                 first: 'noObject',
//                 last: 'noObject2'
//             }
//         }
//     },
//     render: function () {
//         return (
//             <h1> 
//             Olá {this.props.name + ' ' + this.props.lastName 
//                 + ' ' + this.props.testObject.first
//                 + ' / ' + this.props.testObject.last}! 
//             </h1>
//         )
//     }
// })

export default Title