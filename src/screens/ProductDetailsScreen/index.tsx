import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView, ActivityIndicator} from "react-native"
import ImageCarousel from "../../components/ImageCarousel"
import DetailBox from "../../components/DetailBox"
import DetailProperty from "../../components/DetailProperty"
import CardButton from "../../components/CardButton"
import { Product } from '../../models'

function index( props) {
  const [product,setProduct] = useState<Product>()
  useEffect(() => {
    setProduct(props.route.params.product)
  
  },[])

  if(!product)
  {
    return <ActivityIndicator color={"#5D3EBD"} />
  }
  return (
    <View style={{flex:1}}>
   <ScrollView style={{flex:1,backgroundColor:'#f5f5f5'}}> 
      <ImageCarousel images={product.images} />
      <DetailBox price={product.price} name={product.name} quantity={product.miktar} />
      <Text style={{paddingHorizontal:10,paddingVertical:13,color:'#808B99',fontWeight:'600',fontSize:14}}>
        Detaylar
      </Text>
      <DetailProperty />
    </ScrollView>
     <CardButton product={product} />
    </View>
 
  )
}

export default index