export const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const posts = await res.json();

  return posts;
};

const Home = async () => {
  const allPosts = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allPosts.map((post, i) => (
        <div>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
          <hr />
        </div>
      ))}
    </main>
  );
};

export default Home;

// export const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog/posts", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const posts = await res.json();

//   return posts;
// };

// const Home = async () => {
//   const allPosts = await getData();
//   if (Array.isArray(allPosts)) {
//     return <div>Error: Unable to fetch posts</div>;
//   }
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {allPosts.data.map((post, i) => (
//         <>
//           <h1>{post.title}</h1>
//           <h1>{post.category}</h1>
//           <hr />
//         </>
//       ))}
//     </main>
//   );
// };

// export default Home;
