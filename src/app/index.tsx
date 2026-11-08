import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {initializeApp} from 'firebase/app';
import {firebaseConfig}from '../../firebaseConfig';
//implementarea firestore aici

const app = initializeApp(firebaseConfig);
export default function App()
{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alege o data</Text>

            {/* chenarul placeholder pentru viitorul calendar */}
            <View style={styles.calendarBox}>
                <Text style={styles.calendarText}>Aici va fi randat calendarul</Text>
            </View>    
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1e1e2e',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize: 24,
        color:'#cdd6f4',
        marginBottom:20,
        fontWeight:'bold',
    },
    calendarBox:{
        width:320,
        height:320,
        borderWidth:2,
        borderColor:'#89b4fa',
        borderStyle:'dashed',
        borderRadius:12,
        backgroundColor:'#323244',
        alignItems:'center',
        justifyContent:'center',
    },
    calendarText: {
        color:'#a6adc8',
        fontSize:16,
    },
});