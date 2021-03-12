import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ReceiptCard from '../components/ReceiptCard'
import CustomButton from '../components/Button'

export default class Home extends Component {
    state = {
        receipts: [{
            fiscalId: "HWxTMfQcw6fo",
            date: "11.12.1998",
            status: "Waiting"
        }],
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.route.params.fiscalId) {
            if (prevProps.route.params !== undefined) {

                if (prevProps.route.params.fiscalId !== this.props.route.params.fiscalId) {
                    this.addReceipt(this.props.route.params)
                }
            }
            else {
                this.addReceipt(this.props.route.params)
            }
        }
    }

    addReceipt = (receipt) => {
        //let timer=90*60*1000
        this.state.receipts.push({
            fiscalId: receipt.fiscalId,
            date: receipt.date,
            status: "Waiting"
        })
        //                               timer
        setTimeout(this.registerReceipt, 2000, receipt.fiscalId)


    }

    registerReceipt = (fiscalId) => {
        //
        //register receipt
        //
        let receipts = [...this.state.receipts]
        let index = receipts.findIndex(r => r.fiscalId === fiscalId);
        receipts[index] = { ...receipts[index], status: "Successful" }
        this.setState({ receipts })

        alert("registered")
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.center}>
                <CustomButton text="Ekle" onPress={() => { navigation.navigate('Ekle') }} />
                <FlatList data={this.state.receipts}
                    keyExtractor={item => item.fiscalId}
                    renderItem={({ item }) =>
                        <ReceiptCard
                            receipt={item}
                            onPress={() => navigation.navigate('Detaylar', { item })}
                        />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    }
});