import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // Android specific shadow
    elevation: 4,
    backgroundColor: Colors.primary800,
    // iOS specific shadow
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
});