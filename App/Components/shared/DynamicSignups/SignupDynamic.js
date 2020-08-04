import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './SignupDynamicStyles'
import PropTypes from 'prop-types'
import { Images } from 'App/Theme'
import ButtonSignup from './ButtonSignup'

export const SignupDynamic = ({ page, onSignup }) => {
  return (
    <View style={styles.container}>
      {page === 'Profile' ? (
        <View style={styles.signupWrap}>
          <Image style={styles.img} resizeMode="contain" source={Images.profileSignup} />
          <Text style={styles.txt}>Signup for an account</Text>
          <ButtonSignup title="Sign up" onPress={onSignup} />
        </View>
      ) : (
        <View style={styles.signupWrap}>
          <Image style={styles.img} resizeMode="contain" source={Images.activitySignup} />
          <Text style={styles.txt}>Messages and notifications will appear here</Text>
          <ButtonSignup title="Sign up" onPress={onSignup} />
        </View>
      )}
    </View>
  )
}

SignupDynamic.propTypes = {
  page: PropTypes.string.isRequired,
  onSignup: PropTypes.func.isRequired,
}

export default SignupDynamic
