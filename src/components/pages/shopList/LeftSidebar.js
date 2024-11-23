"use client";
import React, { useState, useEffect } from "react";
import CommonCategory from "./CommonCategory";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "../../../lib/hooks";
import {
  allBrand,
  selectAllCategories,
} from "../../features/product/productSlice";

const colors = [
  {
    name: "Light Brown",
    class: "bg-priceColor",
    selectedClass: "#B5651D",
    id: "light_brown",
  },
  {
    name: "Red",
    class: "bg-primaryRed",
    selectedClass: "red",
    id: "red",
  },
  {
    name: "Green",
    class: "bg-successGreen",
    selectedClass: "green",
    id: "green",
  },
  {
    name: "Blue",
    class: "blue",
    selectedClass: "blue",
    id: "blue",
  },
  {
    name: "Light Purple",
    class: "light_purple",
    selectedClass: "purple",
    id: "light_purple",
  },
  {
    name: "Jean Blue",
    class: "jean blue",
    selectedClass: "#B5651D",
    id: "jean_blue",
  },
  {
    name: "Yellow",
    class: "yellow",
    selectedClass: "yellow",
    id: "yellow",
  },
];

// const categories = ["Men cloth", "Women Cloth"];
const sizes = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];
const sortingOrder = ["Newest", "Price Low - High", "Price High - Low"];
const filterOptions = [
  {
    id: "sort",
    title: "Sorting Order",
    options: sortingOrder,
    type: "radio",
  },
  {
    id: "prices",
    title: "Filter by price",
    options: [],
    type: "slider",
  },
  {
    id: "category",
    title: "Product Category",
    options: [],
    type: "checkbox",
  },
  {
    id: "sizes",
    title: "Filter by size",
    options: sizes,
    type: "checkbox",
  },
  {
    id: "colors",
    title: "Filter by color",
    options: colors,
    type: "checkbox",
  },
  {
    id: "brand",
    title: "Brand",
    options: [],
    type: "checkbox",
  },
];
function checkValidQuery(queries) {
  return queries.filter((query) => query !== "").length > 0;
}
export function convertStringToQueriesObject(searchParams) {
  let selectedQueries = {};
  searchParams.forEach((values, key) => {
    const queries = values.split(",");
    if (selectedQueries[key]) {
      selectedQueries[key].push(...queries);
    } else {
      selectedQueries[key] = queries;
    }
  });
  return selectedQueries;
}
export function convertValidStringQueries(queries) {
  let q = "";
  for (let [key, value] of Object.entries(queries)) {
    q = q + `${q === "" ? "" : "&"}${key}=${value}`;
  }
  return q;
}

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allCatgories = useAppSelector(selectAllCategories);
  const allBrandData = useAppSelector(allBrand);
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  const [price, setPrice] = useState(0);
  console.log("allCategories 123", allCatgories);
  // const categories = allCatgories?.flatMap((category) =>   // note : it combines the category & subcategory name
  //   category.subcategories.map((sub) => `${category.name} - ${sub.name}`)
  // );
  const categories = allCatgories?.map((category) => category.name);
  const brands = allBrandData?.map((brand) => brand.name);
  // Update filterOptions categories' options dynamically
  const updatedFilterOptions = filterOptions.map((option) => {
    if (option.id === "category") {
      return { ...option, options: categories };
    }
    if (option.id === "brand") {
      return { ...option, options: brands };
    }
    return option;
  });

  const handlePriceChange = (e) => {
    setPrice(parseInt(e?.target.value));
    let queries = { ...selectedFilterQueries };
    queries.price = [`${0}-${parseInt(e?.target.value)}`];
    const queryString = convertValidStringQueries(queries);
    router.push(`${pathname}?${queryString}`, {
      scroll: false,
    });
  };
  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  function handleSelectFilterOptions(e) {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    let selectedQueries = selectedFilterQueries;

    if (selectedQueries[name]) {
      if (type === "radio") {
        selectedQueries[name] = [value];
      } else if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(
          (query) => query !== value
        );
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name];
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else if (selectedQueries) {
      selectedQueries[name] = [value];
    }
    const queryString = convertValidStringQueries(selectedQueries);
    router.push(`${pathname}?${queryString}`, {
      scroll: false,
    });
  }

  function isChecked(id, option) {
    // console.log("id, option", id, option);
    return (
      Boolean(selectedFilterQueries[id]) &&
      selectedFilterQueries[id].includes(option.toLowerCase())
    );
  }

  return (
    <div>
      {updatedFilterOptions.map((value) => {
        return (
          <CommonCategory
            data={value}
            onChange={handleSelectFilterOptions}
            isChecked={isChecked}
            price={price}
            handlePriceChange={handlePriceChange}
          />
        );
      })}
    </div>
  );
}

export default LeftSidebar;
