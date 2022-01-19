export const StartEndDateModal = () => {
    return (
        <div>
            <label>Enter a start date
                <input type={"date"} required={true} role={"StartDate"}/>
            </label>
            <label>Enter a end date
                <input type={"date"} required={true} role={"EndDate"}/>
            </label>
            <button disabled={true}>save</button>
            <button>cancel</button>
        </div>
    )
}