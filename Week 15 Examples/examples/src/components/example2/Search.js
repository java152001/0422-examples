import React, { useState } from "react";
import useDataApi from "./UseDataApi";
import Pagination from "./Pagination";

const Search = () => {
  const [query, setQuery] = useState("MIT");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [{ data, isLoading }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=MIT",
    {
      hits: [],
    }
  );

  function paginate(items, pageNumber, pageSize) {
    if (items.length > 0) {
      const start = (pageNumber - 1) * pageSize;
      let page = items.slice(start, start + pageSize);
      return page;
    }
  }

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
  };

  let page = data.hits;

  if (page.length >= 1) {
    page = paginate(page, currentPage, pageSize);
    console.log('pages: ', page);
    console.log(`currentPage: ${currentPage}`);
  }

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        // Part 1, step 2 code goes here
        <ul className="list-group">
          {page.map((item) => (
            <li key={item.objectID} className="list-group-item">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
      <Pagination
        items={data.hits}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      ></Pagination>
    </>
  );
};

export default Search;
