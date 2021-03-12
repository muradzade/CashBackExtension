import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from '../components/Input'
import { BarCodeScanner } from 'expo-barcode-scanner'
import CustomButton from '../components/Button'
import moment from 'moment'

export default class Add extends Component {
    state = {
        fiscalId: null,
        date: moment().format("DD.MM.YYYY"),
        hasPermission: null,
        scanned: true
    }
    componentDidMount = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        this.setState({ hasPermission: status === "granted" })
    }

    getFiscalIdFromURL = (url) => {
        var regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {},
        match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2];
        }
        return params.doc.substring(0, 12)
    }

    handleScanned = ({ type, data }) => {
        if (type === 256) {
            this.setState({ fiscalId: this.getFiscalIdFromURL(data) })
            this.setState({ scanned: true })
        }
    }

    add = () => {
        if (this.state.fiscalId && this.state.date) {
            this.props.navigation.navigate("Anasayfa", {
                fiscalId: this.state.fiscalId,
                date: this.state.date
            })
        }
        else {
            alert("Eksik bilgi girildi")
        }

    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.hasPermission === null && <Text>Requesting for camera permission</Text>}
                {this.state.hasPermission === false && <Text>No access to camera</Text>}
                {this.state.scanned === false ? <BarCodeScanner
                    onBarCodeScanned={this.state.scanned ? undefined : this.handleScanned}
                    style={StyleSheet.absoluteFillObject} />
                    :
                    <View>
                        {this.state.hasPermission}
                        <Input value={this.state.fiscalId}
                            label="Fiscal Id"
                            onChangeText={(text) => this.setState({ fiscalId: text })} />
                        <Input value={this.state.date} label="Tarih" editable={false}/>
                        <Input value="Waiting" label="Durum" editable={false}/>
                        <View style={styles.buttons}>
                            <CustomButton icon="qr-code" text="Oku" onPress={() => this.setState({ scanned: false })} />
                            <CustomButton icon="add" text="Ekle" onPress={this.add} />
                        </View>

 
                    </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"space-around"
    }
})