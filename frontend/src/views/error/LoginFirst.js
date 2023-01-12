import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SignUpOrLogin from "../../components/header/SignUpOrLogin";

export default function LoginFirst() {
    return <div>
        <Header />
        <div className="bg-[#F6F5F4] w-full flex flex-col">
            <span>You need to Login First</span>
            <SignUpOrLogin />
        </div>
        <Footer />
    </div>
}