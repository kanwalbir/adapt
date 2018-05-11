import React from "react";

const Book = ({ title, author, year, catagory }) => {
  return (
    <div>
      <h3>
        {title} - Written By {author} - In {year}
      </h3>
    </div>
  );
};

export default Book;
