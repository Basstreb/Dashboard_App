import Toast from 'react-native-root-toast';

export function toastMessage(text, color) {
    return Toast.show(text, {
        duration: Toast.durations.SHORT,
        position: -300,
        shadow: false,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: 'none',
        shadowColor: '#000',
        textColor: '#000',
    });
};