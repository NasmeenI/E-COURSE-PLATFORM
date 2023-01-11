export default function MyCourseCard() {
  return (
    <li className="w-[400px] border-2 border-black my-[40px]">
      <div className="bg-white flex flex-col">
        <div className="pl-[20px] pb-[10px] w-full bg-[#2B788B] flex flex-row">
          <div className="mt-[40px] flex flex-col w-[70%]">
            <span className="font-primary truncate ">
              Course
              eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </span>
            <span className="font-secondary truncate ">
              Instructorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            </span>
          </div>
          <div className="mt-[10px] ml-[10px] h-[80px] w-[80px] rounded-full bg-slate-900"></div>
        </div>
        <div className="m-[20px] break-words line-clamp-4">
            <span>Annoucementttttttttttttttttttttttttoucementttttttttttttttttttoucementtttttttttttttttttoucementttttttttttttttoucementttttttttttttttoucementttttttttttttttoucementttttttttttttttoucementttttttttttttttoucementttttttttttttttoucementttttttttttttttoucementtttttttttttttttoucementtttttttttttttttttttttt</span>
        </div>
        
      </div>
    </li>
  );
}
