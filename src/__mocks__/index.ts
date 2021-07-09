import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axiosMockAdapter from "axios-mock-adapter";
import api from "api";

const mockApi = new axiosMockAdapter(api);
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

export { mockApi, mockStore };
