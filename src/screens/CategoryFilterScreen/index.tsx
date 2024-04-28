import { useState } from "react"
import React from "react"
import { ScrollView, Text } from "react-native"
import CategoryFiltering from "../../components/CategoryFiltering"
import { Category } from "../../models"
import TypeFilter from "../../components/TypeFilter"
import ProductContainer from "../../components/ProductsContainer"

function index(props){
const [category , setCategory] = useState<Category>(props.route.params.category)

    return(
        <ScrollView>
            <CategoryFiltering category= {category} />
            <TypeFilter/>
            <ProductContainer/>
        </ScrollView>


    )
}

export default index
