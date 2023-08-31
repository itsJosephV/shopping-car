import React, { useState } from "react";
import useFetch from "../useFetch";
import Card from "../components/Card";

const Home = () => {
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
  const itemsPerColumn = Math.ceil(matches?.length / 3);

  return (
    <div
      className="grid gap-8 max-w-[850px] mx-auto"
      // style={{ backgroundColor: "red", opacity: "50%" }}
    >
      <div>
        <h1>Shopping car</h1>
      </div>
      <div>
        <label
          for="countries"
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

          {/* <option value="jewelery">Jewelery</option> */}
        </select>
      </div>
      <article className="flex flex-col-3 gap-4 mx-auto">
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {[0, 1, 2].map((sectionIndex) => (
          <div className="flex flex-col gap-4" key={sectionIndex}>
            {matches
              ?.slice(
                sectionIndex * itemsPerColumn,
                (sectionIndex + 1) * itemsPerColumn
              )
              .map(
                ({
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                }) => (
                  <div key={id}>
                    <Card
                      title={title}
                      price={price}
                      description={description}
                      category={category}
                      image={image}
                      rating={rating}
                    />
                  </div>
                )
              )}
          </div>
        ))}
      </article>
    </div>
  );
};

export default Home;
