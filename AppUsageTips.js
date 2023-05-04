import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SLIDES = [
  {
    id: 1,
    title: "Save Energy by Unplugging Appliances",
    text:
      "You need to make sure to unplug your toaster each night, as you would save 20% of energy and cut down on approximately 5 dollars of your electricity bill.",
    backgroundColor: "#F44336",
    color: "#FFFFFF",
  },
  {
    id: 2,
    title: "Unplug Your T.V When Not in Use",
    text:
      "Your T.V is consuming a lot of energy, so try unplugging it when you are not using it!",
    backgroundColor: "#9C27B0",
    color: "#FFFFFF",
  },
  {
    id: 3,
    title: "Use Gas Stoves Instead of Electric Ones",
    text:
      "Try alternative as using a gas stove rather than an electric one",
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