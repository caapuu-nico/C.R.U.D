import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-300  p-10">
      <h1 className="text-5xl py-2 font-bold">C.R.U.D📝</h1>
      <p className="text-md text-slate-900">
      Welcome to our data management app! With our platform, you can create, read, update and delete data easily and efficiently. Using cutting-edge technologies like Mongoose, Express, and Node.js on the backend, we ensure optimal performance and a smooth experience. On the frontend, we have integrated React and Tailwind CSS to give you a modern and highly customizable user interface. This means you can view and manipulate your data in the way that best suits your needs, with an elegant and functional aesthetic. Whether you are managing a small database or managing large sets of information, our application provides you with the necessary tools to perform your C.R.U.D tasks quickly and efficiently. Join us and discover a new way to manage your data with ease and style!
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;