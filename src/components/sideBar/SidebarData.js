import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const ServiceData = [
  {
    title: "Transition Planning",
    path: "/transition-planning",
    iconClosed: (
      <RiIcons.RiArrowDownSFill style={{ backgroundColor: "#000000" }} />
    ),
    iconOpened: (
      <RiIcons.RiArrowUpSFill style={{ backgroundColor: "#000000" }} />
    ),
    subNav: [
      {
        title: "Education",
        path: "/transition-planning/education",
      },
      {
        title: "Employment",
        path: "/transition-planning/employment",
      },
      {
        title: "Independent Living",
        path: "/transition-planning/independent-living",
      },
      {
        title: "Integrated Communities",
        path: "/transition-planning/employment",
      },
      {
        title: "Know Your Rights",
        path: "/transition-planning/know-your-rights",
      },
    ],
  },
  {
    title: "Community",
    path: "/community",
    iconClosed: (
      <RiIcons.RiArrowDownSFill style={{ backgroundColor: "#000000" }} />
    ),
    iconOpened: (
      <RiIcons.RiArrowUpSFill style={{ backgroundColor: "#000000" }} />
    ),
    subNav: [
      {
        title: "Virtual Communities",
        path: "/community/virtual-communities",
        cName: "sub-nav",
      },
      {
        title: "Your Community",
        path: "/community/your-community",
        cName: "sub-nav",
      },
      {
        title: "Mentorship",
        path: "/community/mentorship",
        cName: "sub-nav",
      },
      {
        title: "Start Your Own Community",
        path: "/community/start-your-own-community",
        cName: "sub-nav",
      },
    ],
  },
];

const ProfileData = [
  {
    title: "View Profile",
    path: "/profile",
  },
  {
    title: "Saved Items",
    path: "/saved-items",
  },
  {
    title: "Recommendations",
    path: "/recommendations",
  },
];

export { ServiceData, ProfileData };
