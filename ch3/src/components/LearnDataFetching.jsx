const getData = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};
const LearnDataFetching = async () => {
  const data = await getData();
  console.log("Data", data);

  return (
    <>
      {data.map((post, i) => (
        <div key={i}>
          <h1>{post.title}</h1>
          <h1>{post.price}</h1>
          <hr />
        </div>
      ))}
    </>
  );
};

export default LearnDataFetching;
