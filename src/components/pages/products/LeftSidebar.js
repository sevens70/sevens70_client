"use client";
import React, { useState, useEffect } from "react";
import CommonCategory from "./CommonCategory";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const colors = [
  "darkOrange",
  "red",
  "green",
  "blue",
  "thistle",
  "yellow",
  "powderBlue",
  "lightGray",
];
const categories = ["Men cloth", "Women Cloth"];
const typeOption = ["Sneakers", "Boats", "Sandals", "Loafers", "Formal Shoes"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const sortingOrder = ["Newest", "Price Low - High", "Price High - Low"];
const categoryOption = [
  "Men's Shoes",
  "Women's shoes",
  "Kid's shoes",
  "Unisex shoes",
];
const brands = [
  "Abc Fashion",
  "squire style",
  "Nice fashion",
  "xozo fashion",
  "style zone",
  "Cool style",
  "Modern look",
];
const filterOptions = [
  {
    id: "sort",
    title: "Sorting Order",
    options: sortingOrder,
    type: "radio",
  },
  {
    id: "category",
    title: "Categories",
    options: categoryOption,
    type: "checkbox",
  },
  {
    id: "type",
    title: "Shoe Type",
    options: typeOption,
    type: "checkbox",
  },
  {
    id: "prices",
    title: "Filter by price",
    options: [],
    type: "slider",
  },
  {
    id: "categories",
    title: "Prodcut Category",
    options: categories,
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
    options: brands,
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
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  const [price, setPrice] = useState(0);

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
    return (
      Boolean(selectedFilterQueries[id]) &&
      selectedFilterQueries[id].includes(option.toLowerCase())
    );
  }

  return (
    <div>
      {filterOptions.map((value) => {
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
