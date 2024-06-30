import {StyleSheet, Text, Platform} from 'react-native';

export default function Title({children}) {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        maxWidth: '80%',
        textAlign: 'center',
        padding: 12,
        // borderWidth: Platform.OS === 'ios' ? 0 : 2,
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: 'white'
    }
})