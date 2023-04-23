import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, SafeAreaView, Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default function App() {

  let [input1, setInputData1] = useState(""); // [variable, function to set value of variable] and initial value of variable in ()
  let [input2, setInputData2] = useState(0);

  let [arr1 , setArr1] = useState([""]);
  let [arr2 , setArr2] = useState([0]);

  let [flag, setFlag] = useState(false);
  
  console.log(arr1);
  console.log(arr2);

  var x = [""]; // used to display initial empty graph
  var y = [0];

  var arrx = ["", "", "", "", "", "", ""]; // array with values which are replaced by user input
  var arry = [0, 0, 0, 0, 0, 0, 0];

  const Update = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++)
    {
      arrx[i] = arr1[i]; // arrx is graphed using values in user input arr1
      arry[i] = arr2[i];
    }
  
    var list = {
    
      labels: arrx,
      datasets: [
        {
          data: arry
        }
      ],
    
    };
  
    return list; // dataset (y axis) and labels (x axis) for graph
  
  };

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      
      <Text style={styleSheet.text}> Enter Month </Text>
 
        <TextInput
          placeholder="Enter Value here"
          onChangeText={item => setInputData1(item.toString()) }
          style={styleSheet.textInput} />

      <Button onPress={() => setArr1((arr1) => [...arr1, input1.toString()])} // the function adds the input value to the end of the existing array
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

      <Button onPress={() => setFlag(true)} // flag is set to true once graph arrays are updated from the update function
         title={'graph'} />
      

      <Text>
        
        </Text>

    <LineChart
    data={flag ? Update(arr1, arr2) : {
  
      labels: x,
      datasets: [
        {
          data: y
        }
      ],
    
    }} // if flag is true, then the graph arrays are used as the graph data otherwise the initial empty arrays are used
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
