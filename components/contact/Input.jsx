export default function Input({ type, name, placeholder, handleInputChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-2 w-full bg-white  placeholder:text-gray-400 rounded-sm"
      onChange={(event) => handleInputChange(event.target)}
    />
  );
}
