import { SafeAreaView, View, StyleSheet, Button } from "react-native";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import { useEffect, useReducer, useState } from "react";

export default function App() {
  const [, render] = useReducer((s) => Math.random(), 0);

  useEffect(() => {
    setInterval(() => render(), 50);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Animated.View style={styles.box} entering={FadeInLeft} />
        <Animated.Text
          entering={FadeInLeft}
          exiting={FadeOutLeft.duration(100)}
        >
          with exiting
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 24,
    gap: 20,
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "orange",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
