"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog | Nexora Tech",
//   description: "Explore the latest updates, insights, and articles from Nexora Tech on technology, web development, and IT solutions.",
//   // other metadata
// };

import { useState } from "react";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white ${
                      currentPage === 1 ? "cursor-not-allowed" : ""
                    }`}
                  >
                    Prev
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      onClick={() => setCurrentPage(index + 1)}
                      className={`bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white ${
                        currentPage === index + 1 ? "bg-primary text-white" : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className="mx-1">
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white ${
                      currentPage === totalPages ? "cursor-not-allowed" : ""
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
