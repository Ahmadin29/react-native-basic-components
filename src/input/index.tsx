import * as React from 'react';
import { KeyboardTypeOptions, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Text from "../text";
import Colors from "../config/colors";
import { Icon } from 'react-native-elements';

interface InputProps {
    containerStyle? : ViewStyle,
    inputStyle?     : ViewStyle,
    labelStyle      : TextStyle,
    messageStyle    : TextStyle,
    
    label?          : string,
    message?        : string,
    value?          : string,
    icon?           : any,
    placeholder     : string,
    color?          : 'primary' | 'text' | 'textSecondary' | 'success' | 'danger' | 'warning' | 'white',

    onChangeText    : (e:any)=>void,
    disabled        : boolean,
    keyboardType    : KeyboardTypeOptions,

    inputType?      : 'password' | undefined,
    multiline?      : boolean,
}

export default function Input(props:InputProps) {

    const [eye,setEye] = React.useState(false);
    const [focus,setFocus] = React.useState(false);

    return(
        <View style={[
            props.containerStyle
        ]} >
            {
                props.label && <Text style={[props.labelStyle,{}]} weight="Medium" color={focus ? Colors.primary : props.color ? props.color : Colors.text} size={10} >{props.label}</Text>
            }
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                borderBottomWidth:1,
                borderBottomColor:focus ? Colors.primary : props.color ? Colors[props.color] : Colors.grey1,
            }} >
                {props.icon &&
                <View style={{
                    padding:10,
                    paddingHorizontal:0,
                    marginRight:10,
                    maxWidth:30,
                }} >
                    {props.icon}
                </View>}
                <TextInput
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={props.placeholder}
                    style={[
                        props.inputStyle,
                        {
                            paddingBottom:5,
                            paddingTop:0,
                            paddingHorizontal:0,
                            fontFamily:'poppins-regular',
                            color:props.disabled ? Colors.textSecondary : Colors.text,
                            flex:1,
                        }
                    ]}
                    autoFocus
                    onFocus={()=>{
                        setFocus(true)
                    }}
                    multiline={props.multiline}
                    onBlur={()=>{
                        setFocus(false)
                    }}
                    secureTextEntry={props.inputType == 'password' && !eye ? true : false}
                    keyboardType={props.keyboardType}
                    editable={!props.disabled}
                />
                {
                    props.inputType == 'password' &&
                    <TouchableOpacity onPress={()=>{
                        setEye(!eye)
                    }} >
                        <Icon name={eye ? 'md-eye-off-outline' : 'md-eye-outline'} type='ionicon' tvParallaxProperties />
                    </TouchableOpacity>
                }
            </View>
            {
                props.message &&
                <View style={{
                    marginTop:5,
                }} >
                    <Text size={10} style={[props.messageStyle,{}]} color={props.color ? props.color : "textSecondary"} >{props.message}</Text>
                </View>
            }
        </View>
    )
}