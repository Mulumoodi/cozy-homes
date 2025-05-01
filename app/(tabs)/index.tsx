import { ScrollView, StyleSheet } from 'react-native';
import HouseCard from '../components/HouseCard';
import housesData from '../data/houses.json';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {housesData.houses.map((house) => (
        <HouseCard
          key={house.id}
          image={house.image}
          location={house.location}
          price={house.price}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
});
