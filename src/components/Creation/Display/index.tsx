import { ChangeEvent, MouseEvent, useEffect, useRef } from "react";

type CustomTypes = 'background' | 'character' | 'sticker';
type ItemObjectType = {
  offsetX: number;
  offsetY: number;
  path: string;
}
type DisplayProps = {
  selectedItem: CustomTypes;
  selectedBackground: number | null;
  selectedCharacter: number | null;
  selectedSticker: number | null;
  isTextEmpty: boolean;
  setIsTextEmpty: (flag: boolean) => void;
}

const customTypeArr = ['background', 'character', 'sticker'];

export default function Display(props: DisplayProps) {
  const {
    selectedItem,
    selectedBackground,
    selectedCharacter,
    selectedSticker,
    isTextEmpty,
    setIsTextEmpty
  } = props;
  
  const ref = useRef();

  const handlerDeleteItem = (e: MouseEvent) => {
    e.stopPropagation();  // click event가 버블링 되어 handlerClickDisplay가 호출되는 것을 방지
    e.target.parentNode.remove();
  }
  
  const handlerClickDisplay = (e: MouseEvent) => {
    const displayRect = ref.current?.getBoundingClientRect();
    
    const displayLeft = displayRect?.left; // display의 시작 left, top 좌표 값은 기기마다 달라짐
    const displayTop = displayRect?.top;
    const offsetX = e.clientX - displayLeft; // offset은 display 내에서의 클릭 좌표 값이기 때문에 항상 같음
    const offsetY = e.clientY - displayTop;
    
    // const selectedItemPath = `/images/background/0.jpeg`;
    const selectedItemPath = `/images/${selectedItem}/${(selectedBackground || selectedCharacter || selectedSticker)}`;  // 확장자까지 명시해줘야함
    
    paintItemInDisplay(displayLeft + offsetX, displayTop + offsetY, selectedItemPath);
    
    const itemObject: ItemObjectType = {  // session에 저장할 객체
      offsetX,
      offsetY,
      path: selectedItemPath
    }
    
    const selectedItems = sessionStorage.getItem(selectedItem);
    if (selectedItems) {
      sessionStorage.setItem(selectedItem, JSON.stringify([...JSON.parse(selectedItems), itemObject]));
    } else {
      // sessionStorage.setItem(selectedItem, JSON.stringify([currCoord]));
      sessionStorage.setItem(selectedItem, JSON.stringify([itemObject]));
    }
  }

  const handlerChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {    
    if (!e.target.value.trim().length) {  // textarea에 입력이 사라졌을때
      setIsTextEmpty(true);
    } else  {  // textarea에 입력이 됐는데 isTextEmpty가 아직 false이면
      setIsTextEmpty(false);
    }
  }
  
  const paintItemInDisplay = (x: number, y: number, path: string) => {
    const item = document.createElement('div');
    const cancelBtn = document.createElement('span');
    const img = document.createElement('img');

    cancelBtn.innerText = 'X';
    cancelBtn.addEventListener('click', e => handlerDeleteItem(e));
    
    item.setAttribute('style', 'position:absolute;');
    item.classList.add('flex');
    item.classList.add('flex-col');
    item.classList.add('items-end');
    item.style.left = x + 'px';
    item.style.top = y + 'px';
    item.style.transform = 'translate(-50%,-50%)';
    
    img.setAttribute('width', '30px');
    img.setAttribute('src', path);

    item.appendChild(cancelBtn);
    item.appendChild(img);
    ref.current?.appendChild(item);
  }

  useEffect(() => {
    const displayRect = ref.current?.getBoundingClientRect();
    
    customTypeArr.forEach(customType => {  // session에 저장되어 있는 customType 배열들을 순회
      if (sessionStorage.getItem(customType)) {
        const items: ItemObjectType[] = JSON.parse(sessionStorage.getItem(customType));
        
        items.forEach(({offsetX, offsetY, path}) => {  // 배열을 순회하며 저장된 좌표, path에 맞게 paint 호출
          paintItemInDisplay(displayRect?.left + offsetX, displayRect?.top + offsetY, path);
        });
      }
    });
  }, []);

  return (
  <div className="w-full flex flex-col items-center">
    <div id="display" ref={ref} className="w-[320px] h-[300px] border border-solid rounded-lg border-fuchsia-300 flex justify-center items-center" onClick={(e) => handlerClickDisplay(e)}>
      <textarea className="w-[220px] h-[140px] p-1 resize-none overflow-hidden" onChange={e => handlerChangeTextarea(e)} placeholder="초대장 문구를 작성해주세요">
      </textarea>
    </div>
  </div>
  );
}
