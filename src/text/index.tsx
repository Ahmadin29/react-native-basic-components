import * as React from "react";
import { Text as TextNative, TextStyle } from "react-native";

interface TextProps {
  children?:any,
  weight?  : 'Regular' | 'Bold' | 'Thin' | 'Medium' | 'SemiBold',
  family?  : string,
  size?    : number,
  elipsis? : number,
  style?   : TextStyle[] | TextStyle,
  color?   : string,
  copy?    : boolean,
}

const Text = (props : TextProps) =>{
  let family = "Sans-Serif";
  let weight = "Regular";

  if (props.family) {
    family = props.family;
  }

  if (props.weight) {
    weight = props.weight;
  }

  let font = family + "-" + weight;

  return (
    <TextNative
      {...props}
      numberOfLines={props.elipsis ? props.elipsis : 0}
      style={[
        {
          fontSize: props.size ? props.size : 14,
          fontFamily: font,
          color: props.color || "#000000",
        },
        props.style,
      ]}
      selectable={props.copy ? true : false}
    />
  );
}

export default Text;