import React, { useEffect } from 'react'
import SpinerSVG from '../../assets/spinner.svg'
import Animated, { cancelAnimation, Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Loader = () => {
    const rotation = useSharedValue(0);
 
 
    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [
          {
            rotateZ: `${rotation.value}deg`,
          },
        ],
      };
    }, [rotation.value]);
  
   useEffect(() => {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: 1000,
          easing: Easing.linear,
        }),
        -1
      );
      return () => cancelAnimation(rotation);
    }, []); 
  
    return (
    <Animated.View style={animatedStyles}>
        <SpinerSVG width={24} height={24}/>
    </Animated.View>
  )
}

export default Loader