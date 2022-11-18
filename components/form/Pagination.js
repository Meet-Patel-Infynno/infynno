import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
  };
  return (
    <ReactPaginate
      renderOnZeroPageCount={null}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      marginPagesDisplayed={3}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(20 / 5)}
      containerClassName={"flex justify-center items-center gap-x-4"}
      pageClassName={
        "bg-white h-9 w-9 hover:bg-orange-400 hover:text-white flex justify-center items-center border border-solid border-[#E4E4EB] rounded-md"
      }
      pageLinkClassName={""}
      previousClassName={
        "prev-btn bg-white w-9 h-9 hover:bg-orange-400 hover:text-white flex justify-center items-center rounded-md"
      }
      previousLinkClassName={""}
      nextClassName={"next-btn"}
      nextLinkClassName={
        "w-9 h-9 bg-white hover:bg-orange-400 hover:text-white flex justify-center items-center rounded-md"
      }
      breakClassName={
        "bg-white border border-solid hover:bg-orange-400 hover:text-white border-[#E4E4EB] rounded-md w-9 h-9 flex justify-center items-center"
      }
      breakLinkClassName={""}
      activeClassName={
        "text-white border-[2px] border-solid border-orange-400 bg-orange-400"
      }
      onPageChange={handlePageClick}
    />
  );
};

export default Pagination;
