// SplashScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text, Animated, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ onFinish }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in the image
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

  }, []);

  return (
    <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image resizeMode='contain' source={require('../assets/static/splash.png')} style={styles.image} />
        </Animated.View>
    </View>
  );
};

const screen = Dimensions.get("window");
const imageWidth = screen.width * 0.8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: imageWidth,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#00e9f1',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    fontSize: 18,
    color: '#00e9f1',
  },
});

export default SplashScreen;
