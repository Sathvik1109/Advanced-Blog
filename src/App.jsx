import authService from "./appwrite/auth";

const App = () => {
  console.log(authService);
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <div>
      <h1>Blog post</h1>
    </div>
  );
};

export default App;
