import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, SafeAreaView, View,Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default function App() {

  let [input1, setInputData1] = useState("");
  let [input2, setInputData2] = useState(0);

  let [arr1 , setArr1] = useState([""]);
  let [arr2 , setArr2] = useState([0]);

  let [setter, setSetter] = useState(false);
  
  console.log(arr1);
  console.log(arr2);

  var arrx = ["", "", "", "", ""];
  var arry = [0, 0, 0, 0, 0];

  var x1 = arrx[0], x2 = arrx[1], x3 = arrx[2], x4 = arrx[3], x5 = arrx[4];
  var y1 = arry[0], y2 = arry[1], y3 = arry[2], y4 = arry[3], y5 = arry[4];

  const Update = (arr1, arr2) => {

    x1 = arr1[0];
    x2 = arr1[1];
    x3 = arr1[2];
    x4 = arr1[3];
    x5 = arr1[4];
    y1 = arr2[0];
    y2 = arr2[1];
    y3 = arr2[2];
    y4 = arr2[3];
    y5 = arr2[4];
  
    var list = {
    
      labels: [x1, x2, x3, x4, x5],
      datasets: [
        {
          data: [y1, y2, y3, y4, y5]
        }
      ],
    
    };
  
    return list;
  
  };

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      
      <Text style={styleSheet.text}> Enter Month </Text>
 
        <TextInput
          placeholder="Enter Value here"
          onChangeText={item => setInputData1(item.toString()) }
          style={styleSheet.textInput} />

      <Button onPress={() => setArr1((arr1) => [...arr1, input1.toString()])}
         title={'save'} />
 

      <Text>
        
      </Text>

      <Text style={styleSheet.text}> Enter Usage in kWh </Text>
 
        <TextInput
          placeholder="Enter Value here"
          onChangeText={item => setInputData2(Number(item)) }
          style={styleSheet.textInput} />

      <Button onPress={() => setArr2((arr2) => [...arr2, Number(input2)])}
         title={'save'} />

      <Text>
        
      </Text>

      <Button onPress={() => Update(arr1, arr2)}
         title={'update'} />

      <Text>
        
        </Text>

      <Button onPress={() => setSetter(true)}
         title={'graph'} />
      

      <Text>
        
        </Text>

    <LineChart
    data={setter ? Update(arr1, arr2) : {
  
      labels: [x1, x2, x3, x4, x5],
      datasets: [
        {
          data: [y1, y2, y3, y4, y5]
        }
      ],
    
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="kWh"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

         
              
    </SafeAreaView>

    
  );

}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  text:{
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20
  },

  textInput:{
      textAlign: 'center',
      marginBottom: 20, 
      height: 44,
      width: '88%',
      borderWidth: 1,
      borderColor: '#4CAF50',
      borderRadius: 7,
  }
});