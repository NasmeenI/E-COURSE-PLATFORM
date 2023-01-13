import profile_sample from "../mycourses/assets/profile_sample.jpg";
import File from "../lecturePage/File";
export default function AssignmentStudent() {
  const isscored = false;
  const score = 100;
  const maxScore = 100;
  function submitScore() {
    return;
  }
  return (
    <div className="bg-white py-[20px] px-[5%] rounded-lg mt-[20px] flex flex-col">
      {/* Scoring */}
      <div className="flex flex-row items-center">
        <span
          className={`py-[5px] px-[15px] font-secondary font-extrabold rounded-full mb-[10px] ${
            isscored ? "bg-green-500" : "bg-red-600"
          }`}
        >
          {isscored ? "Scored" : "Unscore"}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between">
        {/* Student Img */}
        <div className="flex flex-row items-center w-[80%]">
          <div className=" w-[50px] h-[50px] ml-[15px]  rounded-full overflow-hidden">
            <img src={profile_sample} alt="profile"></img>
          </div>
          <span className="font-secondary ml-[25px] truncate w-[30%]">
            StudentSurname
          </span>
          <span className="font-secondary ml-[10px] truncate w-[30%]">
            StudentLastname
          </span>
        </div>

        <div className="flex flex-row items-center justify-end w-[20%] ">
          {isscored ? (
            <span className="font-primary text-right text-green-500 w-[50%]">
              {score}
            </span>
          ) : (
              <input type="text" className="w-[50%] border-b-[#cccccc] border-[2px]"></input>
            
          )}
          <span className="font-primary text-left w-[50%]">/{maxScore}</span>
        </div>
      </div>

      {/* Student Attachment */}
      <ol>
        <File fileName="1324.pdf" filePath="1234" />
        <File fileName="1324.pdf" filePath="1234" />
      </ol>

      {/* Submit Score */}
      {isscored ? (
        <div></div>
      ) : (
        <button onClick={submitScore} className="flex justify-end mt-[10px]">
          <span className="py-[5px] px-[15px] bg-[#2B788B] rounded-lg text-white font-primary">
            Submit
          </span>
        </button>
      )}
    </div>
  );
}
