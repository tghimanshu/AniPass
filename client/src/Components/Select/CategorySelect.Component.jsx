import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../../Redux/Actions/actions";
import Select from "react-select";
import { Controller } from "react-hook-form";

export const MultiSelect = ({ name, control }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesActions());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);

  let data =
    categories &&
    categories.map((category) => ({
      label: category.title,
      value: category._id,
    }));

  return (
    <>
      {data && (
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => {
            return (
              <Select
                isMulti
                defaultValue={[]}
                placeholder={"Categories...."}
                options={data}
                // onChange={handleChange}
                onChange={(options) => onChange(options)}
                allowSelectAll={true}
                value={value}
                // value={value}
              />
            );
          }}
        />
      )}
    </>
  );
};
