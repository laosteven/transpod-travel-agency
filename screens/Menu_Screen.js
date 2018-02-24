import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Button,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import { Header } from 'react-navigation';
import NavigatorService from './../utils/navigator';
import MapView from 'expo';

class Menu_Screen extends Component {
  static navigationOptions = {
    title: 'Kata'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <RkText>
          Guess who has 2 thumbs and is logged in.... YOU :D
        </RkText> */}
        <Button title="QR" onPress={() => NavigatorService.reset('qr_scan')} />
        <Button title="Settings" onPress={() => NavigatorService.reset('settings_screen')} />
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    justifyContent: "center"
  }
}));

export default Menu_Screen;