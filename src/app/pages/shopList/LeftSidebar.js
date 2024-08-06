'use client'
import React from 'react'
import CommonCategory from './CommonCategory';
const prdData = {
  category: "Prodcut Category",
  data:   [
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
  ]
};
const colorData = {
  category: "Filter by color",
  data:   [
    {
      title: "Light Brown (10)",
      value: 3,
      color: "#B5651D"
    },
    {
      title: "Blue(7)",
      value: 5,
      color: "red"
    },
    {
      title: "Light purploe(10)",
      value: 8,
      color: "green"
    },
    {
      title: "Pele Gray",
      value: 7,
      color: "blue"
    },
    {
      title: "Jean Blue",
      value: 6,
      color: "#B5651D"
    },
    {
      title: "Dark blue",
      value: 2,
      color: "yellow"
    },
    {
      title: "Red",
      value: 3,
      color: "green"
    },
  ]
};
const sizeData = {
  category: "Filter by size",
  data:   [
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
  ]
};
const brandData = {
  category: "Brand",
  data:   [
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
  ]
};
function LeftSidebar() {
  return (
    <div>
        <CommonCategory data={prdData}/>
        <CommonCategory data={colorData}/>
        <CommonCategory data={sizeData}/>
        <CommonCategory data={brandData}/>
    </div>
  )
}

export default LeftSidebar