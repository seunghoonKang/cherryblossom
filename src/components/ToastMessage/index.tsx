import { Dispatch, SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from "next/image"

function ToastMessage(props: {
  image: StaticImageData;
  popToastMsg: boolean;
  setPopToastMsg: Dispatch<SetStateAction<boolean>>;
  message: string;
}) {
  const { image, popToastMsg, setPopToastMsg, message } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopToastMsg(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [popToastMsg, setPopToastMsg]);

  return (
    <div className="absolute">
      {popToastMsg && (
        <div className="relative left-1/2 top-1/10 translate-y-[-50%] translate-x-[-50%] mt-11 mx-30 z-10 flex justify-center items-center">
          <Image src={image} width={22} height={18} alt="img" />
          <p className="mx-3 leading-4">{message}</p>
        </div>
      )}
    </div>
  );
}

export default ToastMessage;
