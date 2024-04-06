import React, { useState } from "react";
import { FlatList, Dimensions, Image, ImageSourcePropType } from "react-native";

const { width, height } = Dimensions.get("window");

function Index() {
  const [banners, setBanners] = useState<ImageSourcePropType[]> ([
    { uri: "https://store.donanimhaber.com/8f/33/5a/8f335a2771b15112a3643f9ff03e02e9.jpeg" },
    { uri: "https://miro.medium.com/v2/resize:fit:1400/0*XxstDyiqWfn5IwSh" },
    { uri: "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg" },
    { uri: "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg" }
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
      data={banners}
      renderItem={({ item }) => ( 
        <Image
          source={item}
          style={{ width: width, height: height * 0.25, resizeMode: "stretch" }}
        />
      )}
    />
  );
}


export default Index;

