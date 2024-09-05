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
const colors = ["Red", "Green", "Blue", "Black"];
const categories = ["Men cloth", "Women Cloth"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const sortingOrder = ["Newest", "Price Low - High", "Price High - Low"];
const filterOptions = [
  {
    id: "sort",
    title: "Sorting Order",
    options: sortingOrder,
    type: "radio",
  },
  {
    id: "categories",
    title: "Categories",
    options: categories,
    type: "checkbox",
  },
  {
    id: "sizes",
    title: "Sizes",
    options: sizes,
    type: "checkbox",
  },
  {
    id: "colors",
    title: "Colors",
    options: colors,
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
function convertValidStringQueries(queries) {
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
  console.log("'pathname'", pathname);
  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  function handleSelectFilterOptions(e) {
    console.log("e.target.value=", e.target.value, e);
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    console.log("select0101", name, value, type);
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
    console.log("e.target.value=1", selectedQueries);
    // router.push(`/?${convertValidStringQueries(selectedQueries)}`, {
    //   scroll: false,
    // });

    const queryString = convertValidStringQueries(selectedQueries);

    // Push the new URL with the correct base path
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
      {/* <CommonCategory data={prdData} />
      <CommonCategory data={colorData} />
      <CommonCategory data={sizeData} />
      <CommonCategory data={brandData} /> */}
      {filterOptions.map(({ id, title, type, options }) => {
        return (
          <div className="border-b pb-4" key={id}>
            <p className="font-medium mb-4">{title}</p>
            <div className="space-y-2">
              {options.map((value) => {
                return (
                  <CheckboxAndRadioGroup key={value}>
                    <CheckboxAndRadioItem
                      type={type}
                      name={id}
                      id={value.toLowerCase().trim()}
                      label={value}
                      value={value.toLowerCase().trim()}
                      checked={isChecked(id, value)}
                      onChange={handleSelectFilterOptions}
                    />
                  </CheckboxAndRadioGroup>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CheckboxAndRadioGroup({ children }) {
  return <div className="flex items-center gap-4">{children}</div>;
}
function CheckboxAndRadioItem({ id, label, type, ...props }) {
  return (
    <>
      {type === "checkbox" && (
        <Checkbox
          // defaultChecked
          ripple={false}
          className="h-5 w-5 rounded-full text-white bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-transparent"
          {...props}
        />
      )}
      {type === "radio" && (
        <>
          <input type="radio" id={id} className="w-4 h-4 shrink-0" {...props} />
          <label htmlFor={id} className="text-sm">
            {label}
          </label>
        </>
      )}
    </>
  );
}
export default LeftSidebar;
