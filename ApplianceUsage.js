import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const App = ({ navigation }) => {

  let [input1, setInputData1] = useState(0); // [variable, function to set value of variable] and initial value of variable in ()
  let [input2, setInputData2] = useState(0);
  let [input3, setInputData3] = useState(0);
  let [input4, setInputData4] = useState(0);
  let [input5, setInputData5] = useState(0);
  let [input6, setInputData6] = useState(0);
  let [input7, setInputData7] = useState(0);
  let [input8, setInputData8] = useState(0);

  let [flag, setFlag] = useState(false);

  var x = [""]; // used to display initial empty graph
  var y = [0];

 var arrx = ["", "Oven", "Coffee Maker", "Toaster", "Electric Water Heater", "Dishwasher", "Washing Machine", "Clothes Dryer", "Monitor"];
  var arrX = ["", "O", "CM", "T", "WH", "DW", "WM", "CD", "M"];
  // shorter x axis labels
  var arry = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // array with values which are replaced by user input
  var arrW = [0, 3000, 1500, 1100, 4000, 1800, 850, 3400, 84];
  // wattage for appliances
  var newarrx = ["", "", "", "", "", "", "", ""];
  var newarry = [0, 0, 0, 0, 0, 0, 0, 0];

  const Update = () => {

    arry[1] = input1;
    arry[2] = input2;
    arry[3] = input3;
    arry[4] = input4;
    arry[5] = input5;
    arry[6] = input6;
    arry[7] = input7;
    arry[8] = input8;

    for (let i = 0; i < arry.length; i++)
    {
      if (i <= 4)
      {
        arry[i] = (arry[i] * arrW[i] * 30) / (60 * 1000);
        // arry is graphed using values in user input arr2
        // (Wattage x Minutes Used) x 30 / (60 x 1000) = monthly usage for usage time in min
      }

      else if (i >= 5)
      {
        arry[i] = (arry[i] * arrW[i] * 30) / 1000;
        // (Wattage x Hours Used) x 30 / 1000 = monthly usage for usage time in hr
      }

      if (arry[i] == 0)
      {
        arrX[i] = ""; // does not display appliance if usage is 0
      }
    }

    for (let i = 1; i < arry.length; i++) // sets new arry without 0 at arry[0]
    {
      newarrx[i-1] = arrX[i];
      newarry[i-1] = arry[i];
    }

    var list = {

      labels: newarrx,
      datasets: [
        {
          data: newarry
        }
      ],

    }

    return list; // dataset (y axis) and labels (x axis) for graph

  }

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <ScrollView>

      <Text style={styleSheet.text}> Enter daily usage in minutes for {arrx[1]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData1(Number(item)) }
          style={styleSheet.textInput} />


      <Text>

      </Text>

      <Text style={styleSheet.text}> Enter daily usage in minutes for {arrx[2]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData2(Number(item)) }
          style={styleSheet.textInput} />


      <Text>

      </Text>

      <Text style={styleSheet.text}> Enter daily usage in minutes for {arrx[3]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData3(Number(item)) }
          style={styleSheet.textInput} />



      <Text>

      </Text>

      <Text style={styleSheet.text}> Enter daily usage in minutes for {arrx[4]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData4(Number(item)) }
          style={styleSheet.textInput} />



      <Text>

      </Text>

      <Text style={styleSheet.text}> Enter daily usage in hours for {arrx[5]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData5(Number(item)) }
          style={styleSheet.textInput} />



      <Text>

      </Text>

      <Text style={styleSheet.text}> Enter daily usage in hours for {arrx[6]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData6(Number(item)) }
          style={styleSheet.textInput} />



      <Text>

      </Text>

      <Text style={styleSheet.text}> Enter daily usage in hours for {arrx[7]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData7(Number(item)) }
          style={styleSheet.textInput} />


      <Text>

      </Text>

      <Text style={styleSheet.text}> Enter daily usage in hours for {arrx[8]} </Text>

        <TextInput
          placeholder="Enter Value (skip if not used)"
          onChangeText={item => setInputData8(Number(item)) }
          style={styleSheet.textInput} />

      <Text>

      </Text>

      <Button onPress={() => Update()}
         title={'update'} />

      <Text>

        </Text>

      <Button onPress={() => setFlag(true)} // flag is set to true once graph arrays are updated from the update function
         title={'graph'} />


      <Text>

        </Text>

    <BarChart
    data={flag ? Update() : {

      labels: x,
      datasets: [
        {
          data: y
        }
      ],

    }} // if flag is true, then the graph arrays are used as the graph data otherwise the initial empty arrays are used
    width={Dimensions.get("window").width*.88} // from react-native
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

  <Text>

  </Text>

  <Text style={styleSheet.text}>Legend</Text>
  <Text style={styleSheet.text2}>O - {arrx[1]}</Text>
  <Text style={styleSheet.text2}>CM - {arrx[2]}</Text>
  <Text style={styleSheet.text2}>T - {arrx[3]}</Text>
  <Text style={styleSheet.text2}>WH - {arrx[4]}</Text>
  <Text style={styleSheet.text2}>DW - {arrx[5]}</Text>
  <Text style={styleSheet.text2}>WM - {arrx[6]}</Text>
  <Text style={styleSheet.text2}>CD - {arrx[7]}</Text>
  <Text style={styleSheet.text2}>M - {arrx[8]}</Text>




</ScrollView>
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

  text2:{
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
    paddingBottom: 20,
    paddingLeft: 20
  },

  textInput:{
      textAlign: 'center',
      marginBottom: 20,
      marginLeft: 20,
      height: 44,
      width: '88%',
      borderWidth: 1,
      borderColor: '#4CAF50',
      borderRadius: 7,
  }

});

export default App;