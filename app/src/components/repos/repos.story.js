import { storiesOf } from '@storybook/react'
import React from 'react'
import Repos from './repos'

storiesOf('Repos components', module)
    .add('with title prop', () => (
        <Repos title="Repos" />
))

    .add('with repos', () => (
    <Repos
        title='Favoritos'
        repos={[{
            link: 'https://github.com/lucashsmoraes',
            name: 'GitHub Lucas Moraes'      
        }]}
    />
))