import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

export const TableAxios = ({ addProdutForm, product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Use effect");
    getProducts();
  }, []);

  const urlBase = "https://fakestoreapi.com/products";
  const getProducts = async () => {
    const resp = await axios.get(urlBase);
    const data = await resp.data;
    // console.log(data);
    setProducts(data);
  };

  const deleteProducts = (rowsDeleted) => {
    const idsToDelete = rowsDeleted.data.map((d) => products[d.dataIndex].id); // array of all ids to to be deleted
    console.log(idsToDelete);
  };

  const updateProdut = (id) => {
    const productNow = products.filter((product) => product.id === id);
    console.log(productNow);
  };

  const addProdut = (product) => {
    console.log("Me ejecute Table");
    const newProduct = {
      id: 21,
      ...product,
    };

    setProducts([...products, newProduct]);
  };

  // addProdutForm(addProdut(product));

  const colums = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
      },
    },
    { name: "title", label: "TITLE", options: { filter: false, sort: false } },
    { name: "price", label: "PRICE", options: { filter: false, sort: false } },
    {
      name: "category",
      label: "CATEGORY",
      options: { filter: true, sort: false },
    },
    {
      name: "description",
      label: "DESCRIPTION",
      options: { filter: false, sort: false },
    },
    {
      name: "delete",
      options: {
        filter: false,
        sort: false,
        empty: true,

        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                console.log(value);
                console.log(tableMeta.rowData[0]);
                // console.log(updateValue);
                const dataNew = products.filter(
                  (p) => p.id !== tableMeta.rowData[0]
                );
                console.log(dataNew);
                setProducts(dataNew);
              }}
            >
              Delete
            </button>
          );
        },
      },
    },
    {
      name: "edit",
      options: {
        filter: false,
        sort: false,
        empty: true,

        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                updateProdut(tableMeta.rowData[0]);
              }}
            >
              Edit
            </button>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    onRowsDelete: (rowsDeleted, data, dataIndex) => {
      deleteProducts(rowsDeleted);
    },
  };

  //   RETURN
  return (
    <>
      <h5>TableAxios</h5>
      <button className="btn btn-primary" onClick={addProdut}>
        Add product
      </button>
      <MUIDataTable
        title={"List Products of store"}
        columns={colums}
        data={products}
        options={options}
      />
    </>
  );
};
