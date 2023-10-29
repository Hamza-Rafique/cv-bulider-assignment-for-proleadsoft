import React from "react";

interface Props {
  data: {
    description: string;
    linkedin: string;
    github: string;
    website: string;
  };
}

const DescriptionLinks: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <p className="my-4"><b>Description:</b> {data?.description}</p>
      <div className="flex">
        <a
          href={data?.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2ZM4 2C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44771 22 4 22H10V12H7V9H10V7.8C10 5.40111 11.9646 4.31984 13.6654 5.53092L15.8312 7.11539C16.4631 7.62474 17.5369 7.62474 18.1688 7.11539L20.3346 5.53092C22.0354 4.31984 24 5.40111 24 7.8V16.2C24 18.5989 22.0354 19.6802 20.3346 18.4691L18.1688 16.8846C17.5369 16.3753 16.4631 16.3753 15.8312 16.8846L13.6654 18.4691C11.9646 19.6802 10 18.5989 10 16.2V14H7V19H4C3.44772 19 3 18.5523 3 18V3C3 2.44772 3.44772 2 4 2ZM16 12H19V9H16V12Z"
                fill="currentColor"
              />
            </svg>
            LinkedIn
          </button>
        </a>
        <a
          href={data?.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 16.9706 6.75751 21.1726 12.75 22.1848V19.1942C10.1093 18.492 8.25 16.0386 8.25 13.25C8.25 11.3701 9.38133 9.74344 11.3723 9.08676C11.8162 8.96428 12.2403 8.91612 12.75 8.91612C13.2597 8.91612 13.6838 8.96428 14.1277 9.08676C16.1187 9.74344 17.25 11.3701 17.25 13.25C17.25 16.0386 15.3907 18.492 12.75 19.1942V22.1848C18.7425 21.1726 23.5 16.9706 23.5 12C23.5 6.47715 18.0228 2 12 2Z"
                fill="currentColor"
              />
            </svg>
            GitHub
          </button>
        </a>
        <a href={data?.website} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2C11 2.55228 10.5523 3 10 3H5C4.44772 3 4 3.55228 4 4V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V15C20 14.4477 19.5523 14 19 14H15.875C15.0121 14 14.6509 15.1467 15.4142 15.9101C15.7342 16.2302 16.2663 16.2302 16.5863 15.9101C17.3496 15.1467 16.9879 14 16.125 14H13V10H15.875C15.0121 10 14.6509 11.1467 15.4142 11.9101C15.7342 12.2302 16.2663 12.2302 16.5863 11.9101C17.3496 11.1467 16.9879 10 16.125 10H13V6H16.125C16.9879 6 17.3496 7.14673 16.5863 7.91006C16.2663 8.23015 15.7342 8.23015 15.4142 7.91006C14.6509 7.14673 15.0121 6 15.875 6H19C19.5523 6 20 5.55228 20 5V4C20 3.44772 19.5523 3 19 3H12.75C12.3254 3 11.9022 2.79145 11.5858 3.16442L11 4L10.4142 3.16442C10.0978 2.79145 9.67456 3 9.25 3H5C4.44772 3 4 3.44772 4 4V12H10V10H11V8H10V7H11V6H10V5H11V4H10V3H11Z"
                fill="currentColor"
              />
            </svg>
            Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default DescriptionLinks;
