import { useState } from "react";
import "./App.css";
import { fetchSummary, fetchSummaryWithImages } from "./utils/response";
import Summary from "./components/Summary";
import { PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile";

function App() {
  const [searchString, setSearchString] = useState("");
  const [summary, setSummary] = useState("");
  const [completeResponse, setCompleteResponse] = useState("");

  const [summaryLoading, setSummaryLoading] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);

  const getSummary = async () => {
    if (!searchString.trim()) return;

    setSummaryLoading(true);
    setCompleteResponse("");
    setSummary("");
    const response = await fetchSummary(searchString);

    setSummary(response);
    setSummaryLoading(false);
  };

  const getCompleteResponse = async () => {
    setCompleteResponse("");
    setLoadingImages(true);
    const responseWithImages = await fetchSummaryWithImages(summary);
    setCompleteResponse(responseWithImages);
    setLoadingImages(false);
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <label style={{ fontSize: 30 }} htmlFor="prompt">
          {"Let's make a presentation for you!"}
        </label>
        <textarea
          name="prompt"
          id="prompt"
          rows={5}
          cols={30}
          placeholder="Describe your presentation here.."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        >
          {searchString}
        </textarea>
      </div>
      <div className="input-button">
        <button disabled={!searchString.trim()} onClick={getSummary}>
          {!summaryLoading ? (
            <span>Get Summary</span>
          ) : (
            <span className="loader"></span>
          )}
        </button>
      </div>
      {summary?.slides?.length && <Summary summary={summary} />}
      {summary && !completeResponse && (
        <div className="pdf-button">
          <button onClick={getCompleteResponse}>
            {!loadingImages ? (
              <span>Generate PDF</span>
            ) : (
              <span className="loader"></span>
            )}
          </button>
        </div>
      )}
      {completeResponse && (
        <PDFViewer width={700} height={500}>
          <PDFFile data={completeResponse} />
        </PDFViewer>
      )}
    </div>
  );
}

export default App;
