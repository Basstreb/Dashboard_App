import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StaffCostErrors({ formik }) {
    return (
        <>
            {formik.errors.staffName && formik.errors.amount && formik.errors.cost &&
                formik.errors.project1 && formik.errors.per1 &&
                formik.errors.project2 && formik.errors.per2 &&
                formik.errors.project3 && formik.errors.per3 &&
                formik.errors.project4 && formik.errors.per4 &&
                formik.errors.payDate ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.staffName ? <Text style={styles.error}>{formik.errors.staffName}</Text> :
                        <>
                            {formik.errors.amount ? <Text style={styles.error}>{formik.errors.amount}</Text> :
                                <>
                                    {formik.errors.cost ? <Text style={styles.error}>{formik.errors.cost}</Text> :
                                        <>
                                            {formik.errors.project1 ? <Text style={styles.error}>{formik.errors.project1}</Text> :
                                                <>
                                                    {formik.errors.per1 ? <Text style={styles.error}>{formik.errors.per1}</Text> :
                                                        <>
                                                            {formik.errors.project2 ? <Text style={styles.error}>{formik.errors.project2}</Text> :
                                                                <>
                                                                    {formik.errors.per2 ? <Text style={styles.error}>{formik.errors.per2}</Text> :
                                                                        <>
                                                                            {formik.errors.project3 ? <Text style={styles.error}>{formik.errors.project3}</Text> :
                                                                                <>
                                                                                    {formik.errors.per3 ? <Text style={styles.error}>{formik.errors.per3}</Text> :
                                                                                        <>
                                                                                            {formik.errors.project4 ? <Text style={styles.error}>{formik.errors.project4}</Text> :
                                                                                                <>
                                                                                                    {formik.errors.per4 ? <Text style={styles.error}>{formik.errors.per4}</Text> :
                                                                                                        <>
                                                                                                            {formik.errors.payDate ? <Text style={styles.error}>{formik.errors.payDate}</Text> :
                                                                                                                <>
                                                                                                                    {/* {errorCheckPasswords && <Text style={styles.error}>{errorCheckPasswords}</Text>} */}
                                                                                                                </>}
                                                                                                        </>}
                                                                                                </>}
                                                                                        </>}
                                                                                </>}
                                                                        </>}
                                                                </>}
                                                        </>}
                                                </>}
                                        </>}
                                </>}
                        </>}
                </>
            }
        </>
    )
}

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
    error: {
        color: 'red',
        marginTop: 14,
        marginBottom: -31,
        textAlign: 'center',
    },
    saveButton: {
        backgroundColor: '#0078B4',
        borderRadius: 15,
        padding: 15,
        width: 325,
        alignSelf: 'center',
        marginTop: 50,
    },
    saveText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },
})
