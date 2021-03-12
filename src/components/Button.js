import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Button extends Component {
    render() {
        const { text, icon , ...rest} = this.props
        return (
            <TouchableOpacity {...rest} style={styles.buttonStyle}>
                {icon && <Icon name={icon} style={styles.iconStyle}/>}
                <Text style={styles.textStyle}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    iconStyle:{
        marginRight:7
    },
    buttonStyle: {
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 15,
        marginTop: 8,
        width: 120,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
});