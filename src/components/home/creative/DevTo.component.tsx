const DevTo = () => {
  return (
    <div className="border-2 border-indigo-400 rounded-lg flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold text-indigo-400">
        Best of VS Code extensions{' '}
      </h1>
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--ylcuk89W--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h53t6p3kmfjti2hf1i6l.png"
        className="rounded-md"
      />
      <p className="text-sm text-white">
        The interview is the first interaction of the candidates with the
        company. The company should put its best foot forward so that even
        unsuccessful.
      </p>

      <button className="bg-indigo-400 rounded-md text-white py-1">View</button>
    </div>
  );
};
export default DevTo;
