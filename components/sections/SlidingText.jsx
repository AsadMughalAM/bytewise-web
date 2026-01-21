"use client";
import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_SERVICES } from "@/app/service/query";

const SlidingText = () => {
  const { data, loading, error } = useQuery(GET_ALL_SERVICES);

  if (loading) return null;
  if (error) return null;

  const services = data?.serviceCollection?.items || [];
  const items = services.map((s) => s.title);

  return (
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <div className="sliding-text-one__track">
          <ul className="sliding-text-one__list list-unstyled">
            {items.map((item, index) => (
              <li key={`original-${index}`}>
                <h2 data-hover={item} className="sliding-text-one__title">
                  {item}
                </h2>
                <span className="icon-star"></span>
              </li>
            ))}
          </ul>
          {/* Duplicated list for seamless scrolling */}
          <ul className="sliding-text-one__list list-unstyled">
            {items.map((item, index) => (
              <li key={`duplicate-${index}`}>
                <h2 data-hover={item} className="sliding-text-one__title">
                  {item}
                </h2>
                <span className="icon-star"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SlidingText;
