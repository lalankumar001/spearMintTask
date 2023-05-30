import React, { useState } from "react";
// Bootstrap imported here
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// delete and copy Icon Which is used from ReactIcons
import { MdDelete,MdContentCopy } from "react-icons/md";

const Form = () => {
  const [formData, setFormData] = useState({
    Lot: "",
    Position: "",
    Option: "",
    Expiry: "",
    Criteria: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const InputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setSubmittedData(formData);
  };

  const DeleteDataHandler = () => {
    setFormData({
        Lot: "",
        Position: "",
        Option: "",
        Expiry: "",
        Criteria: "",
      });
      setSubmittedData(null);
  }

  const CopyDataHandler = () => {
    const { Lot, Position, Option, Expiry,Criteria } = submittedData;
    const copiedData = `Lot: ${Lot}\n Position: ${Position}\n Option: ${Option}\n Criteria: ${Criteria} \n Expiry: ${Expiry}`;
    navigator.clipboard.writeText(copiedData);
    alert(copiedData);
  }

  const FinalSubmitHandler = () => {
    alert('Data submitted')
  }
  return (
    <div className="mt-5">
      <form
        className="row g-3 needs-validation"
        novalidate
        onSubmit={SubmitHandler}
      >
        <div className="col-md-2 position-relative">
          <label for="validationTooltip05" className="form-label">
            Total lot
          </label>
          <input
            type="number"
            className="form-control"
            id="validationTooltip05"
            required
            name="Lot"
            value={formData.Lot}
            onChange={InputHandler}
          ></input>
        </div>

        <div className="col-md-2 position-relative">
          <label for="validationTooltip04" className="form-label">
            Position
          </label>
          <select
            className="form-select"
            id="validationTooltip04"
            required
            name="Position"
            value={formData.Position}
            onChange={InputHandler}
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </div>

        <div className="col-md-2 position-relative">
          <label for="validationTooltip04" className="form-label">
            Option Type
          </label>
          <select
            className="form-select"
            id="validationTooltip04"
            required
            name="Option"
            value={formData.Option}
            onChange={InputHandler}
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="call">call</option>
            <option value="put">put</option>
          </select>
        </div>

        <div className="col-md-2 position-relative">
          <label for="validationTooltip04" className="form-label">
            Expiry
          </label>
          <select
            className="form-select"
            id="validationTooltip04"
            required
            name="Expiry"
            value={formData.Expiry}
            onChange={InputHandler}
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
          </select>
        </div>

        <div className="col-md-2 position-relative">
          <label for="validationTooltip04" className="form-label">
            Slect Strike Criteria
          </label>
          <select
            className="form-select"
            id="validationTooltip04"
            required
            name="Criteria"
            value={formData.Criteria}
            onChange={InputHandler}
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="strikeType">strikeType</option>
            <option value="PremimumRamge">premimumRange</option>
          </select>
        </div>

        <div className="col-10 mt-5">
          <button className="btn btn-primary" type="submit">
            Add Leg
          </button>
          <button className="btn btn-danger mx-3" type="delete" onClick={() =>alert('Are You Sure?')}>
            Cancel
          </button>
        </div>
      </form>

 {/* code for display data which is filed by the user  */}
      <div className="mt-4 p-3">
        {submittedData && (
          <div className="mt-4 shadow card p-3"> 
            <div className="container">
              <div className="row">
                <div className="col">
                  <select
                    className="form-select bg-secondary text-white fw-bold"
                  >
                    <option selected disabled >
                     {formData.Lot}
                    </option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select bg-primary text-white fw-bold"
                  >
                    <option selected disabled>
                      {formData.Position}
                    </option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select bg-primary text-white fw-bold"

                  >
                    <option selected disabled>
                      {formData.Option}
                    </option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select bg-primary text-white fw-bold"
                  
                  >
                    <option selected disabled>
                      {formData.Expiry}
                    </option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select bg-primary text-white fw-bold"
                  >
                    <option selected disabled>
                     {formData.Criteria} 
                    </option>
                  </select>
                </div>
{/* Delet button */}
                <div className="col"> 
                  <button type="delete" className="btn btn-danger" onClick={CopyDataHandler}><MdContentCopy  className="text-white fs-4"/></button>
                  <br />
                  <button type="delete" className="btn btn-danger mt-1" onClick={DeleteDataHandler}><MdDelete  className="text-white fs-4"/></button>
                </div>
{/*Check box apper after form data has been submited  */}
                <div className="row mt-5 mb-3">
                     <div className="col-2">
                     <h6> Simple Momentum  <input type="checkbox" name="checkbox" id="checkbox" required /> </h6>
                     </div>

                     <div className="col-9">
                     <h6><input type="checkbox" name="checkbox" id="checkbox" required /> Trail SL</h6>
                     </div>
                   </div>
{/* After Check box some more Filed is add to the form */}

        <div className="col md-2 position-relative ">
          <select
            className="form-select"
            id="validationTooltip04"
            required
            name="Position"
            value={formData.Position}
            onChange={InputHandler}
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="Buy">pointsUp</option>
            <option value="Sell">pointsDown</option>
          </select>
        </div>

        <div className="col-md-2 position-relative">
          <input
            type="number"
            className="form-control"
            id="validationTooltip05"
            required
            name="Lot"
            value={formData.Lot}
            onChange={InputHandler}
          ></input>
        </div>


        <div className="col-md-2 position-relative">
          <select
            className="form-select"
            id="validationTooltip04"
            required
            name="Option"
            value={formData.Option}
            onChange={InputHandler}
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="call">points</option>
            <option value="put">percentage</option>
          </select>
        </div>


        <div className="col-md-2 position-relative">
          <input
            type="number"
            className="form-control"
            id="validationTooltip05"
            required
            name="Lot"
            value={formData.Lot}
            onChange={InputHandler}
          ></input>
        </div>


        <div className="col-md-2 position-relative">
          <input
            type="number"
            className="form-control"
            id="validationTooltip05"
            required
            name="Lot"
            value={formData.Lot}
            onChange={InputHandler}
          ></input>
        </div>

     <div>
        <button className="btn btn-primary mt-4 w-25" type="submit" onClick={FinalSubmitHandler}>
            Final Submit
          </button>

          </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
