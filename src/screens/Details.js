import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native'
import {WebView} from  "react-native-webview"
import Input from '../components/Input'

export default class Details extends Component {
    state = { 
        isLoading:true,
    }
    render() {
        const { fiscalId, date, status } = this.props.route.params.item;
        return (
            <>
                <View>
                    <Input label="Durum" value={status} editable={false}/>
                    <Input label="Kayıt tarihi" value={date} editable={false}/>
                </View>
                <WebView source={{uri:"https://monitoring.e-kassa.gov.az/#/index?doc="+fiscalId}}/>
            </>
        )
    }
}