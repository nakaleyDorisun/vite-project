type PropsType = {
  value: string;
  getValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({ value, getValue }: PropsType) => {
  return (
    <>
      <button
        onClick={() => {
          if (getValue) getValue("");
        }}
      >
        x
      </button>
      <input
        type="text"
        onChange={(e) => {
          if (getValue) getValue(e.target.value);
        }}
        value={value}
      />
    </>
  );
};
