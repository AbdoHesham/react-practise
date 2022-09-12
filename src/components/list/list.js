import { useRef, useState } from "react";
// import { useEffect } from "react";
import ListItem from "./listitem";

function List() {
  const textInp = useRef("");
  const [products, setProducts] = useState([
    { id: 1, name: "html" },
    { id: 2, name: "css" },
    { id: 3, name: "js" },
  ]);

  const [showSubmitBtn, setSubmitBtn] = useState(false);
  // const [inputObj, setInputObj] = useState({});

  const addNewProduct = (productName) => {
    setProducts((prev) => [
      ...prev,
      { id: prev.length + 1, name: productName },
    ]);
  };
  const handleDelete = (itemId) => {
    setProducts(products.filter((x) => x.id !== itemId));
    console.log("handle Delete", products);
  };
  const handleUpdate = (item) => {
    textInp.current.value = item.name;
    setSubmitBtn(true);
    // setInputObj(item)
    // setProducts(
    //   prev.contains(item.id) ? (item, (textInp.current.value = "")) : null
    // );
  };
  const submitUpdate = () => {
    let newList = products.map((item) => {
      if (item.name === textInp.current.value) {
        const updatedItem = {
          ...item,
          name: textInp.current.value,
        };

        return updatedItem;
      }

      return item;
    });

    setProducts(newList);
    setSubmitBtn(false);
  };
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json));
  // }, []);

  const li = products.map((x) => {
    return (
      <>
        <ListItem id={x.id} title={x.name} />
        <button
          onClick={() => {
            handleDelete(x.id);
          }}
        >
          remove
        </button>
        <button
          onClick={() => {
            handleUpdate(x);
          }}
        >
          edit
        </button>
      </>
    );
  });
  return (
    <>
      <input type="text" ref={textInp} />
      <button
        onClick={() => {
          !showSubmitBtn
            ? addNewProduct(textInp.current.value)
            : submitUpdate();
        }}
      >
        {!showSubmitBtn ? "add" : "submit Update"}
      </button>

      {products.length === 0 ? <h1> No Data Found </h1> : <ul>{li}</ul>}
    </>
  );
}

export default List;
