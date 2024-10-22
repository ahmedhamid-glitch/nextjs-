const MyProfile = ({ params }) => {
  console.log("params:", params);

  return <div>MyProfile {params.id}</div>;
};

export default MyProfile;
