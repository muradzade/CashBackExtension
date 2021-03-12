import React, { Component } from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { Text, Button, Card, Divider } from 'react-native-elements';

export default class ReceiptCard extends Component {
    render() {
        const { fiscalId, date, status } = this.props.receipt;
        let color="";
        switch (status) {
            case "Successful":
                color="green"; break;
            case "Waiting":
                color="orange"; break;
            case "Denied":
                color="red"; break;
        }        
        return (
            <TouchableNativeFeedback
                useForeground
                onPress={this.props.onPress}
            >
                <Card >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.titleStyle}>{fiscalId}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            style={{
                                ...styles.noteStyle,
                                color: color
                            }}>
                            {status}
                        </Text>
                        <Text style={styles.noteStyle}>{date}</Text>
                    </View>
                </Card>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: 'gray',
        fontSize: 14
    },
    titleStyle: {
        marginHorizontal: 5,
        flex: 5,
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold'

    }
});