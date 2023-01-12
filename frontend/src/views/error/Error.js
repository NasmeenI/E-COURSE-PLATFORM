import { useNavigate } from "react-router-dom"

export default function Error() {
    const navigate = useNavigate();
    function returnHome() {
        navigate("/")
    }
    return <div className="flex flex-col items-center">
        <span className="font-primary text-5xl my-[50px]">Error 404: Page not found :D</span>
        <span className="font-secondary text-2xl mb-[50px]">you stu-pid, my grandma run better than your code</span>
        <button onClick={returnHome}>
            <span className="bg-[#2B788B] rounded-lg font-secondary font-extrabold text-white px-[30px] py-[10px]">Return to Homepage</span>
        </button>
    </div>
}