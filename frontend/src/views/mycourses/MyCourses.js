import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MyCoursesCard from "./MyCoursesCard";
import profile from "../mycourses/assets/profile_sample.jpg";
import LoginFirst from "../error/LoginFirst";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import CreateButton from "../../components/button/CreateButton";
import NasmeenAPI from "../../api/NasmeenAPI";
import { auth } from "../../api/firebase";
import { TailSpin } from "react-loader-spinner";
import UserAPI from "../../api/UserAPI";
import ReactPaginate from "react-paginate";

export default function MyCourses() {
  const [loadingPagesCount, setLoadingPagesCount] = useState(false);
  const [pagesCount, setPagesCount] = useState(null);

  const [loadingPage, setLoadingPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function getPagesCount() {
      if (!auth.currentUser || pagesCount) {
        return;
      }

      setLoadingPagesCount(true);
      const token = await auth.currentUser.getIdToken();
      const result = await NasmeenAPI.numberOfMyPage(token);
      console.log(result);
      setPagesCount(parseInt(result.numberOfMyPage));
      setLoadingPagesCount(false);
    }

    getPagesCount();
  }, []);

  async function getPageData() {
    console.log("pagesCount", pagesCount);
    if (pagesCount === 0) {
      console.log("pagesCount", pagesCount);
      setPageData([]);
      return;
    }

    if (!pagesCount) {
      return;
    }

    setLoadingPage(true);
    const result = await UserAPI.getMyCourse(currentPage + 1);
    console.log(result);
    setPageData(result);
    setLoadingPage(false);
  }

  useEffect(() => {
    getPageData();
  }, [currentPage, pagesCount]);

  function handlePageChange(event) {
    setCurrentPage(event.selected);
  }

  const {
    data: { user },
  } = useContext(UserContext);

  return user ? (
    <div>
      <Header />
      <div className="mt-[60px] min-h-[600px] flex flex-col bg-[#F6F5F4] w-full">
        {pagesCount === null || pageData === null ? (
          <TailSpin
            height="80"
            width="80"
            color="#2B788B"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="mx-auto mt-[15%]"
            visible={true}
          />
        ) : (
          <div className="flex flex-col items-start mb-[40px] mt-[40px] mx-[40px] bg-white">
            <span className="font-primary mt-[50px] ml-[5%] text-[32px]">
              My Courses
            </span>

            {user.type === "instructor" ? (
              <CreateButton
                path={"/mycourses/createcourse"}
                text="New Course"
              />
            ) : (
              <div></div>
            )}
            <ol className="flex flex-wrap justify-between mx-[5%]">
              {pageData.map((course) => (
                <MyCoursesCard
                  key={course.courseID}
                  courseName={course.title}
                  instructorName={course.instructorName}
                  profile={course.instructorImage}
                  annoucement={course.description}
                  courseID={course.courseID}
                />
              ))}
            </ol>

            <ReactPaginate
              forcePage={currentPage}
              pageCount={pagesCount}
              onPageChange={handlePageChange}
              nextLabel=">"
              previousLabel="<"
              className="mt-[30px] mb-[60px] flex flex-row items-center mx-auto"
              activeLinkClassName="!bg-[#2B788B] !text-[white]"
              pageLinkClassName="w-12 h-12 border-[#2B788B] border-2 font-secondary font-bold text-[16px] rounded-full flex items-center justify-center mx-[10px] bg-white text-[#2B788B]"
              nextLinkClassName="w-12 h-12 border-[#2B788B] border-2 font-secondary font-bold text-[16px] rounded-full flex items-center justify-center mx-[10px] bg-white text-[#2B788B]"
              previousLinkClassName="w-12 h-12 border-[#2B788B] border-2 font-secondary font-bold text-[16px] rounded-full flex items-center justify-center mx-[10px] bg-white text-[#2B788B]"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  ) : (
    <LoginFirst />
  );
}
