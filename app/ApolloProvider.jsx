"use client";

import { ApolloProvider } from "@apollo/client/react";
import client from "./Apollo-Client";
import React from "react";

const ApolloProviderWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
