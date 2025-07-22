const ImageUpload = (props) => {

   const showImageHandler = (e) => {
    const file = e.target.files[0]
    if(file){
      props.uploadImageHandler(file)
    }}

   return (
      <div className='bg-white rounded-2xl shadow-lg p-5 w-full max-w-xl  '>
        <label
        htmlFor='fileInput' 
        className='w-full block cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-all'>

            <input 
            id='fileInput' 
            type='file' 
            className='hidden'
            onChange={showImageHandler}>
            </input>

            <span className='text-md text-gray-600 font-medium'>Click here and drag image to upload</span>
        </label>
    </div>
  )
}

export default ImageUpload