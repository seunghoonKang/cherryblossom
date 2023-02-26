import { MouseEvent } from "react";
import {MdOutlineCancel} from 'react.'

type CustomTypes = 'background' | 'charactor' | 'sticker';
type DisplayProps = {
  selectedItem: CustomTypes;
  selectedBackground: number | null;
  selectedCharacter: number | null;
  selectedSticker: number | null;
  isTextEmpty: boolean;
}

export default function Display(props: DisplayProps) {
  const {
    selectedItem,
    selectedBackground,
    selectedCharacter,
    selectedSticker,
    isTextEmpty
  } = props;
  const handlerDeleteItem = (e: MouseEvent) => {
    e.stopPropagation();  // click event가 버블링 되어 handlerClickDisplay가 호출되는 것을 방지
    e.target.parentNode.remove();
  }
  const handlerClickDisplay = (e: MouseEvent) => {
    const displayRect = document.querySelector('#display')?.getBoundingClientRect(); 
    
    const displayLeft = displayRect?.left; // display의 시작 left, top 좌표 값은 기기마다 달라짐
    const displayTop = displayRect?.top;
    const offsetX = e.clientX - displayLeft; // offset은 display 내에서의 클릭 좌표 값이기 때문에 항상 같음
    const offsetY = e.clientY - displayTop;
    
    
    const selectedItemPath = `/images/background/0.jpeg`;
    // const selectedItemPath = `/images/${selectedItem}/${(selectedBackground || selectedCharacter || selectedSticker)}`;  // 확장자까지 명시해줘야함
    const item = document.createElement('div');
    const cancelBtn = document.createElement('div');
    const img = document.createElement('img');

    cancelBtn.innerText = 'X';
    cancelBtn.addEventListener('click', e => handlerDeleteItem(e));
    
    item.setAttribute('style', 'position:absolute;');
    item.style.left = displayLeft + offsetX + 'px';
    item.style.top = displayTop + offsetY + 'px';
    item.style.transform = 'translate(-50%,-50%)';
    
    img.setAttribute('width', '30px');
    img.setAttribute('src', selectedItemPath);

    item.appendChild(cancelBtn);
    item.appendChild(img);
    document.querySelector('#display')?.appendChild(item);

    // session에 좌표, selectedItem 저장 로직
  }
  return <div className="w-full flex flex-col items-center">
    <div>dsfs</div>
    <div>dsfs</div>
    <div>dsfs</div>
    <div>dsfs</div>
    <div id="display" className="w-[320px] h-[300px] border border-solid rounded-lg border-fuchsia-300 flex justify-center items-center" onClick={(e) => handlerClickDisplay(e)}>
      <textarea className="w-[220px] h-[140px] p-1 resize-none overflow-hidden" placeholder="초대장 문구를 작성해주세요">
      </textarea>
    </div>
  </div>;
}
