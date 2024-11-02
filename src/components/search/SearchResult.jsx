import Link from "next/link";
import "./SearchResult.css";

export const SearchResult = ({ result, setResults, setInput, addition }) => {
  return (
    <div className="search-result cursor-pointer">
      <Link href={`/product/${addition.id}`} passHref>
        <div
          onClick={() => {
            setInput(result);
            setResults([]);
          }}
        >
          <div className="flex items-center justify-start gap-3">
            <img
              src={addition?.thumbnail}
              alt="img"
              className="h-[50px] w-[50px]"
            />
            <div>
              <p>{result}</p>
              <p>{addition?.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
