let Illustration = 
() => {
  return (
    <div className="col-span-5 mt-4">
      <div
        style={{
          background: `url('https://media.istockphoto.com/id/1158762452/vector/team-business-goals-active-employees-social-media-marketing.jpg?s=612x612&w=0&k=20&c=snF7iP0bsaAxnarO73EX1-Cjdb8FwUiSocNW_YWpwY8=')`,
          backgroundSize: `cover`,
        }}
        className="w-full h-60 p-3"
      >
        <div className="text-lg font-bold">Want more?</div>
        <div className="flex justify-between">
          <span>
            <span className="text-blue-800 font-bold">Increase</span> your power.
          </span>
          <span className="text-3xl font-bold">
            $49<span></span>
            <span className="text-gray-600 text-base">/year</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
