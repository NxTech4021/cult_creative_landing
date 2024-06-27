"use client";

import { useState } from "react";
import { getSheetData, createData } from "./google-sheet-action";

const Page = () => {
  const [value, setValue] = useState([]);
  const [name, setName] = useState();

  const handleOnGetSheetDataClick = async () => {
    const response = await getSheetData();

    const data = response.data;

    setValue([...data]);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      const data = await createData(name);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleChangeName}
          className=" text-black"
        />
        <button type="submit">Insert into spreadsheet</button>
      </form>
      <button onClick={handleOnGetSheetDataClick}>Get Sheet Data</button>
      {value}
    </>
  );
};

export default Page;
