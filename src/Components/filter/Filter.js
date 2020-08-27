import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filter, getFilter }) => {
  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filter}>
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={getFilter} />
      </label>
    </div>
  );
};

export default Filter;
