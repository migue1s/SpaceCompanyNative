import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ResourceSummary = () => {
  return (
    <View>
      <Text>
        Metal
      </Text>
      <Text>
      Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.
      </Text>
      <Text>
        Time until full
      </Text>
      <Text>SOME RADIO BUTTON HERE</Text>
      <TouchableOpacity>
        <Text>Gain 1</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResourceSummary

const styles = StyleSheet.create({})
