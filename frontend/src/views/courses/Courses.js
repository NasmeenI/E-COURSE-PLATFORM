import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CourseCard from "./CourseCard";
import { TailSpin } from "react-loader-spinner";
import NasmeenAPI from "../../api/NasmeenAPI";
import ReactPaginate from "react-paginate";
import pic5 from "../courses/assets/pic5.png";
import { UserContext } from "../../contexts/UserContext";
import { auth } from "../../api/firebase";

export default function Courses() {
  const [loadingTags, setLoadingTags] = useState(false);
  const [tags, setTags] = useState(null);
  const [currentTag, setCurrentTag] = useState(0);

  const [loadingPagesCount, setLoadingPagesCount] = useState(false);
  const [pagesCount, setPagesCount] = useState(null);

  const [loadingPage, setLoadingPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageData, setPageData] = useState(null);

  const [tryingToEnroll, setTryingToEnroll] = useState(false);

  const {
    data: { user },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTags() {
      if (tags) {
        return;
      }

      setLoadingTags(true);
      const result = await NasmeenAPI.getAllTag();
      setTags(result);
      setLoadingTags(false);
    }

    getTags();
  }, []);

  useEffect(() => {
    async function getPagesCount() {
      if (!tags) {
        return;
      }

      setLoadingPagesCount(true);
      const result = await NasmeenAPI.numberOfPage(tags[currentTag]);
      setPagesCount(parseInt(result.numberOfPage));
      setLoadingPagesCount(false);
    }

    getPagesCount();
  }, [tags, currentTag]);

  async function getPageData() {
    if (!pagesCount) {
      return;
    }

    setLoadingPage(true);
    let result;
    if (user?.type === "student") {
      const token = await auth.currentUser.getIdToken();
      result = await NasmeenAPI.readAllCoursesStudent(
        token,
        tags[currentTag],
        currentPage + 1
      );
      console.log(result);
    } else {
      result = await NasmeenAPI.readAllCoursesNonStudent(
        tags[currentTag],
        currentPage + 1
      );
      console.log(result);
    }
    setPageData(result.AllCourses);
    setLoadingPage(false);
  }

  useEffect(() => {
    getPageData();
  }, [currentPage, pagesCount, currentTag]);

  function handlePageChange(event) {
    setCurrentPage(event.selected);
  }

  return (
    <div>
      <Header />
      {/* body */}
      <div className="min-h-[600px] bg-[#F6F5F4] mt-[60px] w-full flex flex-col justify-evenly items-center">
        {!tags || !pagesCount || !pageData ? (
          <TailSpin
            height="80"
            width="80"
            color="#2B788B"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <>
            {/* Courses box */}
            <div className="bg-white m-[30px] w-[70%] py-[15px] rounded-lg flex flex-col items-start">
              <span className="text-right font-primary text-[26px] mx-[30px]">
                Courses
              </span>
              <div className="mx-[30px] flex flex-row items-start"></div>
            </div>

            {/* Tag */}
            <div className="flex flex-row justify-center items-center max-w-[80%] overflow-x-auto">
              {tags.map((tag, i) => (
                <button
                  onClick={() => setCurrentTag(i)}
                  key={i}
                  className={`m-[10px] text-[20px] font-secondary ${
                    currentTag === i ? "font-extrabold" : "font-medium"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Course */}
            <div
              className={`flex flex-col items-center min-h-[600px] ${
                loadingPage ? "justify-center" : "justify-start"
              }`}
            >
              {loadingPage || tryingToEnroll ? (
                <TailSpin
                  height="80"
                  width="80"
                  color="#2B788B"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                <>
                  {pageData.map((course, i) => (
                    <CourseCard
                      key={course.courseID}
                      courseName={course.title}
                      instructorName={course.instructorName}
                      tag={course.tag}
                      description={course.description}
                      image={pic5}
                      enrolled={course.enroll}
                      id={course.courseID}
                      setTryingToEnroll={setTryingToEnroll}
                      loadPageData={getPageData}
                    />
                  ))}
                </>
              )}
            </div>

            {/* Page Selector */}
            <ReactPaginate
              forcePage={currentPage}
              pageCount={pagesCount}
              onPageChange={handlePageChange}
              nextLabel=">"
              previousLabel="<"
              className="mt-[30px] mb-[60px] flex flex-row items-center"
              activeLinkClassName="!bg-[#2B788B] !text-[white]"
              pageLinkClassName="w-12 h-12 border-[#2B788B] border-2 font-secondary font-bold text-[16px] rounded-full flex items-center justify-center mx-[10px] bg-white text-[#2B788B]"
              nextLinkClassName="w-12 h-12 border-[#2B788B] border-2 font-secondary font-bold text-[16px] rounded-full flex items-center justify-center mx-[10px] bg-white text-[#2B788B]"
              previousLinkClassName="w-12 h-12 border-[#2B788B] border-2 font-secondary font-bold text-[16px] rounded-full flex items-center justify-center mx-[10px] bg-white text-[#2B788B]"
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
