import * as React from 'react';
import { View } from 'react-native';
import {Button, Text, Divider, Avatar,} from './src'

export default function App(params) {
  return(
    <View style={{
      padding:15,
    }} >
      <Avatar
        text='1'
        size="x-small"
      />
      <Avatar
        text='As'
        size="small"
      />
      <Avatar
        text='As'
        size="medium"
      />
      <Avatar
        text='As'
        size="large"
      />
      <Avatar
        text='As'
        size="x-large"
      />
    </View>
  )
}