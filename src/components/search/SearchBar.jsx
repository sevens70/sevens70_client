import "./SearchBar.css";
import { Button, Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
export const SearchBar = ({ setResults, input, setInput, allProducts }) => {
  // const fetchData = (value) => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("results------------------", json);
  //       const results = json.filter((user) => {
  //         return (
  //           value &&
  //           user &&
  //           user.name &&
  //           user.name.toLowerCase().includes(value.toLowerCase())
  //         );
  //       });
  //       setResults(results);
  //     });
  // };

  const handleChange = (value) => {
    setInput(value);
    const results = allProducts.filter((product) => {
      return (
        value &&
        product &&
        product.title &&
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };

  return (
    <div className="input-wrapper">
      {/* <div className="relative flex gap-3 w-full 2xl:max-w-[22rem] lg:max-w-[18rem] max-w-[15rem]"> */}
      <div className="flex gap-3 w-full ">
        <Input
          size="md"
          type="email"
          placeholder="Search product..."
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:opacity-100"
          style={{
            color: "#323B49",
            fontSize: "14px !important",
            fontFamily: "Jost !important",
          }}
          labelProps={{
            className: "hidden",
          }}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="searchBar__icon">
          {" "}
          <FaSearch id="search-icon" />
        </div>

        <Button
          size="sm"
          className="font-jost text-base font-medium capitalize h-[40px] !rounded-none !rounded-tr-lg !rounded-br-lg !absolute bg-primaryRed  right-0 top-0 rounded headerSearch_btn"
        >
          Search Now
        </Button>
      </div>
    </div>
  );
};
