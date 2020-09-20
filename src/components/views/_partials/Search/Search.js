import React from "react";

function Search() {
  return (
    <div className="search-popup">
      <div className="holder">
        <div className="col">
          <div className="block-holder">
            <a href="/" className="close-btn">
              <i className="icon-close" />
            </a>
            <form action="#" className="submit-form">
              <fieldset>
                <label htmlFor="search" className="icon-search" />
                <input type="search" id="search" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
