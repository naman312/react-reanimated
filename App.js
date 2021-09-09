/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Animated, { useSharedValue,  useAnimatedStyle, withSpring} from 'react-native-reanimated';

const HANDLE_WIDTH = 20;

const App=()=>{
  const sliderWidth=useSharedValue(0);
  const progress=useSharedValue(0);

  const animatedHandleStyle=useAnimatedStyle(()=>{
    return {
      transform: [{translateX: progress.value - HANDLE_WIDTH/2}],
    }
  })
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      progress.value=withSpring(Math.random()*sliderWidth.value);
    },1000)
    return ()=>{
      clearInterval(interval);
    }

  },[])

  return (
    <View
    style={{
      flex: 1,
      backgroundColor: "blue",
      justifyContent: "flex-end",
      borderRadius: 10,
    }}
    onLayout={(e) => {
      sliderWidth.value = e.nativeEvent.layout.width;
    }}
  >
    <Animated.View
      style={[
        { height: 100,
          width: HANDLE_WIDTH,
          backgroundColor: 'red',
          borderRadius: 10,
          position: "absolute",
          bottom: 20,
          top: 520,
        },
        animatedHandleStyle,
      ]}
    />
  </View>
  )


}



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

export default App;
