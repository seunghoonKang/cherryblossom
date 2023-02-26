import { getStorage, ref, uploadString } from 'firebase/storage';
import { app } from '@/src/lib/firebase';

import html2canvas from 'html2canvas';

export const saveImg = (id: string, filename: string) => {
  const capture: HTMLElement | null = document.querySelector(`#${id}`);

  if (capture !== null) {
    html2canvas(capture)
      .then(canvas => canvas.toDataURL(filename))
      .then(data => sendImgToFirebase(data, filename));
  }
};

const sendImgToFirebase = async (data: string, filename: string) => {
  const storage = getStorage(app);
  const storageRef = ref(storage, filename);
  await uploadString(storageRef, data, 'data_url');
};

// 사용자가 이미지를 저장하려고 할 때
const saveImgToUser = (uri: string, filename: string) => {
  let link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
};
