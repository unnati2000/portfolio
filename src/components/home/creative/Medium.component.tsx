const Medium = () => {
  return (
    <div className="grid grid-cols-3 backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 rounded-lg">
      <div className="col-start-1 col-span-1">
        <img
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*Z_sVVwgToNMUEwzu8KaGhA.png"
          className="h-full object-cover rounded-tl-lg rounded-bl-lg"
        />
      </div>

      <div className="flex gap-2 flex-col col-start-2 col-span-2 p-4">
        <h1 className="text-xl font-semibold text-indigo-400">
          The best approach to upload a large file to the S3 bucket
        </h1>
        <p className="text-sm text-white">
          I recently had to upload a huge file to my S3 bucket and was exploring
          the most optimal method to do so. through multiple resources and
          experimentation I was successfully able to accomplish that task.
          Searching for resources and implementation was quite a tedious
          process. Hence, I thought I’d share the implementation method I used
          for this purpose
        </p>
        <button className="bg-indigo-400 text-white rounded-md py-1">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Medium;
