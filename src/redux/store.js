import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contactsSlice";
import filtersReducer from "../redux/filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const ContactsPersistConfig = {
  key: "contactsArray",
  storage,
  whitelist: ["items"],
};

const pContactsReducer = persistReducer(ContactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);