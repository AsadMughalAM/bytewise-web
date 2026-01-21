"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_SERVICES } from "@/app/service/query";
import { GET_ALL_PORTFOLIO } from "@/app/portfolio/query";

export const useMenuData = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { data: servicesData } = useQuery(GET_ALL_SERVICES);
  const { data: portfolioData } = useQuery(GET_ALL_PORTFOLIO);

  useEffect(() => {
    const services = servicesData?.serviceCollection?.items || [];
    const portfolios = portfolioData?.portfolioCollection?.items || [];

    const items = [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      {
        title: "Portfolio",
        href: "/portfolio",
        dropdown: [
          { title: "All Projects", href: "/portfolio" },
          ...portfolios.map((project) => ({
            title: project.title,
            href: `/portfolio/${project.slug}`,
          })),
        ],
      },
      {
        title: "Services",
        href: "/service",
        dropdown: [
          { title: "Our Services", href: "/service" },
          ...services.map((service) => ({
            title: service.title,
            href: `/service/${service.slug}`,
          })),
        ],
      },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ];

    setMenuItems(items);
  }, [servicesData, portfolioData]);

  return menuItems;
};
