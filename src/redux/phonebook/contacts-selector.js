import { createSelector } from "@reduxjs/toolkit";

const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getIsLoader = (state) => state.contacts.isLoader;

// export const getFilterContacts = (state) => {
//   const items = getItems(state);
//   const filter = getFilter(state);
//   console.log("повтор");
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

export const getFilterContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    console.log("повтор");
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
