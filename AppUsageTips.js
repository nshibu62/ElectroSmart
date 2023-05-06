import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

import {LogBox} from "react-native";

LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

const SCREEN_WIDTH = Dimensions.get("window").width;

const SLIDES = [
  {
    id: 1,
    title: "Save Energy by Unplugging Appliances",
    text:
      "Make sure to unplug your toaster and other standby appliances each night to save 10% more energy energy and cut down on approximately 10 dollars of your electricity bill.",
    backgroundColor: "#F44336",
    color: "#FFFFFF",
  },
  {
    id: 2,
    title: "Reduce Running Time If Possible",
    text:
      "Set your clothes dryer to run for a shorter time for some loads like delicates to save 15% more energy and and cut down on approximately 15 dollars of your electricity bill.",
    backgroundColor: "#9C27B0",
    color: "#FFFFFF",
  },
  {
    id: 3,
    title: "Alternative Electricity Rates",
    text:
      "Try different rates such as reduced rates for night time usage and use high consumption appliances at night to save up to 35% more energy and cut down on approximately 35 dollars of your electricity bill.",
    backgroundColor: "#03A9F4",
    color: "#FFFFFF",
  },
];

const Slider = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderSlides = () => {
    return SLIDES.map((slide, index) => {
      const isActive = index === activeIndex;

      return (
        <View
          key={slide.id}
          style={[styles.slide, { backgroundColor: slide.backgroundColor }]}
        >
          <Text style={[styles.slideTitle, { color: slide.color }]}>
            {slide.title}
          </Text>
          <Text style={[styles.slideText, { color: slide.color }]}>
            {slide.text}
          </Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        data={SLIDES}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={[styles.slide, { backgroundColor: item.backgroundColor }]}
          >
            <Text style={[styles.slideTitle, { color: item.color }]}>
              {item.title}
            </Text>
            <Text style={[styles.slideText, { color: item.color }]}>
              {item.text}
            </Text>
          </View>
        )}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        onSnapToItem={(index) => setActiveIndex(index)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
  },
  slideTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  slideText: {
    fontSize: 16,
    marginVertical: 20,
    paddingLeft: 20
  },
});

export default Slider;