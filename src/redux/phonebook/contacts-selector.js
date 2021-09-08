const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilterContacts = (state) => {
  const items = getItems(state);
  const filter = getFilter(state);

  console.log(items, filter);

  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
