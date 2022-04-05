import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryAction,
  categoriesActions,
} from "../../Redux/Actions/actions";
import Select from "react-select";
import Creatable from "react-select/creatable";
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

  const createCategory = (data) => {
    const array = [
      "primary",
      "secondary",
      "danger",
      "warning",
      "success",
      "dark",
      "light",
      "info",
    ];
    const arrayElem = array[Math.floor(Math.random() * array.length)];
    Promise.resolve(
      dispatch(
        addCategoryAction({
          title: data,
          color: arrayElem,
          user: localStorage.getItem("userId"),
        })
      )
    ).then(() => {
      dispatch(categoriesActions());
    });
  };

  return (
    <>
      {data && (
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => {
            return (
              <Creatable
                isMulti
                defaultValue={[]}
                placeholder={"Categories...."}
                options={data}
                // onChange={handleChange}
                onCreateOption={createCategory}
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
