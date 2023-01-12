import AssignmentStudent from "./AssignmentStudent";

export default function InstructorScore() {
    return <div className="flex flex-col mt-[30px]">
        <span className="font-primary text-2xl">Your Students Score</span>
        <ol>
            <AssignmentStudent />
            <AssignmentStudent />
            <AssignmentStudent />
        </ol>
    </div>
}