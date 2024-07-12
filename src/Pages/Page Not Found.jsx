import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="container max-w-7xl text-center mx-auto justify-center items-center py-16">
        <h1 className="text-red-700 font-bold text-4xl">404 Page Not Found</h1>
        <p>Ngapain cari yang ga ada, <Link to='/' className="underline">kembali ke home</Link></p>
      </div>
    </>
  );
}

export default PageNotFound