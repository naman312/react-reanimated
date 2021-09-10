/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React,{useEffect} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TouchableOpacity,
//   Image
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Animated, { useSharedValue,  useAnimatedStyle, withSpring} from 'react-native-reanimated';

// const HANDLE_WIDTH = 20;

// const App=()=>{
//   const sliderWidth=useSharedValue(0);
//   const progress=useSharedValue(0);

//   const animatedHandleStyle=useAnimatedStyle(()=>{
//     return {
//       transform: [{translateX: progress.value - HANDLE_WIDTH/2}],
//     }
//   })
  
//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       progress.value=withSpring(Math.random()*sliderWidth.value);
//     },1000)
//     return ()=>{
//       clearInterval(interval);
//     }

//   },[])

//   return (
//     <View
//     style={{
//       flex: 1,
//       backgroundColor: "blue",
//       justifyContent: "flex-end",
//       borderRadius: 10,
//     }}
//     onLayout={(e) => {
//       sliderWidth.value = e.nativeEvent.layout.width;
//     }}
//   >
//     <Animated.View
//       style={[
//         { height: 100,
//           width: HANDLE_WIDTH,
//           backgroundColor: 'red',
//           borderRadius: 10,
//           position: "absolute",
//           bottom: 20,
//           top: 520,
//         },
//         animatedHandleStyle,
//       ]}
//     />
//   </View>
//   )


// }



// const App= () => {
//   const randomNumber = useSharedValue(1000);

//   const style = useAnimatedStyle(() => {
//     return { width: randomNumber.value, height: randomNumber.value };
//   });
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
    
//       <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         backgroundColor: '#7CA1B4',
//       }}
//     >
//       <TouchableOpacity
//         onPress={() => {
//           console.log('hey i am in ', withSpring(Math.random() * 350))
//           randomNumber.value = withSpring(Math.random() * 350);  
//           console.log('hey ', randomNumber.value)
//         }}
//       >
//         <Animated.Image
//           source={require('./pic.png')}
//           resizeMode="contain"
//           style={style}
//         />
//       </TouchableOpacity>
//     </View>
  
//   );  
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });



import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.spring(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true

    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default App;




