import CreateButton from "../../components/button/CreateButton";

export default function CreateLecture({onTitleChange ,onTextChange ,lectureText , lectureTitle}) {
  return (
    <div className="flex flex-col">
      <span className="font-primary text-[20px]">New Lecture :</span>
      <textarea
        className="bg-[#cccccc] my-[20px] p-[10px] font-secondary resize-none"
        placeholder="Lecture Name"
        rows={2}
        value={lectureTitle}
        onChange={onTitleChange}
      ></textarea>
      <textarea
        className="bg-[#cccccc]  p-[10px] font-secondary resize-none"
        placeholder="Details"
        rows={6}
        value={lectureText}
        onChange={onTextChange}
      ></textarea>
      <CreateButton text={"Add File Heres"} />
    </div>
  );
}
