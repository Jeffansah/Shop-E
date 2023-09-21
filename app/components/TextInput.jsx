"use client";

const TextInput = ({ string, placeholder, error, onUpdate }) => {
  return (
    <>
      <input
        type="text"
        placeholder="placeholder"
        className="w-full bg-white text-gray-800 text-sm border border-[#272727] p-3 placeholder:text-gray-500 focus:outline-none"
        value={string || ""}
        onChange={(e) => onUpdate(e.target.value)}
        autoComplete="off"
      />
      <div className="p-2 mt-1 bg-red-200 max-w-max rounded-sm text-red-500 text-xs font-semibold">
        {error ? error : null}
      </div>
    </>
  );
};

export default TextInput;
