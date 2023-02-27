export const copyLink = async (imageName: string) => {
  try {
    await navigator.clipboard.writeText(`${window.location.origin}/recieved/${imageName}`);
    alert('링크를 복사했습니다.');
  } catch (error) {
    // Set토스트로 변경예정
    alert('링크 복사에 실패했어요.');
  }
};
