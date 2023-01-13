import profile_sample from "../mycourses/assets/profile_sample.jpg";
export default function StudentInfo({
  islast,
  surname,
  lastname,
  profile,
  totalScore,
  courseMaxScore,
}) {
  surname = "Kawinzaza";
  lastname = "Rattanapun007x";
  profile = profile_sample;
  totalScore = 101;
  courseMaxScore = 100;
  return (
    <div className="flex flex-col px-[5%] pt-[20px]">
      <div className="flex flex-row items-center">
        {/* Student Profile */}
        <div className="w-[50px] h-[50px] bg-[#cccccc] overflow-hidden rounded-full">
          <img src={profile} alt="sample"></img>
        </div>
        {/* Student Name */}
        <div className="w-[80%] flex flex-row ml-[10px]">
          <span className="w-[calc(50%-10px)] truncate font-secondary text-[16px]">
            {surname}
          </span>
          <span className="w-[calc(50%-10px)] truncate font-secondary text-[16px] ml-[20px]">
            {lastname}
          </span>
        </div>
        {/* Score */}
        <div className="flex flex-row items-center justify-end">
            <span className="font-primary text-[16px]">{totalScore + "/" + courseMaxScore}</span>
        </div>
      </div>

      {islast ? (
        <div className="mt-[30px]"></div>
      ) : (
        <div className="w-[full] h-[3px] bg-[#cccccc] mt-[10px]"></div>
      )}
    </div>
  );
}
