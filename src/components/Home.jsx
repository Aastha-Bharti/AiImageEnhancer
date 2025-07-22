import { useState } from 'react'
import ImagePreview from './ImagePreview.jsx'
import ImageUpload from './ImageUpload.jsx'
import { enhancedImageAPI } from '../utils/enhancedImageApi.js'

const Home = () => {

  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadImageHandler = async(file) => {
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)

    //Calling API to enhance the image
    try {
      const enhancedURL = await enhancedImageAPI(file)
      setEnhancedImage(enhancedURL)
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      alert("Error while enhancing the image.Please try again later.")
    }

  }

  return (
    <>
        <ImageUpload uploadImageHandler= {uploadImageHandler}/>
        <ImagePreview 
        loading= {loading}
        Enhanced = {enhancedImage?.image}
        Uploaded = {uploadImage}
        />
    </>
  )
}

export default Home