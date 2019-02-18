import React from 'react';

import PlacesList from './src/components/PlacesList/PlacesList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PageContainer from './src/components/PageContainer/PageContainer';
import placeImage from './src/assets/beautiful-place.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null,
  };

  placeNameChangedHandler = placeName => this.setState({ placeName });

  placeSubmitHandler = () => {
    const { placeName } = this.state;

    if (placeName.trim() === '') return;

    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random().toString(),
        value: prevState.placeName,
        image: placeImage,
      }),
      placeName: '',
    }));
  };

  itemPressedHandler = needle => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(({ key }) => key === needle),
      };
    });
  };

  modalClosePressedHandler = () => {
    this.setState({ selectedPlace: null });
  };

  modalDeletePressedHandler = () => {
    this.setState(prevState => ({
      selectedPlace: null,
      places: prevState.places.filter(
        ({ key }) => key !== prevState.selectedPlace.key
      ),
    }));
  };

  render() {
    const { places, placeName, selectedPlace } = this.state;
    return (
      <PageContainer>
        <PlaceDetail
          selectedPlace={selectedPlace}
          closeHandler={this.modalClosePressedHandler}
          deleteHandler={this.modalDeletePressedHandler}
        />
        <PlaceInput
          placeName={placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <PlacesList places={places} onItemPressed={this.itemPressedHandler} />
      </PageContainer>
    );
  }
}
