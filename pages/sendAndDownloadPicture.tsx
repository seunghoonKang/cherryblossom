import { getStorage, ref, getDownloadURL, uploadString } from 'firebase/storage';

import { app } from '@/src/lib/firebase';
import { useState } from 'react';

import ReactImageUploading from 'react-images-uploading';
import Image from 'next/image';

export default function SendDownloadPicture() {
  const [images, setImages] = useState<any>();
  const uploadImage = async () => {
    if (images[0]?.file) {
      const storage = getStorage(app);
      const storageRef = ref(storage, `${images[0].file.name || images[0].imageName}`);

      await uploadString(storageRef, images[0].data_url, 'data_url');
      console.log(images);
    }
  };

  const onImageChange = (imageList: any, _addUpdateIndex: any) => {
    try {
      if (imageList.length) {
        setImages([{ ...imageList[0], imageName: imageList[0]?.file.name }]);
      } else {
        setImages([]);
      }
    } catch (error) {
      alert('Picture size is too big.');
    }
  };

  const imageDownload = async () => {
    const storage = getStorage();
    try {
      const url = await getDownloadURL(ref(storage, 'invitation.jpg'));
      console.log('downloaded image url', url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ReactImageUploading value={images} onChange={onImageChange} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red', marginTop: '1rem' } : { marginTop: '1rem' }}
              onClick={onImageUpload}
              {...dragProps}
              className="my-1"
            >
              {' '}
              Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image src={image.data_url} alt="uploaded-image" width={300} height={300} />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
      <button onClick={uploadImage} className="text-3xl font-bold underline w-40 h-20">
        사진 보내기
      </button>

      <button onClick={imageDownload}>사진 다운로드</button>
    </>
  );
}
