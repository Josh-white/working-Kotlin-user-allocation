import {fireEvent, screen} from "@testing-library/react";

export type NockBody = any;

export const type = (element: HTMLElement, value: string) => {
    fireEvent.change(element, { target: { value } });
};

export const changeValueByLabel = (labelText: string | RegExp, value: string, index: number = 0) => {
    type(screen.getAllByLabelText(labelText)[index], value);
};
