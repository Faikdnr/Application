import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./style";
import { Entypo } from '@expo/vector-icons';

function Index() {
  return (
    <View style={style.headerMain}>
      <TouchableOpacity style={style.headerOne}>
        <Image
          style={style.Image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={style.headerOneView}>
          <Text style={{ fontWeight: '600', fontSize: 16, color: '#840000' }}>Ev</Text>
          <Text style={{ fontWeight: '500', fontSize: 11.5, color: '#840000', marginLeft: 7, marginRight: 3 }}>Askeri fırın sk. Davutpaşa mahallesi...</Text>
          <Entypo name="chevron-right" size={22} color="#840000" />
        </View>

        <View style={[style.headerTwo, { alignItems: 'flex-end' }]}>
          <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#EFE3CB' }}>TVS</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#EFE3CB',  marginLeft: 10 }}>
            13 <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#EFE3CB',marginLeft: 20}}>dk</Text>
          </Text>
        </View>
      </TouchableOpacity>

      <View>
            
      </View>

    </View>
  );
}

export default Index;
