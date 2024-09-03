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
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
function CommonCategory({ data }) {
  // const [open, setOpen] = React.useState(0);

  // const handleOpen = (value) => {
  //   setOpen(open === value ? 0 : value);
  // };
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
                {data.category}
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 hover:bg-none hover:bg-none">
              {data.data.map(({ title, value, color }, idx) => (
                <ListItem
                  key={idx}
                  className={`bg-hidden hover:bg-hidden h-[30px] font-jost text-xsm ${
                    data.category === "Filter by size"
                      ? "uppercase"
                      : "capitalize"
                  }`}
                >
                  <ListItemPrefix>
                    {(data.category === "Prodcut Category" ||
                      data.category === "Filter by size" ||
                      data.category === "Brand") && (
                      <>
                        <Checkbox
                          // defaultChecked
                          ripple={false}
                          className="h-5 w-5 rounded-full text-white bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-transparent"
                        />
                      </>
                    )}

                    {data.category === "Filter by color" && (
                      <>
                        <Checkbox
                          style={{ backgroundColor: color }}
                          ripple={false}
                          className="h-7 w-7 rounded-full bg-dark-500 transition-all hover:scale-105 hover:before:opacity-0 checked:border-transparent"
                        />{" "}
                      </>
                    )}
                  </ListItemPrefix>
                  {title}
                  {data.category !== "Filter by color" && (
                    <ListItemSuffix className="text-grey-200 text-base mr-1">
                      ({value})
                    </ListItemSuffix>
                  )}
                </ListItem>
              ))}
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}

export default CommonCategory;
