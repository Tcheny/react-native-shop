import React from 'react';
import { Button } from 'react-native-elements';

export default class Button extends React.Component {
    render() {
       return (
           <Button
               icon={{ name: 'add' }}
               backgroundColor='#03A9F4'
               buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
               title='Add cart' />
       )
    }
}