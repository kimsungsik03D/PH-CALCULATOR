"use client";

const SelectBox = () => {
  const OPTIONS = [
    { key: "banana", value: "banana", name: "바나나" },
    { key: "apple", value: "apple", name: "사과" },
    { key: "melon", value: "melon", name: "멜론" },
    { key: "orange", value: "orange", name: "오렌지" },
  ];
  const IsOPTIONS = OPTIONS.length == 0;
  return (
    <>
      <div>
        {IsOPTIONS || (
          <select>
            {OPTIONS.map((value) => (
              <option key={value.key} value={value.value}>
                {value.name}
              </option>
            ))}
          </select>
        )}
      </div>
      {/* <button className="border border-inherit pl-3 pr-14 py-1 text-left"> */}
      <button
        className="border border-inherit pl-3 w-40 py-1 text-left"
        type="button"
        id="custom-select-1"
        aria-haspopup="true"
        aria-expanded="true"
        aria-controls="select-list"
      >
        <span>selcetBox</span>
      </button>
      <ul role="listbox" id="custom-select-1">
        <li>옵션1</li>
        <li>옵션2</li>
        <li>옵션3</li>
        <li>옵션4</li>
      </ul>
    </>
  );
};

export default SelectBox;
