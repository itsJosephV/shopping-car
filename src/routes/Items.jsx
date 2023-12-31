import React, { useContext, useState } from "react";
import useFetch from "../useFetch";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { CartContext } from "../context/CartContext";
import Masonry from "react-masonry-css";
 
const Items = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [category, setCategory] = useState("");
  const categories = Array.from(new Set(data?.map((item) => item.category)));
  const matches = category
    ? data?.filter((item) => {
        if (item.category !== category) return false;

        return true;
      })
    : data;

  // console.log(itemsPerColumn)

  const { addItem } = useContext(CartContext);

  const numColumns = Math.min(Math.ceil(matches?.length / 3), 3);

  const breakpointColumnsObj = {
    default: numColumns,
    1100: numColumns,
    700: numColumns > 1 ? numColumns - 1 : 1,
    500: 1,
  };

  return (
    <div
      className="grid gap-8 max-w-[850px] mx-auto"
      // style={{ backgroundColor: "red", opacity: "50%" }}
    >
      <div>
        <h1>Shopping</h1>
      </div>
      <div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Todos</option>
          {categories.map((catg) => (
            <option key={catg} value={catg}>
              {catg}
            </option>
          ))}
        </select>
      </div>
      <article className="flex justify-center">
        {error && <div>Error: {error}</div>}
        {loading && <Loading />}
        {/* {[0, 1, 2].map((sectionIndex) => (
          <div className="flex flex-col gap-4" key={sectionIndex}>
            {matches
              ?.slice(
                sectionIndex * itemsPerColumn,
                (sectionIndex + 1) * itemsPerColumn
              )
              .map((item) => (
                <div key={item.id}>
                  <Card
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    rating={item.rating}
                    id={item.id}
                    addItem={() => addItem(item)}
                  />
                </div>
              ))}
          </div>
        ))} */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {matches?.map((item) => (
            <div key={item.id}>
              <Card
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                id={item.id}
                addItem={() => addItem(item)}
              />
            </div>
          ))}
        </Masonry>
      </article>
    </div>
  );
};

export default Items;
