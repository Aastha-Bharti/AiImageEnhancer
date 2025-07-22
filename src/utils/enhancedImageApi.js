import axios from "axios"

const API_KEY = import.meta.env.VITE_IMG_API_KEY
const BASE_URL='https://techhk.aoscdn.com'
console.log("API_KEY:", API_KEY);

export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file)
        //console.log("image uploaded successfully, taskID:" , taskId)

        const enhancedImageData = await PollForEnchancedImage(taskId)

        return enhancedImageData
    
    } catch (error) {
        console.log("Error enhancing image: ", error.message)
    }
}

const uploadImage =async(file) => {

    const formData = new FormData()
    formData.append("image_file",file)

    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type" : 'multipart/form-data',
            "X-API-KEY" : API_KEY
        }
    })

    if(!data?.data?.task_id){
        throw new Error("Failed to upload image ! Task ID not found.")
    }

    return data.data.task_id
}

const fetchEnhancedImage =async(taskId) => {
    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY" : API_KEY
        }
    })

    if(!data?.data){
        throw new Error("Failed to fetch enhanced image.Image not found!")
    }
    return data.data
    
}

const PollForEnchancedImage =async(taskId, retries =0) => {
    const result = await fetchEnhancedImage(taskId)

    if(result.state === 4){
        console.log("Processing...")

        if(retries >=20){
            throw new Error("Maximum tries reached. Please try again later.")
        }

        await new Promise((resolve) => setTimeout(resolve,2000))

        return PollForEnchancedImage(taskId,retries+1)
    }
    console.log("enhanced img:",result)
    return result
    
}

//{status: 200, message: 'success',
//task_id:"7ca9cbba-63c2-4d4d-8f25-1cc2f1693daa"
