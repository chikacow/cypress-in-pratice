const InputField = ({ placeholder, onChange }) => {
    return (
      <input
        type="text"
        className="border p-2 rounded"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  };
  
  export default InputField;
  