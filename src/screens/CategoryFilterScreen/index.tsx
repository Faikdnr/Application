import { useState } from "react";
import React from "react";
import { ScrollView, Text } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import { Category } from "../../models";

function index(props){
const [category , setCategory] = useState<Category>(props.route.params.category)

    return(
        <ScrollView>
            <CategoryFiltering />
        </ScrollView>


    )
}

export default index