export default function CreateAnnouncement({onChange,announcementText}) {
  return (
    <div className="flex flex-col">
      <span className="font-primary text-[20px]">New Announcement :</span>
      <textarea
        className="bg-[#cccccc] my-[20px] p-[10px] font-secondary resize-none"
        rows={10}
        placeholder="Details"
        id = "announcementText"
        name="announcementText"
        value={announcementText}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
