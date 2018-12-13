'use strict'

import React from 'react'

const Title = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Desconhecido',
            lastName: 'sem sobrenome',
            testObject: {
                first: 'noObject1',
                last: 'noObject2'
            }
        }
    },
    render: function () {
        return (
            <h1> 
            Olá {this.props.name + ' ' + this.props.lastName 
                + ' ' + this.props.testObject.first
                + ' / ' + this.props.testObject.last}! 
            </h1>
        )
    }
})

export default Title