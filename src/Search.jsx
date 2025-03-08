import { useGlobalContext } from "./Context";

export const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div>
        <h1>Deepak Tech News Website</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search Here"
              value={query}
              onChange={(event) => searchPost(event.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};
