// import { configureStore } from "@reduxjs/toolkit";
// import themeReducer from "./features/themeSlice";

// export default configureStore({
//   reducer: {
//     theme: themeReducer,
//   },
// });

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice";
import themeReducer from "./features/themeSlice";

const rootReducer = combineReducers({
  album: albumReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
