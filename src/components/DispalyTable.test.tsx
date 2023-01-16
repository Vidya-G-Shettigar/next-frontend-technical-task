import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import DisplayTable from './DispalyTable';

const result: any[] = [];

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

describe("DisplayTable Component", () => {
    it("should render table", () => {
        const { getByRole } = render(
            <DisplayTable musicDataList={result} isLoading />
        );
        expect(getByRole("table")).toBeInTheDocument();
    });
})