import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    padding: 8,
    ...Platform.select({
      ios: {
        paddingTop: 40,
      },
    }),
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
});

const PlaceDetail = ({ selectedPlace, closeHandler, deleteHandler }) => {
  let modalContent = null;

  if (selectedPlace) {
    const { image: placeImage, value: placeName } = selectedPlace;
    modalContent = (
      <React.Fragment>
        <Image source={placeImage} style={styles.placeImage} />
        <Text style={styles.placeName}>{placeName}</Text>
      </React.Fragment>
    );
  }

  return (
    <Modal
      visible={!!selectedPlace}
      animationType="slide"
      onRequestClose={closeHandler}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={deleteHandler} />
          <Button title="Close" onPress={closeHandler} />
        </View>
      </View>
    </Modal>
  );
};

PlaceDetail.defaultProps = {
  selectedPlace: null,
};

PlaceDetail.propTypes = {
  selectedPlace: PropTypes.shape({
    value: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired,
  }),
  closeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default PlaceDetail;
