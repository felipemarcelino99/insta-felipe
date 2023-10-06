import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require('../../img/logo.png')} style={styles.logo}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../img/send.png')} style={styles.send}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 13,
        marginTop: 25,
        borderBottomWidth: .2   ,
        shadowColor: 'rgba(0,0,0,.16)',
        elevation: 1
    },
    logo: {
        maxWidth: 100,
        width: 100
    },
    send: {
        width: 23,
        maxHeight: 23
    }
});