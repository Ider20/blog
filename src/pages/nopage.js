import React from "react";
import { Router } from "next/router";
import { ErrorPage } from "../Components/ErrorPage";

const NoPage = () => {
  return (
    <div>
      <ErrorPage />
    </div>
  );
};

export default NoPage;
