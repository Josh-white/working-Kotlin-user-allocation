import {fireEvent, render, screen} from "@testing-library/react";
import {StartEndDateModal} from "../../components/StartEndDateModal";

describe('startEndDatesModal', () => {
    it('should have all the correct fields', () => {
        render(<StartEndDateModal/>)

        expect(screen.getByLabelText(/enter a start date/i)).toBeVisible()
        expect(screen.getByLabelText(/enter a end date/i)).toBeVisible()

        expect(screen.getByRole('StartDate')).toBeVisible()
        expect(screen.getByRole('EndDate')).toBeVisible()

        expect(screen.getByRole("button", {name: /save/i})).toBeVisible()
        expect(screen.getByRole("button", {name: /cancel/i})).toBeVisible()
    })

    it('should have save button disable by default', () => {
        render(<StartEndDateModal/>)

        expect(screen.getByRole("button", {name: "save"})).toBeDisabled()
    });

    it('should enable save button when start date is entered', () => {
        render(<StartEndDateModal/>)
        
    });
})