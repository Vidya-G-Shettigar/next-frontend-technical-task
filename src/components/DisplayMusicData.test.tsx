import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch, useSelector, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DisplayMusicData from './DisplayMusicData';
import * as actions from '../store/actions';

beforeEach(() => {
    // We make sure the mocks are cleared before each test case
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
});

afterEach(() => {
    // Resets the DOM after each test suite
    cleanup();
});

const reactRedux = { useDispatch, useSelector };
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

describe("DisplayMusicData Component", () => {
    const initialState = {
        musicData: {
            musicData: [],
            error: []
        }
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    store.dispatch = mockDispatch;
    const getMusicDataSpy = jest.spyOn(actions, "getMusicData");

    it("should render input field", () => {
        const { getByPlaceholderText } = render(
            <Provider store={store}>
                <DisplayMusicData />
            </Provider>
        );
        expect(getByPlaceholderText("Search about an artist, album or song")).toBeInTheDocument();
    });

    it("should render button", () => {
        const { getByRole } = render(
            <Provider store={store}>
                <DisplayMusicData />
            </Provider>
        );
        expect(getByRole("button")).toBeInTheDocument();
    });

    it("should render button text", () => {
        const { getByRole } = render(
            <Provider store={store}>
                <DisplayMusicData />
            </Provider>
        );
        expect(getByRole("button")).toHaveTextContent("Search");
    });

    it("should not disable the button", () => {
        const { getByRole } = render(
            <Provider store={store}>
                <DisplayMusicData />
            </Provider>
        );
        expect(getByRole("button")).toBeEnabled();
    });

    it("should call getMusicData action method", () => {
        const { getByRole } = render(
            <Provider store={store}>
                <DisplayMusicData />
            </Provider>
        );
        fireEvent.click(getByRole("button"));
        expect(getMusicDataSpy).toHaveBeenCalled();
    });

    it("should call getMusicData action method with value from input field", () => {
        const { getByRole, getByPlaceholderText } = render(
            <Provider store={store}>
                <DisplayMusicData />
            </Provider>
        );
        fireEvent.change(getByPlaceholderText("Search about an artist, album or song"), { target: { value: "jack" } });
        fireEvent.click(getByRole("button"));
        expect(getMusicDataSpy).toHaveBeenCalledWith("jack");
    });

    it("should call getMusicData action method with value", () => {
        const { getByRole, getByPlaceholderText } = render(
            <Provider store={store}>
                <DisplayMusicData />
            </Provider>
        );
        fireEvent.change(getByPlaceholderText("Search about an artist, album or song"), { target: { value: "" } });
        fireEvent.click(getByRole("button"));
        expect(getMusicDataSpy).toHaveBeenCalledWith("null");
    });
})