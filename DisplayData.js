import React from "react";

function DisplayData() {


  const products = [
    {
      id: 1,
      title: "onion",
      Category: "veg",
    },
    {
      id: 2,
      title: "Tomato",
      Category: "veg",
    },

    {
      id: 3,
      title: "Apple",
      Category: "Fruit",
    },
    {
      id: 4,
      title: "Orange",
      Category: "Fruit",
    },
  ];


  const user = {
    name: "Vinita",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJ5YjQ6WTRlcIfhMzCEwb8oTXCkVyKZer2R0T0JLbGw&s",
    imageSize: 200,
  };

  return (
    <React.Fragment>
      <h3> {user.name} </h3>
      <img src={user.imageurl} alt="name" style={{ width: user.imageSize, height: user.imageSize }} />
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>

        </tr>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <th>{product.id}</th>
              <th>{product.title}</th>
              <th>{product.Category}</th>
            </tr>


          );
        })}
      </table>


    </React.Fragment>
  );
}
