import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
function cartInformation() {
  const [activeTab, setActiveTab] = React.useState("Description");
  const data = [
    {
      label: "Description",
      value: "Description",
      desc: `Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.`,
      info: [
        {
          title: "Features",
          text: [
            "Front button placket",
            "Adjustable sleeve tabs",
            "Babaton embroidered crest at placket and hem",
          ],
        },
        {
          title: "Materials Care",
          text: [
            "Content: 100% LENZING™ ECOVERO™ Viscose",
            "Care: Hand wash",
            "Imported",
          ],
        },
      ],
    },
    {
      label: "Additional Information",
      value: "Information",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      info: [
        {
          title: "Availability",
          value: "543",
        },
        {
          title: "Size",
          value: "XXL,  XL,  L, M, S",
        },
        {
          title: "Weight",
          value: "1.2 kg",
        },
        {
          title: "Color",
          value: "Red, Green, Pink, Yellow, Black",
        },
        {
          title: "Material and Fabric",
          value: "Cotton,  Linen,  Silk,  Chiffon,  Velvet",
        },
        {
          title: "Care Instructions:",
          value: "Great Styles Prodcuts",
        },
        {
          title: "Fit and Cut",
          value: "100% Fit",
        },
      ],
    },
    {
      label: "Reviews",
      value: "Reviews",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
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
                    Product Avalability:{" "}
                    <span className="text-grey-700">543</span>
                  </p>
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
