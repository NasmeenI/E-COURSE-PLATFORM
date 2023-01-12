import profile_sample from "../mycourses/assets/profile_sample.jpg";
export default function AssignmentStudent() {
  const scored = true;
  const maxScore = 10;
  return (
    <div className="bg-white py-[20px] px-[5%] rounded-lg mt-[20px] flex flex-col">
      {/* Scoring */}
      <div className="flex flex-row items-center">
        <span
          className={`py-[5px] px-[15px] font-secondary font-extrabold rounded-full mb-[10px] ${
            scored ? "bg-green-500" : "bg-red-600"
          }`}
        >
          {scored ? "Scored" : "Unscore"}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between">
        {/* Student Img */}
        <div className="flex flex-row items-center">
          <div className=" w-[50px] h-[50px] ml-[15px]  rounded-full overflow-hidden">
            <img src={profile_sample} alt="profile"></img>
          </div>
          <span className="font-secondary ml-[25px] truncate">
            StudentSurname
          </span>
          <span className="font-secondary ml-[10px] truncate">
            StudentLastname
          </span>
        </div>

        <div className="w-[100px]">
          <span className="w-[50px] font-primary text-right">/{maxScore}</span>
        </div>
      </div>

      <span>hi</span>
    </div>
  );
}
