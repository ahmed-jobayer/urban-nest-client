const Categories = () => {
  const categories = [
    {
      name: "Accent Tables",
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Sofas",
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Chairs",
      img: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl border-b-2 pb-2">Categories</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border rounded-lg shadow hover:shadow-md transition-shadow bg-[#EDE9E9]"
          >
           
            <img
              src={category.img}
              alt={category.name}
              className="w-20 h-20 object-cover rounded-md"
            />
          
            <h3 className="text-lg font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
