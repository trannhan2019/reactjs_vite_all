const InputText = (props) => {
  const { type, name, placeholder, form } = props;

  return (
    <div className="mb-2">
      <label htmlFor={name + '-id'} className="sr-only">
        {placeholder}
      </label>
      <input
        id={name + '-id'}
        name={name}
        type={type}
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
        {...form.register(`${name}`)}
      />
    </div>
  );
};

export default InputText;
