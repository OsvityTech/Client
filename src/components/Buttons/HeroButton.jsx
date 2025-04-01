function HeroButton({ label, onClick }) {
    return (
      <button
        className="border border-[#61B7E6] rounded-full px-8 py-2 text-[#164481] hover:bg-[#61B7E6] hover:text-white transition"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  
  export default HeroButton;
  