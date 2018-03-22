import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements'

export default class Items extends React.Component {
    render () {
        return (
        <View>
                <SearchBar
                    placeholder='Type Here...' />
        </View>
        )
    }
}