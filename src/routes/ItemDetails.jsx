import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loading from "../components/Loading";
import { CartContext } from "../context/CartContext";

const ItemDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const { addItem, toast } = useContext(CartContext);

  // console.log(data)

  return (
    <>
      {error && <div>Error: {error}</div>}
      {loading && <Loading />}
      {data && (
        <div className="flex flex-col lg:flex-row gap-4 mt-10 h-full">
          <div className="w-full border border-gray-200 rounded-lg shadow bg-white flex justify-center">
            <img
              className="p-8 rounded-t-lg object-contain"
              src={data.image}
              alt="product image"
            />
          </div>
          <div className="w-full h-auto flex flex-col gap-4  relative">
            <div className="flex justify-between items-center">
              <p className="capitalize">{data.category}</p>
              <button
                className="bg-blue-600 p-2 rounded-lg text-white"
                onClick={() => {
                  addItem(data);
                  toast("item added");
                }}
              >
                Add to cart
              </button>
            </div>
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900">
              {data.title}
            </h5>
            <p>{data.rating.rate}</p>
            <p className="text-3xl font-bold">{data.price}€</p>
            <p className="text-1xl text-base text-gray-700">
              {data.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetails;
