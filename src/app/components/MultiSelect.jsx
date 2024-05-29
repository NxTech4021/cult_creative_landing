"use client";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const MultiSelect = ({
  fieldName,
  label,
  placeholder,
  curData,
  selectedItem,
  setSelectedItem,
  errors,
  touched,
  setFieldValue,
}) => {
  const [open, setOpen] = useState(false);
  const [data] = useState(curData);
  const ref = useRef(null);

  const handleSelect = (name) => {
    if (selectedItem.includes(name)) {
      const index = selectedItem.indexOf(name);
      selectedItem.splice(index, 1);
      setSelectedItem([...selectedItem]);
      return;
    }
    setSelectedItem([...selectedItem, name]);
  };

  const handleDeleteItem = (name) => {
    if (open) {
      setOpen(true);
      const index = selectedItem.indexOf(name);
      selectedItem.splice(index, 1);
      setSelectedItem([...selectedItem]);
    } else {
      setOpen(false);
      const index = selectedItem.indexOf(name);
      selectedItem.splice(index, 1);
      setSelectedItem([...selectedItem]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => document.removeEventListener("onclick", handleClickOutside);
  }, []);

  // Do not remove the braces in this arrow function, or else "TypeError: destroy is not a function"
  useEffect(() => {
    setFieldValue(fieldName, selectedItem);
  }, [selectedItem, setFieldValue, fieldName]);

  return (
    <div className="flex flex-col gap-2">
      <p
        className="text-[0.875rem]"
        style={{ fontWeight: 500, lineHeight: "1.5rem" }}
      >
        {label}
      </p>
      <fieldset
        name={fieldName}
        className={`bg-slate-100 text-black relative rounded-full w-[100%] bg-transparent border-2 ${
          errors[fieldName] && touched[fieldName] && "border-red-500"
        }`}
        ref={ref}
      >
        {/* Button */}
        <div
          className="flex flex-row justify-between w-[100%] py-[0.45rem] px-4 cursor-pointer text-slate-100 text-sm"
          style={{
            alignItems: "center",
          }}
          onClick={() => setOpen(true)}
        >
          {selectedItem.length > 0 ? (
            <div className="flex gap-1 flex-wrap items-center z-50">
              {selectedItem.map((elem, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-3 border-2 border-cyan-500 p-1 px-3 rounded-full text-xs items-center"
                >
                  <p>{elem}</p>
                  <Icon
                    className="z-50 hover:text-red-700 transition-all ease-in-out duration-150"
                    icon="streamline:delete-1-solid"
                    width={8}
                    onClick={() => handleDeleteItem(elem)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>{placeholder}</p>
          )}
          <Icon icon="solar:alt-arrow-down-bold" />
        </div>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute left-0 bg-slate-50 my-1 rounded-md p-2 w-[100%] max-h-52 overflow-scroll animate-form-animation">
            <div className="flex flex-col gap-3">
              {data.length < 1 ? (
                <p>No data.</p>
              ) : (
                data.map((elem, i) => (
                  <div
                    key={i}
                    className={`hover:bg-slate-200 cursor-pointer p-2 rounded-md transition-all ease-in-out duration-200 flex flex-row justify-between`}
                    onClick={() => handleSelect(elem.name)}
                  >
                    <p>{elem.name}</p>
                    {selectedItem.includes(elem.name) && (
                      <Icon icon="mdi:tick" />
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default MultiSelect;
