import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 8,
    ...Platform.select({
      ios: {
        paddingTop: 35,
      },
    }),
  },
});

const PageContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
