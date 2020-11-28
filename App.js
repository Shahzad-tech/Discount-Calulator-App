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
  Modal,
  TouchableHighlight,
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
  const[SaveMoney, updateSaveMoney] = useState(0)
  const[finalPrice, updateFinalPrince] = useState(0)
  const[saveData, updateSaveData] = useState("")
  const[modelVisibile, setmodelVisibile] = useState(false)
  const inputValidations=(text, meth)=>{
    let num = "0123456789"
    let txt = ""
    for (var i=0; i< num.length; i++){
      if(meth=="Discount"){
        if(text==100){
          txt = text
        }
        else if(num.indexOf(text[i])>-1){
           if(txt.length<2 || txt==""){
              txt = txt+text[i]
         }
      }
      }
      else if(meth=="original_num"){
      if(num.indexOf(text[i])>-1){
        txt = txt+text[i]
      }
    }
    }
    if(meth=="original_num"){
    UpdateOrginalPrice(txt)}
    else if(meth=="Discount"){
    UpdateDiscountPercentage(txt);
    calculateDiscount()
    }
   
  }

  const calculateDiscount =()=>{
    var x = parseFloat((OrginalPrice) * (DiscountPercentage/100)).toFixed(2)
    var y = parseFloat(OrginalPrice - x).toFixed(2)
    updateSaveMoney(x)
    updateFinalPrince(y) 
  }
  const clearAttr=()=>{
    UpdateOrginalPrice(0);
    UpdateDiscountPercentage(0);
    updateSaveMoney(0);
    updateFinalPrince(0);
  }
  const saveDdata=()=>{
    updateSaveData(saveData+"\nOriginal: "+OrginalPrice +" Discount: "+DiscountPercentage+"% Final: "+finalPrice)
    clearAttr()
  }
  const Viewhis=()=>{
    // alert(saveData)
    return (
      <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modelVisibile}
        >
          <View>
            <View>
              <Text>Hello World</Text>
              <TouchableHighlight onPress={()=>{setmodelVisibile(!modelVisibile)}}>
              <Text>Hide Modal</Text>
              </TouchableHighlight>  
              </View>
            </View>
          </Modal>
          <TouchableHighlight onPress={()=>{setmodelVisibile(true)}}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>
         
    )
  }
  const display=()=> {
    if(OrginalPrice!=0){
      // alert(OrginalPrice)
      return(
        <View >
        <Text  style = {{color:"black", fontWeight:"bold"}}>You Save: {SaveMoney}</Text>
        <Text  style = {{color:"black", fontWeight:"bold", marginTop:"2%"}}>Final Price: {finalPrice}</Text>
        </View>
      )
    }
  }

  return (
    <View>
      <View style = {{marginTop:"1%",alignItems:"center", backgroundColor:"red", height:"15%", justifyContent:"center"}}>
        <Text style = {{color:"white", fontWeight:"bold"}}>Discount Calculator App</Text>
      </View>
      <View style ={{marginTop:"25%", alignItems:"center"}}>

      <Text  style = {{color:"black", fontWeight:"bold"}} >Enter Original Price</Text>
      <TextInput
      style={{ width: "45%" ,marginTop:"2%", borderColor: 'gray', borderWidth: 2, color:"black", justifyContent:"center", textAlign:"center"}}
      placeholder="Original Price"
      keyboardType={"number-pad"}
      // onKeyPress={(e)=>{writeOriginalPrice(e.nativeEvent.key)}}
      onChangeText={(text) => {inputValidations(text,"original_num")}}
      // onKeyPress={(e)=>alert(e.nativeEvent.key)}
      // onKeyPress={writeOriginalPrice(value)}
      value = {OrginalPrice}
      // editable = {false}
       textAlign={'center'}
      />

      <Text style = {{marginTop:"5%", fontWeight:"bold"}}>Enter the Discount</Text>
      <TextInput
      style={{ width: "45%" , marginTop:"2%",borderColor: 'gray', borderWidth: 2, color:"black", justifyContent:"center", textAlign:"center",}}
      placeholder="Discount Percentage"
      keyboardType={"number-pad"}
      onChangeText={(text) => {inputValidations(text,"Discount");}}
      value = {DiscountPercentage}
       textAlign={'center'}
      />
      <View style={{marginTop:"8%"}}>
       {display()}
       </View>
      </View>
      <View style={{width:"100%", marginTop:"8%", flexDirection:"row"}}>
        <View style={{width:"32%",marginLeft:"1%"}}>
        <Button title="Clear" onPress={()=>{clearAttr()}}>Clear</Button>
        </View>
        <View style={{width:"32%", marginLeft:"1%"}}>
        <Button title="Save" onPress={()=>{saveDdata()}}>Save</Button>
        </View>
        <View style={{width:"32%",marginLeft:"1%"}}>
        <Button style={styles.textStyle} title="View History" onPress={()=>setmodelVisibile(true)}>View History</Button>
        </View>
      </View>
      <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modelVisibile}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{saveData}</Text>
              <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={()=>{setmodelVisibile(!modelVisibile)}}>
              <Text style={styles.textStyle}>Hide History</Text>
              </TouchableHighlight>  
              </View>
            </View>
          </Modal>
        </View>
      

      </View>
  
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
