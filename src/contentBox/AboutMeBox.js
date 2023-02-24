export function AboutMeBox(){
  
    return (
        <div className="flex flex-col justify-center items-center">
                <span className="color-main text-2xl md:text-3xl">ABOUT ME</span>
                <div className="flex flex-col text-lg md:text-xl p-4 px-0">
                    <span className="color-main">ชื่อ-นามสกุล<span className="text-white"> : ธนพล จันทร์ละออ</span></span>
                    <span className="color-main">ชื่อเล่น<span className="text-white"> : ดีน</span></span>
                    <span className="color-main">วันเกิด<span className="text-white"> : 29 / 10 / 2542</span></span>
                    <span className="color-main">สถานะทางทหาร<span className="text-white"> : ทหารกองหนุน (รด.)</span></span>
                </div>
            </div>
      );
}