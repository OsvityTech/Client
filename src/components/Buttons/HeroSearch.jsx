import Search from "../../assets/search_icon.svg";
function HeroSearch({ label, onClick }) {
  return (
    <div className="relative lg:w-md lg:mt-18 sm:w-3/4 w-full sm:mt-14 sm:mb-8 my-6 ">
      <input
        type="text"
        placeholder="Search opportunity"
        className="border p-2 w-full pr-10 rounded-3xl border-[#164481] h-14"
      />
      <img
        src={Search}
        alt="Search"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10"
      />
    </div>
  );
}

export default HeroSearch;
