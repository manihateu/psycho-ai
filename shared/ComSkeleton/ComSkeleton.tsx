import { useEffect } from 'react'
import { StyleSheet } from 'react-native'

import Animated, {
  withTiming,
  withRepeat,
  withSequence,
  useSharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

const Skeleton = () => {
  const opacity = useSharedValue(1)

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.3, {
          duration: 1000
        }),
        withTiming(1, {
          duration: 1000
        })
      ),
      Infinity,
      true
    )
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })

  return <Animated.View style={[styles.skeleton, animatedStyle]} />
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#CFCFCF",
    width: 70,
    height: 20,
    borderRadius: 20,
  }
})

export default Skeleton