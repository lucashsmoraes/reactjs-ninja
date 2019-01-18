import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
    <div style={{display: 'flex', height: 40}}>
        {story()}
    </div>
))

stories.add('Button sucess', () => (
    <Button onClick={action('success')} kind='success'>
        success
    </Button>
))

stories.add('Button danger', () => (
    <Button onClick={action('danger')} kind='danger'>
        danger
    </Button>
))