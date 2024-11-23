"use client";
import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Slider,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
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

  const [isOpen, setIsOpen] = useState(true); // Default is open
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  console.log("allow & data", isOpen, data);

  return (
    <div>
      <List>
        <Accordion
          open={isOpen}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem
            className="p-0 bg-hidden hover:bg-hidden h-[40px]"
            selected={isOpen}
          >
            <AccordionHeader
              // onClick={() => toggleAccordion(data.id)}
              onClick={toggleAccordion}
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
                    size="sm"
                    max={1000}
                    className="text-[#F87643]"
                    barClassName="rounded-none bg-[#F87643]"
                    thumbClassName="[&::-moz-range-thumb]:rounded [&::-webkit-slider-thumb]:rounded [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                    trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#F87643]/10 border border-[#F87643]/20"
                    value={price}
                    onChange={handlePriceChange}
                  />
                  <p className="text-xsm text-dark-700 mt-2">
                    {`Price: ${currencyData?.symbol} 0 - ${currencyData?.symbol} ${price}`}
                  </p>
                </div>
              ) : (
                data.options?.map((value, idx) => (
                  <ListItem
                    key={idx}
                    className={`bg-hidden hover:bg-hidden h-[30px] font-jost text-xsm cursor-default ${
                      data.title === "Filter by size"
                        ? "uppercase"
                        : "capitalize"
                    }`}
                  >
                    <ListItemPrefix>
                      {(data.title === "Sorting Order" ||
                        data.title === "Product Category" ||
                        data.title === "Filter by size" ||
                        data.title === "Brand") && (
                        <CheckboxAndRadioGroup key={value}>
                          <CheckboxAndRadioItem
                            type={data.type}
                            name={data.id}
                            id={value.toLowerCase().trim()}
                            label={value}
                            value={value.toLowerCase().trim()}
                            checked={isChecked(data.id, value)}
                            onChange={onChange}
                            className="h-5 w-5 rounded-full text-white bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-transparent cursor-pointer"
                          />
                        </CheckboxAndRadioGroup>
                      )}
                      {data.title === "Filter by color" && (
                        <CheckboxAndRadioGroup key={value.id || value}>
                          <CheckboxAndRadioItem
                            type={data.type}
                            name={data.id}
                            id={
                              value.id.toLowerCase().trim() ||
                              value.toLowerCase().trim()
                            }
                            label={value?.name || value}
                            value={
                              value.id?.toLowerCase().trim() ||
                              value.toLowerCase().trim()
                            }
                            checked={isChecked(data.id, value?.id || value)}
                            onChange={onChange}
                            style={{
                              backgroundColor: value?.selectedClass || value,
                            }}
                            className="h-7 w-7 rounded-full bg-dark-500 transition-all hover:scale-105 hover:before:opacity-0 checked:border-transparent"
                          />
                        </CheckboxAndRadioGroup>
                      )}
                    </ListItemPrefix>
                    {value?.name || value}
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
        <input type="radio" id={id} className="w-4 h-4 shrink-0" {...props} />
      )}
    </>
  );
}

export default CommonCategory;
