/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button, 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default function App () {
  const[OrginalPrice, UpdateOrginalPrice] = useState(0)
  const[DiscountPercentage, UpdateDiscountPercentage] = useState(0)

  const writeOriginalPrice=(e)=>{
    alert(e)
  }
  const display=()=> {
    if(OrginalPrice!=0){
      alert(OrginalPrice)
      return(
        <View style={{flexDirection:"row"}}>
        <Button title ="You Save">You Save</Button>
        <Button title ="Final Price">Final Price</Button>
        </View>
      )
    }
  }

  return (
    <View>
      <View style ={{marginTop:"5%", alignItems:"center"}}>

      <Text>Enter Original Price</Text>
      <TextInput
      style={{ width: "45%" ,marginTop:"2%", borderColor: 'gray', borderWidth: 2, color:"black", justifyContent:"center", textAlign:"center", marginleft:"50%"}}
      placeholder="Original Price"
      keyboardType={"number-pad"}
      // onKeyPress={(e)=>{writeOriginalPrice(e.nativeEvent.key)}}
      onChangeText={(text) => UpdateOrginalPrice(text)  }
      // onKeyPress={(e)=>alert(e.nativeEvent.key)}
      // onKeyPress={writeOriginalPrice(value)}
      // value = {this.state.number}
      // editable = {false}
       textAlign={'center'}
      />
      <Text style = {{marginTop:"5%"}}>Enter the discount</Text>
      <TextInput
      style={{ width: "45%" , marginTop:"2%",borderColor: 'gray', borderWidth: 2, color:"black", justifyContent:"center", textAlign:"center",}}
      placeholder="Discount Percentage"
      keyboardType={"number-pad"}
      onChangeText={(text) => UpdateDiscountPercentage(text)  }
      // value = {this.state.number}
      // editable = {false}
       textAlign={'center'}
      />
      <View style={{marginTop:"5%"}}>
       {display()}
       </View>
      </View>

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

