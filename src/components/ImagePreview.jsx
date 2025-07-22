// // import Loading from './Loading.jsx'

// // const ImagePreview = (props) => {
// //   return (
// //     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
      
// //       {/* Original Image */}
// //       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
// //         <h2 className="text-l font-semibold text-center bg-gray-800 text-white py-2">Original Image</h2>
// //         <div className="flex justify-center items-center h-72 bg-gray-100 overflow-hidden">
// //           {props.Uploaded ? (
// //             <img
// //               src={props.Uploaded}
// //               alt="Uploaded"
// //               className="max-h-full max-w-full object-contain"
// //             />
// //           ) : (
// //             <span className="text-gray-500">No Image Selected</span>
// //           )}
// //         </div>
// //       </div>

// //       {/* Enhanced Image */}
// //        {/* Enhanced Image Section */}
// // <div className="bg-white shadow-lg rounded-xl overflow-hidden">
// //   <h2 className="text-l font-semibold text-center bg-blue-800 text-white py-2">Enhanced Image</h2>
  
// //   {/* Image Preview Box */}
// //   <div className="flex justify-center items-center h-72 bg-gray-100 overflow-hidden">
// //     {props.loading ? (
// //       <Loading />
// //     ) : props.Enhanced ? (
// //       <img
// //         src={props.Enhanced}
// //         alt="Enhanced"
// //         className="max-h-full max-w-full object-contain"
// //       />
// //     ) : (
// //       <span className="text-gray-500">No Enhanced Image</span>
// //     )}
// //   </div>

// //   {/* Download Button - only when enhanced image is ready and not loading */}
// //   {props.Enhanced && !props.loading && (
// //     <div className="text-center py-4">
// //       <a
// //         href={props.Enhanced}
// //         download="enhanced-image.jpg"
// //         className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200"
// //       >
// //         Download Image
// //       </a>
// //     </div>
// //   )}
// // </div>


// //       {/* <div className="bg-white shadow-lg rounded-xl overflow-hidden">
// //         <h2 className="text-l font-semibold text-center bg-blue-800 text-white py-2">Enhanced Image</h2>
// //         <div className="flex justify-center items-center h-72 bg-gray-100 overflow-hidden">


// //           {props.loading ? (
// //             <Loading />
// //           ) : props.Enhanced ? (
// //             <img
// //               src={props.Enhanced}
// //               alt="Enhanced"
// //               className="max-h-full max-w-full object-contain"
// //             />
// //           ) : (
// //             <span className="text-gray-500">No Enhanced Image</span>
// //           )}
// //         </div>
// //       </div> */}

// //     </div>
// //   )
// // }

// // export default ImagePreview

import Loading from './Loading.jsx'

const ImagePreview = (props) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = props.Enhanced;
    link.download = 'enhanced-image.png';
    link.click();
  };

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Original Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <h2 className="text-l font-semibold text-center bg-gray-800 text-white py-2">Original Image</h2>
          {props.Uploaded ? (
            <img src={props.Uploaded} alt='' className="w-full h-[300px] object-contain" />
          ) : (
            <div className="flex justify-center items-center h-[300px] bg-gray-200">
              No Image selected
            </div>
          )}
        </div>

        {/* Enhanced Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <h2 className="text-l font-semibold text-center bg-blue-800 text-white py-2">Enhanced Image</h2>
          {props.Enhanced && !props.loading ? (
            <img src={props.Enhanced} alt='' className="w-full h-[300px] object-contain" />
          ) : props.loading ? (
            <Loading />
          ) : (
            <div className="flex justify-center items-center h-[300px] bg-gray-200">
              No Enhanced Image
            </div>
          )}
        </div>
      </div>

      {/* Download Button - aligned below both image cards */}
      {props.Enhanced && !props.loading && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
