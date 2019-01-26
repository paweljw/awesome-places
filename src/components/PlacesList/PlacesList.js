import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flex: 1,
  },
});

const PlacesList = ({ places, onItemPressed }) => (
  <FlatList
    style={styles.listContainer}
    data={places}
    renderItem={({ item: { key, value, image } }) => (
      <ListItem
        onItemPressed={onItemPressed}
        id={key}
        key={key}
        placeImage={image}
      >
        {value}
      </ListItem>
    )}
  />
);

PlacesList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  onItemPressed: PropTypes.func.isRequired,
};

export default PlacesList;
