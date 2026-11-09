import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {initializeApp, getApps, getApp} from 'firebase/app';
import {getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore';
import {firebaseConfig}from '../../firebaseConfig';
import{Calendar} from 'react-native-calendars';

//initializare firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export default function App()
{
    const [selectedDate, setSelectedDate] = useState('');
    const [eventText, setEventText] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleEvent = async () => 
    {
        if(!selectedDate)
        {
            setStatusMessage('⚠️ Selecteaza mai intai o zi din calendar!');
            return;
        }
        if(!eventText.trim())
        {
            setStatusMessage('⚠️ Scrie ce eveniment are loc!');
            return;
        }

        try {
            setStatusMessage('Se Salveaza...');
            await addDoc(collection(db, 'events'),
        {
            date:selectedDate,
            title:eventText.trim(),
            createdAt: serverTimestamp(),
        });
        setStatusMessage('✅ Salvat pentru ${selectedDate}!');
        setEventText('');
        }catch (error)
        {
            console.error('Eroare la salvare in Firestore:', error);
            setStatusMessage('❌ Eroare la salvare! Verifica consola');
        }
    };
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alege o data</Text>

            <View style={styles.calendarBox}>
              <Calendar
                onDayPress={(day: {dateString: string})=>{
                    setSelectedDate(day.dateString);
                    setStatusMessage('');
                }}
                markedDates={{
                    [selectedDate]:{
                        selected: true,
                        disableTouchEvent:true,
                        selectedColor:'#89b4fa',
                        selectedTextColor:'#1e1e2e',

                    },
                }}
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

            <View style = {styles.eventBox}>
                <Text style={styles.dateLabel}>
                    {selectedDate ? 'Data selectata:${selectedDate}' : 'Nicio data selectata'}
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Ce eveniment are loc in aceasta zi?"
                    placeholderTextColor="#6c7086"
                    value={eventText}
                    onChangeText={setEventText}
                />
                
                <TouchableOpacity style={styles.saveButton} onPress={handleEvent}>
                    <Text style={styles.saveButtonText}>Salveaza in Firebase</Text>
                </TouchableOpacity>

                {statusMessage !== '' && (
                    <Text style={styles.statusText}>{statusMessage}</Text>
                )}
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
        padding:20,
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
        marginBottom:20,
    },
    eventBox:
    {
        width:350,
        backgroundColor:'#313244',
        padding:16,
        borderRadius:12,
        borderWidth:1,
        borderColor:'#45475a',
    },
    dateLabel:{
        color:'#89b4fa',
        fontSize:16,
        fontWeight:'600',
        marginBottom:12,
    },
    input:
    {
        backgroundColor:'#1e1e2e',
        color:'#cdd6f4',
        paddingHorizontal:12,
        paddingVertical:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#45475a',
        fontSize:15,
        marginBottom:12,
    },
    saveButton:{
        backgroundColor:'#89b4fa',
        paddingVertical:12,
        borderRadius:8,
        alignItems:'center',
    },
    saveButtonText:{
        color:'#1e1e2e',
        fontWeight:'bold',
        fontSize:16,
    },
    statusText:{
        color:'#a6e3a1',
        marginTop:10,
        textAlign:'center',
        fontSize:14,
    },
    calendarText: {
        color:'#a6adc8',
        fontSize:16,
    },
});