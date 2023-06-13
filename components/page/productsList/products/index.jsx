import React, { useState } from "react";
import ReactPaginate from "react-paginate";

// Components
import ProductCardsWrapper from "../../../layout/productCardsWrapper";

const Products = ({ productsData }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const productsPerPage = 9;
  const offset = currentPage * productsPerPage;
  const paginatedData = productsData.slice(offset, offset + productsPerPage);

  return (
    <div className="flex flex-col gap-y-[64px]">
      <ProductCardsWrapper
        productsData={paginatedData}
        className="grid-cols-3 lg:gap-[10px] xl:gap-[16px]"
        productImageClassName="max-h-[399px]"
      />
      <ReactPaginate
        pageCount={Math.ceil(productsData.length / 9)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        previousLinkClassName="border border-gray_dark py-[6px] px-[20px] rounded-[8px] text-[14px] leading-[16px]"
        nextLinkClassName="border border-gray_dark py-[6px] px-[20px] rounded-[8px] text-[14px] leading-[16px]"
        pageLinkClassName="page-link border border-gray_dark rounded-[8px]"
        activeLinkClassName="bg-gray_dark text-white"
      />
    </div>
  );
};

export default Products;
