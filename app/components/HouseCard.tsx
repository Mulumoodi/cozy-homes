import { Image, StyleSheet, Text, View } from 'react-native';

interface HouseCardProps {
  image: string;
  location: string;
  price: number;
}

export default function HouseCard({ image, location, price }: HouseCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.location} numberOfLines={1}>
          {location}
        </Text>
        <Text style={styles.price}>
          ${price.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  details: {
    padding: 16,
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
  },
}); 