import { useState } from "react";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const products = ["Laptop", "Phone", "Tablet", "Headphones"];

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="mt-2">
        {products
          .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
          .map((p) => (
            <li key={p} className="p-2 border-b">{p}</li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
