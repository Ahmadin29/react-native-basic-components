import * as React from 'react'
import { FlatList, TouchableOpacity, View } from "react-native";
import { Icon } from 'react-native-elements';
import Colors from '../config/colors';
import Text from "../text";
import BottomSheet from 'react-native-raw-bottom-sheet';
import Button from '../button';
import layouts from '../config/layouts';

interface SelectProps{
    label?          :string,
    selected?       :string,
    message?        :string,
    placeholder?    :string,
    data?           :any,
    dataKey?        :any,
    keyLabel?       :any,
    onSelect        :(any:any)=>void,
}

export default function Select(props:SelectProps) {

    const [selected,setSelected] = React.useState(props.selected);
    const [data,setData] = React.useState(props.data)

    React.useEffect(()=>{
        setSelected(props.selected)
    },[props.selected])

    React.useEffect(()=>{
        setData(props.data)
    },[props.data])

    const SelectReff = React.useRef<any>(null);

    const SelectSheet = ()=>{
        return(
            <BottomSheet
                ref={SelectReff}
                height={layouts.window.height - 100}
                customStyles={{
                    container:{
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                    }
                }}
            >
                <View style={{
                    alignItems:"center",
                    padding:15,
                }} >
                    <Text weight="SemiBold">Pilih Salah Satu</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity style={{
                                paddingVertical:15,
                                borderBottomWidth:1,
                                borderBottomColor:Colors.grey1,
                                flexDirection:"row",
                                alignItems:"center",
                            }} onPress={()=>{
                                props.onSelect(item)
                                setSelected(item[props.dataKey])
                            }} >
                                <Icon
                                    name={selected == item[props.dataKey] ? 'md-radio-button-on' : 'md-radio-button-off'}
                                    type="ionicon"
                                    tvParallaxProperties
                                    containerStyle={{
                                        marginRight:10,
                                    }}
                                    color={selected == item[props.dataKey] ? Colors.primary : Colors.grey1}
                                />
                                <Text>{item[props.keyLabel]}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    contentContainerStyle={{
                        paddingHorizontal:15,
                    }}
                />
                <View style={{
                    padding:15,
                }} >
                    <Button
                        label="Pilih"
                        onPress={()=>{
                            SelectReff.current.close();
                        }}
                    />
                </View>
            </BottomSheet>
        )
    }

    return(
        <View style={{
            marginBottom:10,
        }} >
            <TouchableOpacity onPress={()=>{
                SelectReff?.current?.open();
            }} >
                {
                    props.label &&
                    <Text size={10} weight="Medium" >{props.label}</Text>
                }
                <View style={{
                    borderBottomWidth:1,
                    borderBottomColor:Colors.grey1,
                    paddingVertical:7,
                    marginBottom:5,
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                }} >
                    <Text color='textSecondary' >{props.selected ? props.selected : props.placeholder ? props.placeholder : 'Pilih salah satu'}</Text>
                    <Icon
                        name='md-chevron-forward'
                        type='ionicon'
                        tvParallaxProperties
                        size={15}
                    />
                </View>
                {
                    props.message &&
                    <Text size={10} color="textSecondary" >{props.message}</Text>
                }
            </TouchableOpacity>

            {SelectSheet()}
        </View>
    )
}