const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: [], isLoading: false, error: null},
    
    extraReducers:  {
      // Add reducers for additional action types here, and handle loading state as needed
      [fetchContactsList.fulfilled]: (state, action) => {
        return {...state, items: action.payload}
      }
    },
  })

  console.log(contactsSlice)
  