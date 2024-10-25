import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { HEADER_BASE_ROUTE } from "@components/header";
import { Icon } from "@components/icon";
import { Button } from "@components/button";

import { ERROR_PAGE_TEXT } from "./index";
import "./error-page.scss";

const ErrorPage: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <main className="error-page">
      <div className="error-page__404">
        <span>{ERROR_PAGE_TEXT.errorCodeChar}</span>
        <Icon icon={ERROR_PAGE_TEXT.icon} />
        <span>{ERROR_PAGE_TEXT.errorCodeChar}</span>
      </div>
      <div className="error-page__text">
        <h1 className="error-page__title">{ERROR_PAGE_TEXT.title}</h1>
        <h2 className="error-page__subtitle">{ERROR_PAGE_TEXT.subtitle}</h2>
        <Button
          label={ERROR_PAGE_TEXT.button}
          onClick={() => navigate(HEADER_BASE_ROUTE)}
        />
      </div>
    </main>
  );
};

export default ErrorPage;
