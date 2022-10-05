import React from "react";
import DatePicker from "react-datepicker";

import { IconsVariants } from "../../constants/VariantsOfComponents";
import { range } from "../../helpers/helpers";
import { SvgIcon } from "../SvgIcon";

export const DatePickerComponent = ({ startDate, endDate, onChange }) => {
  const years = range(1990, new Date().getFullYear());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const CustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className="datepicker-header">
      <SvgIcon
        src={IconsVariants.DropDown_arrow_stroke}
        rotate={"90"}
        color={"#000"}
        size={15}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      />
      <select
        className="header-select"
        value={date.getFullYear()}
        onChange={({ target: { value } }) => changeYear(value)}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        className="header-select"
        value={months[date.getMonth()]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <SvgIcon
        src={IconsVariants.DropDown_arrow_stroke}
        rotate={"270"}
        color={"#000"}
        size={15}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      />
    </div>
  );

  return (
    <div className="custom-datePicker">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date()}
        renderCustomHeader={CustomHeader}
        selectsRange
        inline
      />
      <DatePicker
        selected={endDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date()}
        renderCustomHeader={CustomHeader}
        selectsRange
        inline
      />
    </div>
  );
};

DatePickerComponent.displayName = "DatePicker";
