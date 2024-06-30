import {Image, StyleSheet, Text, View, useWindowDimensions, Dimensions, ScrollView} from 'react-native';
import Title from '../components/ui/Title';
import {PrimaryButton} from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions();
    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        borderWidth: height < 380 ? 1 : 3,
        borderColor: Colors.primary800,
        margin: height < 380 ? 12 : 36,
    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={styles.imageContainer}>
                    <Image style={[styles.image, imageStyle]} source={require('../assets/images/success.png')}/>
                </View>
                <Text style={[styles.summaryText, {fontSize: height < 380 ? 20 : 24}]}>
                    Your phone needed
                    <Text style={styles.highlight}> {roundsNumber} </Text>
                    rounds to guess the number <Text style={styles.highlight}> {userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>
                    Start new game
                </PrimaryButton>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    imageContainer: {
        overflow: 'hidden',
    },
    summaryText: {
        fontFamily: 'open-sans',
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    },
    image: {
        width: '100%',
        height: '100%'
    }
});