import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setResults, setInput }) => {
  return (
    <div className="results-list">
      {results?.map((result, id) => {
        return (
          <SearchResult
            result={result.title}
            addition={result}
            key={id}
            setInput={setInput}
            setResults={setResults}
          />
        );
      })}
    </div>
  );
};
