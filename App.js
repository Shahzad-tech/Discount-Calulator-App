/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default function App () {

  return (
    <View>
      <View style ={{marginTop:"5%"}}>
      <TextInput
      style={{ width: "100%" , borderColor: 'gray', borderWidth: 2, color:"black", justifyContent:"center", textAlign:"center", marginleft:"50%"}}
      placeholder="Original Price"
      // value = {this.state.number}
      editable = {false}
       textAlign={'center'}
      />
      </View>
      <View>
      <TextInput
      style={{ width: "100%" , borderColor: 'gray', borderWidth: 2, color:"black", justifyContent:"center", textAlign:"center", marginleft:"50%"}}
      placeholder="Discount Percentage"
      // value = {this.state.number}
      editable = {false}
       textAlign={'center'}
      />
      </View>
      {/* <Text>
        Game
      </Text> */}
      </View>
  
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

