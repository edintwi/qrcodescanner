/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Image,
  ImageStyle,
  Linking,
  SafeAreaView,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export function CameraScreen() {
  return (
    <SafeAreaView style={{...$containerStyle}}>
      <View style={{...$headerStyle}}>
        <Image
          source={require('../../assets/images/qrcode.png')}
          style={{...$imageStyle}}
        />
        <Text style={{...$titleStyle}}>QRCODE SCANNER</Text>
      </View>
      <QRCodeScanner
        cameraStyle={{bottom: 0}}
        reactivate
        onRead={e => console.log('QR code scanned!', Linking.openURL(e.data))}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
    </SafeAreaView>
  );
}

const $containerStyle: ViewStyle = {
  flex: 1,
};

const $headerStyle: ViewStyle = {
  backgroundColor: '#82bee8',
  height: '20%',
  alignItems: 'center',
  paddingHorizontal: 20,
  flexDirection: 'row',
};

const $imageStyle: ImageStyle = {
  height: '80%',
  width: '30%',
  borderRadius: 30,
};

const $titleStyle: TextStyle = {
  fontSize: 25,
  color: '#fff',
  fontWeight: 'bold',
  fontStyle: 'italic',
  marginLeft: 20,
};
