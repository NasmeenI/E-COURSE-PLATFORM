import CreateButton from "../../components/button/CreateButton";

export default function CreateAssignment({onTitleChange ,onTextChange ,assignmentText , assignmentTitle}) {
  return (
    <div className="flex flex-col">
      <span className="font-primary text-[20px]">New Assignment :</span>
      <textarea
        className="bg-[#cccccc] my-[20px] p-[10px] font-secondary resize-none"
        placeholder="Assignment Name"
        rows={2}
        value={assignmentTitle}
        onChange={onTitleChange}
      ></textarea>
      <textarea
        className="bg-[#cccccc]  p-[10px] font-secondary resize-none"
        placeholder="Details"
        rows={6}
        value={assignmentText}
        onChange={onTextChange}
      ></textarea>
      <CreateButton text={"Add File Heres"} />
    </div>
  );
}
