"use client";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Radio,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
}
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
              className="mx-auto h-4 w-4 "
              // className={`mx-auto h-4 w-4 transition-transform ${
              //   open === 1 ? "rotate-180" : ""
              // }`}
            />
          }
        >
          <ListItem
            className="p-0 bg-hidden hover:bg-hidden h-[40px]"
            selected={open === 1}
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
                  className={`bg-hidden hover:bg-hidden h-[30px] font-jost text-xsm ${data.category === "Filter by size" ? "uppercase" : "capitalize"}`}
                >
                  <ListItemPrefix>
                    {(data.category === "Prodcut Category" || data.category === "Filter by size" || data.category === "Brand") && (
                      <Radio
                        name="type"
                        ripple={false}
                        icon={<Icon />}
                        containerProps={{
                          className: "p-0 !mr-0",
                        }}
                        className="border-gray-900/10 bg-gray-900/5 h-4 w-4 p-0 transition-all hover:before:opacity-0"
                      />
                    )}

                    {data.category === "Filter by color" && (
                      <div
                        style={{ backgroundColor: color }}
                        className={`h-6 w-6 bg-dark-500 rounded-full`}
                      >
    
                      </div>
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

        {/* <hr className="my-2 border-blue-gray-50" /> */}
      </List>
    </div>
  );
}

export default CommonCategory;
