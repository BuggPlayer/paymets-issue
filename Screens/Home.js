import React from 'react'
import CategoryItem from '../Componets/CategoryItem'
import SliderItem from '../Componets/SliderItem'
import HorizontalProductItem from '../Componets/HorizontalProductItem'
import ProductItem from '../Componets/ProductItem'
import { ScrollView } from 'react-native-gesture-handler'

const Home = (props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
       <CategoryItem  />
       <SliderItem />
       <HorizontalProductItem />
       <ProductItem />
       </ScrollView>
    )
}

export default Home
