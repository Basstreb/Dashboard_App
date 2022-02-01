import Toast from 'react-native-root-toast';

export function toastMessage(text, bgColor) {
    return Toast.show(text, {
        duration: Toast.durations.SHORT,
        position: -300,
        shadow: false,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: bgColor,
        textColor: '#FFFFFF',
        shadowColor: '#000',
    });
};