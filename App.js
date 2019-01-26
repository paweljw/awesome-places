import React from 'react';

import PlacesList from './src/components/PlacesList/PlacesList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PageContainer from './src/components/PageContainer/PageContainer';
import placeImage from './src/assets/beautiful-place.jpg';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
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
      return { places: prevState.places.filter(({ key }) => key !== needle) };
    });
  };

  render() {
    const { places, placeName } = this.state;
    return (
      <PageContainer>
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
