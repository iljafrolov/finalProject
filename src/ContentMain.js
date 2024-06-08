import React from "react";

import { Content } from "./Content";
import { PaginationButtons } from "./PaginationButtons";
import { Cards } from "./Cards";
import { useTodos } from "./hooks/useTodos";

export const ContentMain = () => {
  /*
    custom hook reuse logic - not state
    so if you would useTodos and set pages in PaginationButtons it would have different pages and todos
  */
  const { setPage, finalPage, page, todos } = useTodos();

  return (
    <Content>
      <Cards data={todos} />
      <PaginationButtons setPage={setPage} finalPage={finalPage} page={page} />
    </Content>
  );
};