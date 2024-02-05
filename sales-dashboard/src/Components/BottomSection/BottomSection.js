import Transactions from "../Transactions/Transactions";
import Illustration from "../Illustration/Illustration";
let BottomSection = () => {
  return (
    <div className="grid grid-cols-12 mt-8 gap-8">
      <div className="col-span-7">
        <div className=" flex justify-between">
          <div>
            <span className="text-xl font-bold mb-5 pr-4">Transactions</span>
            <span className="text-sm text-gray-400 border-l-2 pl-4">
              456 total
            </span>
          </div>
          <span className="text-baseline text-blue-500">View All</span>
        </div>
        <Transactions />
      </div>
      <div className="col-span-5">
        <div className=" flex justify-between">
          <div>
            <span className="text-xl font-bold mb-5">Wow!</span>
          </div>
          <span className="text-baseline text-blue-500">Have a promocode?</span>
        </div>
        <Illustration />
      </div>
    </div>
  );
};

export default BottomSection;
