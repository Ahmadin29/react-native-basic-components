import * as React from "react";
import { View } from "react-native";

interface DividerProps {
    height:number,
    color:string
}

export default function Divider(props:DividerProps) {
    return(
        <View style={{
            borderWidth:props.height || 0.5,
            borderColor:props.color || "#E7E7E7",
        }} ></View>
    )
}