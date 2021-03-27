import { Helmet } from "react-helmet-async"
import { HiOutlineDownload, HiArrowRight } from "react-icons/hi"
import { Footer } from "@components"
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Doge-UI | A tiny CSS Component Library.</title>
      </Helmet>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50">
                <svg
                  className="w-10 h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Build</span>
                </span>{" "}
                websites faster.
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Doge UI is a tiny (5.59 KB) CSS library that will give your
                development a jumpstart with ready-made components and styles.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <a
                download="dogeui.min.css"
                href="/dist/css/dogeui.min.css"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-tight text-white transition duration-200 rounded-lg shadow-md bg-yellow-600 hover:bg-yellow-800 focus:shadow-outline focus:outline-none"
              >
                <HiOutlineDownload className="text-lg mr-2" /> Download
              </a>
              <a
                href="/get-started"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-tight text-red-700 transition duration-200 rounded-lg shadow-md border-2 border-yellow-700 hover:text-red-800 focus:shadow-outline focus:outline-none"
              >
                Get Started <HiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
