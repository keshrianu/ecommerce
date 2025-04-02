import React from 'react'
import { useParams } from 'react-router';
import { Videos } from '../Context/Data';
import { items } from '../Context/Data';
import VideoPlayer from '../Components/VideoPlayer';
import Products from '../Components/Products';

const Product_By_Category = () => {

const {cat} = useParams();

const VideoByCategory = Videos.find(vid=>vid.category.toLowerCase()=== cat.toLowerCase());
const ProductByCategory = items.filter(pro=>pro.category.toLowerCase() === cat.toLowerCase())

  return (
    <div>
      <VideoPlayer src = {VideoByCategory.url} />
      <Products  items = {ProductByCategory}/>

    </div>
  )
}

export default Product_By_Category