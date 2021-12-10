import React from 'react';
import {render, screen} from "@testing-library/react";
import Teams from "../../App";

describe('Teams', () => {
  it('should have an input box to put new teams',  () => {
    render(<Teams/>)

    expect(screen.getByLabelText('enter team name')).toBeVisible()
  });

  it('should have a button to add team',  () => {
    render(<Teams/>)

    expect(screen.getByRole('button', {name: 'add team'}))
  });
})
