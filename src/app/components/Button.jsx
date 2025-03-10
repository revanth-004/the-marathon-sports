const Button = ({ className = "", text }) => {
  return (
    <button
      className={`mt-5 bg-black-500 rounded-full text-black px-5 text-lg font-oswald border border-black ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
