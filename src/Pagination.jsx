import { useGlobalContext } from "./Context";

export const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};
