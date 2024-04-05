
import React from "react";
import{View, Text, Image} from "react-native"
import style from  "./style"
import { Entypo } from '@expo/vector-icons';


function index(){
    return(
        <View style={ style.headerMain}>
            <View style={style.headerOne}>
                <Image style={style.Image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
                <View style={style.headerOneView}>
                    <Text style={{fontWeight:'600',fontSize:16}}>Ev</Text>
                    <Text style={{fontWeight:'500',fontSize:11.5, color:'#6E7480', marginLeft:7, marginRight:3 }}>Askeri fırın sk. Davutpaşa mahallesi...</Text>
                    <Entypo name="chevron-right" size={22} color="black" />
                </View>

                <View style={style.headerTwo}>
                    <Text style={{fontWeight:'bold',fontSize:10, color:'#EFE3CB' }}>TVS</Text>
                    <Text style={{fontWeight:'bold',fontSize:20, color:'#EFE3CB' }}>
                    13 <Text style={{fontWeight:'bold',fontSize:16, color:'#EFE3CB' }}>dk</Text>
                    </Text>
                    
                </View>


            </View>

            <View>

 
            </View>

        </View>
    )
}

export default index