"use client";
import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Slider,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../../../lib/hooks";
import { getCarrency } from "../../../lib/features/currencySlice";
function CommonCategory({
  data,
  onChange,
  isChecked,
  price,
  handlePriceChange,
}) {
  const currencyData = useAppSelector(getCarrency);
  return (
    <div>
      <List>
        <Accordion
          // open={open === 1}
          open={true}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className="mx-auto h-4 w-4"
              // className={`mx-auto h-4 w-4 transition-transform ${
              //   open === 1 ? "rotate-180" : ""
              // }`}
            />
          }
        >
          <ListItem
            className="p-0 bg-hidden hover:bg-hidden h-[40px]"
            // selected={open === 1}
          >
            <AccordionHeader
              // onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <Typography
                color="blue-gray"
                className="mr-auto font-jost text-sm font-normal"
              >
                {data.title}
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 hover:bg-none hover:bg-none">
              {data.type === "slider" ? (
                <div className="price-filter px-3">
                  <Slider
                    // defaultValue={50}
                    size="sm"
                    className="text-[#F87643]"
                    barClassName="rounded-none bg-[#F87643]"
                    thumbClassName="[&::-moz-range-thumb]:rounded [&::-webkit-slider-thumb]:rounded [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                    trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#F87643]/10 border border-[#F87643]/20"
                    value={price}
                    onChange={handlePriceChange}
                  />
                  <p className="text-xsm text-dark-700 mt-2">
                    {`Price: ${currencyData?.symbol} 0 - ${currencyData?.symbol} ${price}`}
                  </p>{" "}
                </div>
              ) : (
                data.options?.map((value, idx) => (
                  <ListItem
                    key={idx}
                    className={`bg-hidden hover:bg-hidden h-[30px] font-jost text-xsm ${
                      data.title === "Filter by size"
                        ? "uppercase"
                        : "capitalize"
                    }`}
                  >
                    <ListItemPrefix>
                      {(data.title === "Sorting Order" ||
                        data.title === "Product Category" ||
                        data.title === "Filter by size" ||
                        data.title === "Categories" ||
                        data.title === "Shoe Type" ||
                        data.title === "Brand") && (
                        <>
                          <CheckboxAndRadioGroup key={value}>
                            <CheckboxAndRadioItem
                              type={data.type}
                              name={data.id}
                              id={value.toLowerCase().trim()}
                              label={value}
                              value={value.toLowerCase().trim()}
                              checked={isChecked(data.id, value)}
                              onChange={onChange}
                              className="h-5 w-5 rounded-full text-white bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-transparent"
                            />
                          </CheckboxAndRadioGroup>
                        </>
                      )}

                      {data.title === "Filter by color" && (
                        <>
                          <CheckboxAndRadioGroup key={value}>
                            <CheckboxAndRadioItem
                              type={data.type}
                              name={data.id}
                              id={value.toLowerCase().trim()}
                              label={value}
                              value={value.toLowerCase().trim()}
                              checked={isChecked(data.id, value)}
                              onChange={onChange}
                              style={{ backgroundColor: value }}
                              className="h-7 w-7 rounded-full bg-dark-500 transition-all hover:scale-105 hover:before:opacity-0 checked:border-transparent"
                            />
                          </CheckboxAndRadioGroup>
                        </>
                      )}
                    </ListItemPrefix>
                    {value}
                    {data.title !== "Filter by color" && (
                      <ListItemSuffix className="text-grey-200 text-base mr-1">
                        ({1})
                      </ListItemSuffix>
                    )}
                  </ListItem>
                ))
              )}
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}
function CheckboxAndRadioGroup({ children }) {
  return <div className="">{children}</div>;
}
function CheckboxAndRadioItem({ id, label, type, ...props }) {
  return (
    <>
      {type === "checkbox" && <Checkbox ripple={false} {...props} />}
      {type === "radio" && (
        <>
          <input type="radio" id={id} className="w-4 h-4 shrink-0" {...props} />
        </>
      )}
    </>
  );
}

export default CommonCategory;
