"use client";
import React, { useState, useEffect } from "react";
import CommonCategory from "./CommonCategory";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@material-tailwind/react";
const prdData = {
  category: "Prodcut Category",
  data: [
    {
      title: "Sneaker",
      value: 3,
    },
    {
      title: "Cosmetics",
      value: 5,
    },
    {
      title: "Handbag",
      value: 8,
    },
    {
      title: "Headphone",
      value: 7,
    },
    {
      title: "Smart Watch",
      value: 6,
    },
    {
      title: "Dress",
      value: 2,
    },
    {
      title: "Mobile & Laptop",
      value: 3,
    },
  ],
};
const colorData = {
  category: "Filter by color",
  data: [
    {
      title: "Light Brown (10)",
      value: 3,
      color: "#B5651D",
    },
    {
      title: "Blue(7)",
      value: 5,
      color: "red",
    },
    {
      title: "Light purploe(10)",
      value: 8,
      color: "green",
    },

    {
      title: "Pele Gray",
      value: 7,
      color: "blue",
    },
    {
      title: "Jean Blue",
      value: 6,
      color: "#B5651D",
    },
    {
      title: "Dark blue",
      value: 2,
      color: "yellow",
    },
    {
      title: "Red",
      value: 3,
      color: "green",
    },
  ],
};
const sizeData = {
  category: "Filter by size",
  data: [
    {
      title: "s",
      value: 3,
    },
    {
      title: "m",
      value: 5,
    },
    {
      title: "l",
      value: 8,
    },
    {
      title: "x",
      value: 7,
    },
    {
      title: "xl",
      value: 6,
    },
    {
      title: "xxl",
      value: 2,
    },
    {
      title: "xxxl",
      value: 3,
    },
  ],
};
const brandData = {
  category: "Brand",
  data: [
    {
      title: "Abc Fashion",
      value: 3,
    },
    {
      title: "squire style",
      value: 5,
    },
    {
      title: "Nice fashion",
      value: 8,
    },

    {
      title: "xozo fashion",
      value: 7,
    },
    {
      title: "style zone",
      value: 6,
    },
    {
      title: "Cool style",
      value: 2,
    },
    {
      title: "Modern look",
      value: 3,
    },
  ],
};
// ====================
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
const sizes = ["S", "M", "L", "XL", "XXL"];
const sortingOrder = ["Newest", "Price Low - High", "Price High - Low"];
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
  console.log("e.target.value= queries", queries);
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
