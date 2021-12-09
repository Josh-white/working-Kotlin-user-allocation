import React from 'react';
import {fireEvent, getByLabelText, render, screen} from "@testing-library/react";
import App from "./App";

describe('app', () => {
  it('should have an input box to put new teams',  () => {
    render(<App/>)

    expect(screen.getByLabelText('enter team name')).toBeVisible()
  });

  it('should have a button to add team',  () => {
    render(<App/>)

    expect(screen.getByRole('button', {name: 'add team'}))
  });

  it('should display a team list',  () =>  {
    render(<App/>)

    fireEvent.change(screen.getByLabelText('enter team name'), {target: {value: 'GOAT Team'}})

    fireEvent.click(screen.getByRole('button', {name: 'add team'}))

    expect(screen.getByRole('heading', {name: 'List of Teams'}))
    expect(screen.getAllByRole('listitem', {name: 'GOAT Team'}))
  });
})
