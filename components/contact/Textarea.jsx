export default function Textarea({ name, placeholder, handleInputChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      cols="30"
      rows="10"
      className="p-2 bg-white  placeholder:text-gray-400 rounded-sm"
      onChange={(event) => handleInputChange(event.target)}
    ></textarea>
  );
}
