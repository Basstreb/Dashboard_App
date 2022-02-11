import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomerErrors({ formik }) {
    return (
        <>
            {formik.errors.companyName && formik.errors.managerName && formik.errors.managerCharge && formik.errors.phoneNumber && formik.errors.cif && formik.errors.direction ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.companyName ? <Text style={styles.error}>{formik.errors.companyName}</Text> :
                        <>
                            {formik.errors.managerName ? <Text style={styles.error}>{formik.errors.managerName}</Text> :
                                <>
                                    {formik.errors.managerCharge ? <Text style={styles.error}>{formik.errors.managerCharge}</Text> :
                                        <>
                                            {formik.errors.phoneNumber ? <Text style={styles.error}>{formik.errors.phoneNumber}</Text> :
                                                <>
                                                    {formik.errors.cif ? <Text style={styles.error}>{formik.errors.cif}</Text> :
                                                        <>
                                                            {formik.errors.direction ? <Text style={styles.error}>{formik.errors.direction}</Text> :
                                                                <>
                                                                    {/* {errorCheckPasswords && <Text style={styles.error}>{errorCheckPasswords}</Text>} */}
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
    error: {
        color: 'red',
        marginTop: 14,
        marginBottom: -31,
        textAlign: 'center',
    },
})