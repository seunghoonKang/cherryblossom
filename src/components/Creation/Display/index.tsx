export default function Display() {  
  return <div className="w-full flex justify-center">
    <div className="w-[320px] h-[300px] border border-solid rounded-lg border-fuchsia-300 flex justify-center items-center">
      <textarea className="w-[220px] h-[140px] p-1 resize-none " placeholder="초대장 문구를 작성해주세요">
      </textarea>
    </div>
  </div>;
}
