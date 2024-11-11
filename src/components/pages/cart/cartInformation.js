import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { addToRatingAsync } from "../../features/ratings/ratingsSlice";
import { useAppDispatch } from "../../../lib/hooks";
import toast from "react-hot-toast";
const defaultData = [
  {
    label: "Description",
    value: "Description",
    desc: ``,
    info: [],
  },
  {
    label: "Additional Information",
    value: "Information",
    desc: ``,
    info: [],
  },
  {
    label: "Reviews",
    value: "Reviews",
    desc: ``,
    info: [],
  },
];
function cartInformation({ singleProduct }) {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = React.useState("Description");
  const [data, setData] = useState(defaultData);
  const [ratingPoint, setRatingPoint] = useState(0);
  const [comment, setComment] = useState("");

  React.useEffect(() => {
    if (singleProduct && Object.keys(singleProduct)?.length > 0) {
      setData((prevData) =>
        prevData.map((item) => {
          if (item.label === "Description") {
            return { ...item, desc: singleProduct.description };
          } else if (item.label === "Additional Information") {
            return {
              ...item,
              info: [
                { title: "Rating", value: singleProduct.rating },
                { title: "Stock", value: singleProduct.stock },
                { title: "Brand", value: singleProduct.brand },
                { title: "Category", value: singleProduct.category },
                { title: "Subcategory", value: singleProduct.subcategory },
                { title: "Model", value: singleProduct.model },
              ],
            };
          } else if (item.label === "Reviews") {
            return {
              ...item,
              info: [
                { title: "Rating", value: singleProduct.rating },
                { title: "Stock", value: singleProduct.stock },
                { title: "Brand", value: singleProduct.brand },
                { title: "Category", value: singleProduct.category },
                { title: "Subcategory", value: singleProduct.subcategory },
                { title: "Model", value: singleProduct.model },
              ],
            };
          }
          return item;
        })
      );
    }
  }, [singleProduct]);

  const handleSave = (prdId) => {
    const newItem = {
      product: prdId,
      comment: comment,
      rating: parseInt(ratingPoint),
    };
    dispatch(
      addToRatingAsync({
        item: newItem,
        toast,
      })
    );
    setComment("");
    setRatingPoint(0);
  };
  const handleCancel = () => {
    setComment("");
    setRatingPoint(0);
  };

  return (
    <div className="my-10 w-11/12 md:w-10/12 mx-auto ">
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 "
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-dark-900 font-jost md:text-[24px] text-[16px]  !font-sm flex justify-start w-auto lg:mr-20 md:mr-5 mr-0"
                  : "flex justify-start w-auto mr-20 font-jost md:text-[24px] text-[16px] text-light-400 lg:mr-20 md:mr-5 mr-0"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ label, value, desc, info }) => (
            <TabPanel key={value} value={value}>
              {value === "Description" && (
                <>
                  {" "}
                  <h4 className="font-jost font-normal text-dark-900">
                    {label}
                  </h4>
                  <p className="text-xsm font-jost my-3">{desc}</p>
                  {info.map(({ title, text }, idx) => (
                    <React.Fragment key={idx}>
                      <p className="mb-2 font-jost text-xsm text-grey-700 mt-5">
                        {title}
                      </p>

                      <ul className="max-w-md font-jost text-xsm space-y-1 ml-3 text-grey-700 list-disc list-inside">
                        {text.map((item, idx) => (
                          <>
                            {
                              <li key={idx} className="text-grey-700">
                                {item}
                              </li>
                            }
                          </>
                        ))}

                        {/* <li>At least one lowercase character</li>
                        <li>
                          Inclusion of at least one special character, e.g., ! @
                          # ?
                        </li> */}
                      </ul>
                    </React.Fragment>
                  ))}
                </>
              )}
              {value === "Information" && (
                <React.Fragment key={value}>
                  <h4 className="font-jost font-normal text-dark-900">
                    {label}
                  </h4>
                  {info.map(({ title, value }) => (
                    <React.Fragment key={value}>
                      {" "}
                      <p className="text-sm text-dark-900 font-jost my-3">
                        {title}:
                        <span className="text-grey-700 ml-2">{value}</span>
                      </p>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              )}
              {value === "Reviews" && (
                <>
                  {" "}
                  <h4 className="font-jost font-normal text-dark-900">
                    {label}
                  </h4>
                  <p className="text-sm text-dark-700 font-jost my-3">
                    Choose the rating:{" "}
                    {/* <span className="text-grey-700">543</span> */}
                  </p>
                  <select
                    value={ratingPoint}
                    onChange={(e) => {
                      setRatingPoint(e.target.value);
                    }}
                    className={`relative mb-3 z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary 
                      text-black font-jost`}
                  >
                    <option
                      value=""
                      disabled
                      className="text-body dark:text-bodydark"
                    >
                      Select your rating
                    </option>
                    <option value="0" className="text-body dark:text-bodydark">
                      0
                    </option>
                    <option value="1" className="text-body dark:text-bodydark">
                      1
                    </option>
                    <option value="2" className="text-body dark:text-bodydark">
                      2
                    </option>
                    <option value="3" className="text-body dark:text-bodydark">
                      3
                    </option>
                    <option value="4" className="text-body dark:text-bodydark">
                      4
                    </option>
                    <option value="5" className="text-body dark:text-bodydark">
                      5
                    </option>
                  </select>
                  <p className="text-sm text-dark-700 font-jost my-3">
                    Review about this product
                    {/* <span className="text-grey-700">543</span> */}
                  </p>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    rows={3}
                    className="ring-gray-300 text-xsm w-full rounded-lg bg-transparent py-4 pl-6 pr-10 text-black outline-ring-gray-300 ring-1 ring-inset focus:border-primary focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:shadow-none font-jost"
                    defaultValue={""}
                  />
                  <div className="mt-3 flex justify-start">
                    <button
                      onClick={handleCancel}
                      className="mr-3 font-jost rounded-md border border-indigo-600 bg-transparent px-6 py-2 text-xsm font-medium text-black shadow-sm"
                    >
                      Cancel
                    </button>{" "}
                    <button
                      onClick={() => handleSave(singleProduct?.id)}
                      className="rounded-md font-jost border border-transparent bg-indigo-600 px-6 py-2 text-xsm font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Save
                    </button>
                  </div>
                </>
              )}
              {/* {desc} */}

              {/* ===============  add info*/}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default cartInformation;
