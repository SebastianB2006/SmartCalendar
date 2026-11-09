import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {initializeApp, getApps, getApp} from 'firebase/app';
import {firebaseConfig}from '../../firebaseConfig';
import{Calendar} from 'react-native-calendars';

//initializare firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();

export default function App()
{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alege o data</Text>

            <View style={styles.calendarBox}>
              <Calendar
                theme={{
                  backgroundColor:'#1e1e2e',
                  calendarBackground: '#313244',
                  textSectionTitleColor: '#a6adc8',
                  selectedDayBackgroundColor: '#89b4fa',
                  selectedDayTextColor: '#1e1e2e',
                  todayTextColor: '#89b4fa',
                  dayTextColor: '#cdd6f4',
                  textDisabledColor: '#585b70',
                  monthTextColor: '#cdd6f4',
                  arrowColor: '#89b4fa',
                }}
              />
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
        borderWidth:1,
        overflow:'hidden',
        borderRadius:12,
        backgroundColor:'#323244',
        borderColor:'#45475a',
    },
    calendarText: {
        color:'#a6adc8',
        fontSize:16,
    },
});