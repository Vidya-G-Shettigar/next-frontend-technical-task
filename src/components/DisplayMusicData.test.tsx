import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DisplayMusicData from './DisplayMusicData';
import * as actions from '../store/actions';

// // afterEach function runs after each test suite is executed
// afterEach(() => {
//     cleanup(); // Resets the DOM after each test suite
// });

// describe("DisplayMusicData Component", () => {
//     const initialState = {
//         musicData: {
//             musicData: [],
//             error: []
//         }
//     };
//     const middlewares = [thunk];
//     const mockStore = configureStore(middlewares);
//     const store = mockStore(initialState);
//     const getMusicDataSpy = jest.spyOn(actions, "getMusicData");

//     it("should render button", () => {
//         const { getByRole } = render(
//             <Provider store={store}>
//                 <DisplayMusicData />
//             </Provider>
//         );
//         expect(getByRole("button")).toBeInTheDocument();
//     });

//     it("should render button text", () => {
//         const { getByRole } = render(
//             <Provider store={store}>
//                 <DisplayMusicData />
//             </Provider>
//         );
//         expect(getByRole("button")).toHaveTextContent("Search");
//     });

//     it("should not disable the button", () => {
//         const { getByRole } = render(
//             <Provider store={store}>
//                 <DisplayMusicData />
//             </Provider>
//         );
//         expect(getByRole("button")).not.toBeDisabled();
//     });
// })