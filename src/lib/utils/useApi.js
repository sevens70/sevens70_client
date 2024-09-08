import { useState } from "react";
// const productsData = [
//   {
//     id: 1,
//     name: "Ribbed modal T-shirt",
//     img: "/category/cate1.png",
//     discount: "10% off",
//     price: "45.00",
//     disc_price: "45.00",
//     rating: "5.0",
//     tag: "shirt",
//     category: "Man",
//     prd_category: "Dress",
//     color: ["light pink", "blue"],
//     brand: "Abs Fashion",
//     size: ["S", "M", "L", "XL", "XXL"],
//     stock: "In Stock",
//   },
//   {
//     id: 2,
//     name: "Loose Fit Hoodie",
//     price: "45.00",
//     discount: "10% off",
//     disc_price: "45.00",
//     rating: "5.0",
//     tag: "shirt",
//     img: "/category/cate2.png",
//     category: "Woman",
//     prd_category: "Sneaker",
//     color: ["blue", "light purple"],
//     brand: "Squire Style",
//     size: ["S", "M", "L", "XL", "XXL", "XXXL"],
//     stock: "In Stock",
//   },
//   {
//     id: 3,
//     name: "Ribbed Tank Top",
//     price: "45.00",
//     disc_price: "45.00",
//     discount: "10% off",
//     rating: "5.0",
//     tag: "shirt",
//     img: "/category/cate3.png",
//     category: "New Arrival",
//     prd_category: "Handbag",
//     color: ["light purple", "pele"],
//     brand: "Nice Fashion",
//     size: ["S", "M", "L", "XL"],
//     stock: "Out of Stock",
//   },
//   {
//     id: 4,
//     name: "V-neck linen T-shirt",
//     price: "45.00",
//     disc_price: "45.00",
//     discount: "10% off",
//     rating: "5.0",
//     tag: "shirt",
//     img: "/category/cate4.png",
//     category: "Kids",
//     prd_category: "Cosmetics",
//     color: ["pele", "gray"],
//     brand: "Xozo Fashion",
//     size: ["S", "M", "L", "XL", "XXL", "XXXL"],
//     stock: "In Stock",
//   },
//   {
//     id: 5,
//     name: "V-neck linen T-shirt",
//     price: "45.00",
//     disc_price: "45.00",
//     discount: "10% off",
//     rating: "5.0",
//     tag: "shirt",
//     img: "/category/cate4.png",
//     category: "Winter Collection",
//     prd_category: "Smart Watch",
//     color: ["gray", "jean blue", "dark blue", "red"],
//     brand: "Style Zone",
//     size: ["S", "M", "L", "XL", "XXL"],
//     stock: "Out of Stock",
//   },
// ];
const productsData = [
  {
    id: 1,
    name: "Ribbed modal T-shirt",
    img: "/category/cate1.png",
    discount: "10% off",
    price: "45.00",
    disc_price: "45.00",
    rating: "5.0",
    tag: "shirt",
    categories: ["women cloth"],
    prd_category: "Dress",
    // color: ["light pink", "blue"],
    colors: ["green", "purple", "gray", "red", "pink"],
    brand: "Abc Fashion",
    size: ["s", "l", "m", "xl", "xxl"],
    stock: "In Stock",
    createdAt: "10/12/2023",
  },
  {
    id: 2,
    name: "Loose Fit Hoodie",
    price: "41.00",
    discount: "10% off",
    disc_price: "45.00",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate2.png",
    categories: ["women cloth"],
    prd_category: "Sneaker",
    // color: ["blue", "light purple"],
    colors: ["green", "purple", "gray", "red", "pink"],
    brand: "Squire Style",
    size: ["s", "l", "m", "xl", "xxl"],
    stock: "In Stock",
    createdAt: "15/08/2023",
  },
  {
    id: 3,
    name: "Ribbed Tank Top",
    price: "35.00",
    disc_price: "45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate3.png",
    categories: ["men cloth"],
    prd_category: "Handbag",
    // color: ["light purple", "pele"],
    colors: ["green", "purple", "gray", "red", "pink"],
    brand: "Nice Fashion",
    size: ["s", "l", "m", "xl", "xxl"],
    stock: "Out of Stock",
    createdAt: "10/11/2023",
  },
  {
    id: 4,
    name: "V-neck linen T-shirt",
    price: "55.00",
    disc_price: "45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate4.png",
    categories: ["men cloth"],
    prd_category: "Cosmetics",
    // color: ["pele", "gray"],
    colors: ["green", "purple", "gray", "red", "pink"],
    brand: "Xozo Fashion",
    size: ["s", "l", "m", "xl", "xxl"],
    stock: "In Stock",
    createdAt: "10/12/2024",
  },
  {
    id: 5,
    name: "V-neck linen T-shirt",
    price: "90.00",
    disc_price: "75.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate4.png",
    categories: ["men cloth"],
    prd_category: "Smart Watch",
    // color: ["gray", "jean blue", "dark blue", "red"],
    colors: ["green", "purple", "gray", "red", "pink"],
    brand: "Style Zone",
    size: ["s", "l", "m", "xl", "xxl"],
    stock: "Out of Stock",
    createdAt: "04/06/2023",
  },
];
export const useApi = () => {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [mensProduct, setMensProduct] = useState([]);
  const [womensProduct, setWomensProduct] = useState([]);

  const getDataFromSupabase = async () => {
    let data = productsData;
    if (data) {
      setProducts(data);
    }
  };
  const getFilteredData = async (query) => {
    let data = productsData;
    if (data) {
      setFilterData(data);
    }
  };

  const getSingleProduct = async (id) => {
    // let {data, error} = await supabase.from('product').select('*').eq('id', id);
    let data = productsData?.find((item) => item.id === id);
    if (data) {
      setSingleProduct(data);
    }
  };
  const getMensClothing = async () => {
    let data = productsData;
    if (data) {
      setMensProduct(data);
    }
  };
  const getWomensClothing = async () => {
    let data = productsData;
    if (data) {
      setWomensProduct(data);
    }
  };

  return {
    products,
    getDataFromSupabase,
    filterData,
    getFilteredData,
    singleProduct,
    getSingleProduct,
    mensProduct,
    getMensClothing,
    womensProduct,
    getWomensClothing,
  };
};
