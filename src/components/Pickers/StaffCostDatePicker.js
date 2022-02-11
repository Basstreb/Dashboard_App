import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextPoppins } from '../../utils/CustomFonts';
import dayjs from 'dayjs';

export const StaffCostDatePicker = ({ dateSelection, initialDate }) => {
    const [date, setDate] = useState(initialDate ? dayjs(initialDate).toDate() : new Date());
    const [show, setShow] = useState(false);
    const todayDate = new Date();

    const onChange = (event, selectedDate) => {
        setDate(selectedDate || date);
        dateSelection(dayjs(selectedDate).format('YYYY-MM-DD'));
        if (Platform.OS === 'android') {
            setShow(false);
        }
    };

    const showDatepicker = () => {
        setShow(!show);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={showDatepicker}
                style={styles.input}>
                <TextPoppins regular style={{ color: '#696767' }} >
                    {dayjs(date).format('DD/MM/YYYY') === dayjs(todayDate).format('DD/MM/YYYY') ? 'Fecha del gasto' : dayjs(date).format('DD/MM/YYYY')}
                </TextPoppins>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    locale="es-ES"
                    minimumDate={todayDate}
                    testID="dateTimePicker"
                    value={initialDate ? new Date(initialDate) : date}
                    mode='date'
                    display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#696767',
        marginHorizontal: 50,
        fontSize: 15,
        marginTop: 30,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#8A8888',
    },
})