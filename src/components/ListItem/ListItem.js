import React from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 8,
    width: 30,
    height: 30,
  },
});

const Touchy =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const ListItem = ({ children, onItemPressed, id, placeImage }) => (
  <Touchy onPress={() => onItemPressed(id)}>
    <View style={styles.listItem}>
      <Image source={placeImage} style={styles.image} />
      <Text>{children}</Text>
    </View>
  </Touchy>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onItemPressed: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeImage: PropTypes.node.isRequired,
};

export default ListItem;
