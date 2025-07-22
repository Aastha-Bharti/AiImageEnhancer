import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl text-gray-800 font-bold mb-2'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>Upload your image and let AI enhance it in seconds!</p>
      </div>

      <Home />

    </div>
    
  )
}

export default App