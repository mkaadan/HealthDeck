'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { fetchCard } from '../actions';
import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
  onSuccess(e) {
    console.log(this.props.fetchCard(e));
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}

      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

const mapStateToProps = (state) => {
  const { name, bio, pro, image, link } = state.creationForm;

  return { name, bio, pro, image, link } ;
}
export default connect(mapStateToProps, {fetchCard}) (ScanScreen);
