import React, { useState } from "react";
import { toast } from "react-toastify";
import { Commands } from "../datasets/Commands";
import { backendAPI } from "../config/config";
import { IoCopyOutline } from "react-icons/io5";

const API = ({ theme }) => {
  const [apiData, setApiData] = useState(null);

  const [selectedTechRoute, setSelectedTechRoute] = useState("/");
  const [generatedAPI, setGeneratedAPI] = useState(null);
  const [exportOption, setExportOption] = useState("Export");

  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Error !!! can't copy");
    }
  };

  const handleGenerateAPI = () => {
    setGeneratedAPI(`${backendAPI}/api/commands${selectedTechRoute}`);
  };

  const handleTestAPI = async () => {
    await fetch(generatedAPI)
      .then((rawData) => rawData.json())
      .then((jsonData) => setApiData(jsonData));

    toast.success("Fetched Data Successfully");
  };

  const fetchContent = `fetch(${generatedAPI})
  .then((rawData)=>rawData.json)
  .then((jsonData)=>console.log(jsonData));`;

  const curlContent = `curl ${generatedAPI}`;

  const handleDownloadJson = () => {
    if (!apiData) {
      toast.error("No data to download");
      return;
    }

    const jsonString = JSON.stringify(apiData, null, 2); // pretty JSON
    const blob = new Blob([jsonString], { type: "application/json" });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "commands.json"; // file name

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast.success("JSON Downloaded Successfully");
  };

  return (
    <>
      <div className="z-20 group p-4 py-8 w-full min-w-[300px] min-h-[500px] rounded flex flex-col gap-4 bg-[#ffffff] text-black shadow-md border-[1px] border-gray-300/25">
        <h1 className="mb-8">
          <span className="font-bold mr-2 text-lg md:text-xl lg:text-2xl">
            SnippHub API
          </span>{" "}
          (Select Technology --- Generate API --- Export)
        </h1>

        <div className="flex flex-wrap items-center gap-10">
          <select
            name="technologies"
            className="p-2 bg-white border-[2px] border-black w-fit"
            onChange={(e) => {
              setSelectedTechRoute(e.target.value);
            }}
          >
            <option value="/">Select</option>
            {Commands.map((item, index) => {
              return (
                <option value={item.techRoute} key={index}>
                  {item.techName}
                </option>
              );
            })}
          </select>

          <button
            onClick={() => {
              handleGenerateAPI();
            }}
            disabled={selectedTechRoute === "/"}
            className={`bg-blue-600 px-4 py-2 rounded font-bold text-white hover:scale-105 transition-all duration-300 ${selectedTechRoute === "/" && "cursor-not-allowed"}`}
          >
            Generate API
          </button>

          {generatedAPI !== null && (
            <button
              onClick={() => {
                handleTestAPI();
              }}
              disabled={selectedTechRoute === "/" || generatedAPI === null}
              className={`bg-orange-500 px-4 py-2 rounded font-bold text-white hover:scale-105 transition-all duration-300 ${(selectedTechRoute === "/" || generatedAPI === null) && "cursor-not-allowed"}`}
            >
              Test API
            </button>
          )}

          {apiData !== null && (
            <select
              name="exportapi"
              className="p-2 bg-white border-[2px] border-black w-fit"
              onChange={(e) => {
                setExportOption(e.target.value);
              }}
            >
              <option value="Export">Export</option>
              <option value="Fetch">Fetch API</option>
              <option value="Curl">Curl</option>
              <option value="Json">Download JSON</option>
            </select>
          )}
        </div>

        {/* Export Options */}
        {exportOption === "Fetch" ? (
          <>
            <h1 className="font-bold mt-8 text-green-500">Export as Fetch: </h1>

            <div className="relative">
              <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto">
                {fetchContent}
              </pre>
              <IoCopyOutline
                onClick={() => {
                  handleCopy(fetchContent);
                }}
                className="text-2xl hover:scale-110 transition-all duration-300 text-white cursor-pointer absolute right-1 top-1"
              />
            </div>
          </>
        ) : exportOption === "Curl" ? (
          <>
            <h1 className="font-bold mt-8 text-green-500">Export as Curl: </h1>

            <div className="relative">
              <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto">
                {curlContent}
              </pre>
              <IoCopyOutline
                onClick={() => {
                  handleCopy(curlContent);
                }}
                className="text-2xl hover:scale-110 transition-all duration-300 text-white cursor-pointer absolute right-1 top-1"
              />
            </div>
          </>
        ) : exportOption === "Json" ? (
          <>
            <h1 className="font-bold mt-8 text-green-500">Export as Json: </h1>

            <button
              onClick={() => {
                handleDownloadJson();
              }}
              className="w-fit bg-green-500 px-4 py-2 rounded font-bold text-white hover:scale-105 transition-all duration-300"
            >
              Download JSON
            </button>
          </>
        ) : (
          ""
        )}
        {generatedAPI && (
          <>
            <h1 className="font-bold mt-8">Generated API: </h1>

            <div className="relative">
              <pre className="text-md md:text-lg lg:text-xl w-full bg-[#0d1117] text-white rounded p-4 overflow-x-auto">
                GET {generatedAPI}
              </pre>
              <IoCopyOutline
                onClick={() => {
                  handleCopy(`GET ${generatedAPI}`);
                }}
                className="text-2xl hover:scale-110 transition-all duration-300 text-white cursor-pointer absolute right-1 top-1"
              />
            </div>
          </>
        )}
        {apiData && (
          <>
            <h1 className="font-bold mt-8">Fetched Data: </h1>

            <pre className="text-md md:text-lg lg:text-xl w-full h-[500px] bg-[#0d1117] text-white rounded p-4 overflow-auto">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </>
        )}
      </div>
    </>
  );
};

export default API;
