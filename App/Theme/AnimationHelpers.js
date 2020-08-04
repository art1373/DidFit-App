export const useBounce = (scrollY, inputeR, outputR) => {
  const translateY = scrollY.interpolate({
    inputRange: [0, inputeR],
    outputRange: [0, outputR],
  })

  return translateY
}
