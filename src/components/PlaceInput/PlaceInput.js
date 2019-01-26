import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

const PlaceInput = ({
  placeNameChangedHandler,
  placeName,
  placeSubmitHandler,
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      onChangeText={placeNameChangedHandler}
      value={placeName}
      style={styles.input}
      enablesReturnKeyAutomatically
      placeholder="What's an awesome place?"
      onSubmitEditing={placeSubmitHandler}
    />
    <Button title="Add" style={styles.button} onPress={placeSubmitHandler} />
  </View>
);

PlaceInput.propTypes = {
  placeNameChangedHandler: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  placeSubmitHandler: PropTypes.func.isRequired,
};

export default PlaceInput;
