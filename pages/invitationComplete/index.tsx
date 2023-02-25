import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function InviTationComplete() {
  const [isPullOut, setIsPullOut] = useState(false);

  setTimeout(() => {
    setIsPullOut(true);
  }, 1000);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[360px] h-[640px]">
        <div className="w-[450px] mt-[250px] h-[400px] absolute  bg-red-500"></div>
        <div className="mt-[-200px] absolute w-0 h-0 border-solid border-t-transparent border-r-transparent border-l-transparent border-b-red-600 border-b-[225px] border-t-[225px] border-r-[225px] border-l-[225px] z-1 animate-[envelope_500ms_linear] origin-bottom"></div>

        {isPullOut && (
          <div
            className={`absolute w-full max-w-[450px] flex justify-center items-center bg-blue-500 animate-[pull-out_500ms_linear]
                }`}
          >
            <div>
              <Image src="/성택미모티콘.png" alt="image" width="300" height="300" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white flex justify-center">
              <h2 className="text-2xl font-bold mb-2">Invited!</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
