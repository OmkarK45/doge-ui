import { Resizable } from "re-resizable"
import { useRef, useState } from "react"
import { HiOutlineCode, HiOutlineSparkles } from "react-icons/hi"
import { MdContentCopy } from "react-icons/md"

import getURL from "./../../utils/getiFrameURL"
import Spinner from "./../ui/Spinner"
import ResizeBar from "./ResizeBar"

export default function ComponentHolder({ children, code, title }) {
  const [showCode, setShowCode] = useState(false)
  const iframeRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const handleLoading = () => {
    setLoading(false)
  }
  function handleCopy(code) {
    navigator.clipboard.writeText(code)
  }
  return (
    <div className="py-12">
      <div className="bg-white dark:bg-primary-600 dark:text-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between">
          <div>
            <p>{title}</p>
          </div>
          <div>
            <button
              onClick={() => setShowCode((showCode) => !showCode)}
              className="flex items-center"
            >
              {showCode ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 outline-none text-green-800">
                  Preview <HiOutlineSparkles className="ml-2" />
                </span>
              ) : (
                <span className="inline-flex outline-none items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Code <HiOutlineCode className="ml-2" />
                </span>
              )}
            </button>
          </div>
        </div>
        {showCode ? (
          <pre className="bg-primary-800 w-full overflow-x-auto  text-gray-200 px-4 py-5 sm:p-6">
            {code && loading ? (
              <div className="flex items-center justify-center">
                <Spinner /> Loading snippet...
              </div>
            ) : null}
            {code ? (
              <div className="relative">
                <iframe
                  title="code"
                  loading="lazy"
                  onLoad={handleLoading}
                  className="w-full "
                  src={getURL(code)}
                  ref={iframeRef}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
                <button
                  onClick={() => handleCopy(code)}
                  className="bg-primary-300 flex items-center px-2 py-1 rounded-lg text-white absolute top-0 right-10"
                >
                  <MdContentCopy /> Copy
                </button>
              </div>
            ) : (
              "No code snippet available."
            )}
          </pre>
        ) : (
          <Resizable
            enable={{ top: false, bottom: false, left: false, right: true }}
            handleComponent={{ right: <ResizeBar /> }}
            bounds="parent"
            minWidth={250}
          >
            <div className="bg-gray-100 dark:bg-primary-700 px-4 py-5 sm:p-6  border-r border-gray-600">
              {children}
            </div>
          </Resizable>
        )}
      </div>
    </div>
  )
}
