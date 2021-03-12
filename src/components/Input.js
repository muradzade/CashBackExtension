import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
    render() {
        const { label, ...rest } = this.props;
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{label}</Text>
                <TextInput
                    {...rest}
                    style={{...styles.inputStyle,color:{...rest.editable?"black":"gray"}}}  
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        color:"grey"
    },
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
        borderRadius: 20,
        backgroundColor:"white"
    },
});
