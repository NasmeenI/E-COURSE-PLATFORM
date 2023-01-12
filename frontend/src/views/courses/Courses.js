import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CourseCard from "./CourseCard";
import PageButton from "./PageButton";
import { TailSpin } from "react-loader-spinner";
import NasmeenAPI from "../../api/NasmeenAPI";

export default function Courses() {
  const [loadingTags, setLoadingTags] = useState(false);
  const [tags, setTags] = useState(null);
  const [currentTag, setCurrentTag] = useState(0);

  const [loadingPagesCount, setLoadingPagesCount] = useState(false);
  const [pagesCount, setPagesCount] = useState(null);

  const [loadingPage, setLoadingPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function getTags() {
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

  useEffect(() => {
    async function getPageData() {
      if (!pagesCount) {
        return;
      }

      setLoadingPage(true);
      const result = await NasmeenAPI.readAllCourses(
        tags[currentTag],
        currentPage + 1
      );
      console.log(result);
      setPageData(result.AllCourses);
      setLoadingPage(false);
    }

    getPageData();
  }, [currentPage, pagesCount, currentTag]);

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
            <div className="flex flex-col justify-evenly items-center">
              {loadingPage ? (
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
                      key={i}
                      courseName={course.title}
                      instructorName={course.instructorName}
                      tag={course.tag}
                      description={course.description}
                    />
                  ))}
                </>
              )}
            </div>

            {/* Page Selector */}
            <div className="mt-[30px] mb-[60px] flex flex-row justify-evenly items-center">
              <PageButton page="<" />
              <PageButton page="1" />
              <PageButton page="2" current={true} />
              <PageButton page="3" />

              {/* page split with ... */}
              <span className="text-[#2B788B] font-secondary font-bold text-[20px] rounded-full flex items-center justify-evenly mx-[10px]">
                ...
              </span>

              <PageButton page="7" />
              <PageButton page="8" />
              <PageButton page=">" />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
