import React, { useState } from 'react';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { Tooltip } from 'react-tooltip'

const InputRateCard = () => {
  const [tableData, setTableData] = useState(Array.from({ length: 0 }, () => ({ item: '', prize: '' })));

  const handleInputChange = (index: number, key: string, value: string) => {
    setTableData((prevData) => {
      const newData: any = [...prevData];
      newData[index][key] = value;
      return newData;
    });
  };

  const handleAddRow = () => {
    setTableData((prevData) => [...prevData, { item: '', prize: '' }]);
  };

  const handleRemoveRow = (index: number) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className='w-full'>
      <Tooltip className='z-10' anchorSelect=".add-tooltip" place="bottom">
        Add
      </Tooltip>
      <Tooltip className='z-10' anchorSelect=".remove-tooltip" place="bottom">
        Remove
      </Tooltip>
      <div  onClick={handleAddRow}  className='flex justify-between relative w-full autofill:bg-yellow-200 rounded-sm py-3 my-3 border-b text-xl border-primary focus:outline-none focus:ring-transparent'>
        <div className='text-gray-400'>
          Rate card
        </div>
        <div
        className="add-tooltip cursor-pointer">
          <IoMdAddCircleOutline />
        </div>
      </div>
      <table  className='w-full'>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                className='w-full autofill:bg-yellow-200 rounded-sm py-3 border-b text-base border-primary focus:outline-none focus:ring-transparent'
                  placeholder='Item'
                  type="text"
                  value={row.item}
                  onChange={(e) => handleInputChange(index, 'item', e.target.value)}
                />
              </td>
              <td>
                <input
                className='w-full autofill:bg-yellow-200 rounded-sm ms-3 py-3 border-b text-base border-primary focus:outline-none focus:ring-transparent'
                placeholder='Price'
                  type="text"
                  value={row.prize}
                  onChange={(e) => handleInputChange(index, 'prize', e.target.value)}
                />
              </td>
              <td className='items-center text-xl'>
                <div className='remove-tooltip flex justify-end cursor-pointer' onClick={()=>handleRemoveRow(index)}>
                  <IoMdRemoveCircleOutline />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
        <strong>Object:</strong> {JSON.stringify(tableData, null, 2)}
      </div> */}
    </div>
  );
};

export default InputRateCard;
