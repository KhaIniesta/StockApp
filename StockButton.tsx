import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

interface StockButtonProps {
  onPress: () => void;
  name: string;
}

const StockButton: React.FC<StockButtonProps> = ({onPress, name}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const window = Dimensions.get('window')
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: 'lightgrey',
    width: (window.width - 15 * 4) / 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 10
  },
});

export default StockButton;
