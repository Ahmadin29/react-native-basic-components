import * as React from 'react'
import { Image, ImageRequireSource, ImageSourcePropType, ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import Colors from '../config/colors';
import Text from '../text';

interface AvatarProps{
    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large',
    containerStyle:ViewStyle,
    contentContainerStyle:ViewStyle,
    rounded: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'circle',
    backgroundColor:string,
    contentTextStyle:ViewStyle,
    contentImageStyle:ImageStyle,
    text:string,
    image:ImageSourcePropType | ImageRequireSource
}

export default function Avatar(props:AvatarProps) {

    const size = {
        'x-small'   : 20,
        small       : 30,
        medium      : 50,
        large       : 70,
        'x-large'   : 90,
    }

    const rounded = {
        'x-small'   : 20,
        small       : 30,
        medium      : 50,
        large       : 70,
        'x-large'   : 90,
        circle      : 200
    }

    const fontSize = {
        'x-small'   : 7,
        small       : 12,
        medium      : 17,
        large       : 23,
        'x-large'   : 28,
    }

    const styles = StyleSheet.create({
        containerStyle:{
            width: props.size ? size[props.size] : size.medium,
            height: props.size ? size[props.size] : size.medium,
            backgroundColor:props.backgroundColor || Colors.primary,
            borderRadius:props.rounded ? rounded[props.rounded] : rounded.circle,
            justifyContent:"center",
            alignItems:"center",
        },
        contentTextStyle:{
            fontWeight:"800",
            color:'white',
            fontSize:props.size ? fontSize[props.size] : fontSize.medium,
        },
        contentImageStyle:{
            width: props.size ? size[props.size] : size.medium,
            height: props.size ? size[props.size] : size.medium,
        }
    })

    const returnImage = ()=>{
        return(
            <Image
                source={props.image}
                style={[
                    styles.containerStyle,
                    styles.contentImageStyle,
                    props.contentImageStyle
                ]}
            />
        )
    }

    const returnText = ()=>(
        <Text style={[
            styles.contentTextStyle,
            props.contentTextStyle
        ]} >{props?.text?.toUpperCase().substring(0,2)}</Text>
    )

    return(
        <View style={{
            flexDirection:"row"
        }} >
            <View style={[
                styles.containerStyle,
                props.containerStyle,
            ]} >
                <View style={[
                    props.contentContainerStyle,
                ]} >
                    {props.image ? returnImage() : returnText()}
                </View>
            </View>
        </View>
    )
}