import React, { Component } from "react";
import $ from "jquery";
export default class signin extends Component {
  render() {
    return (
      <form>
        <div className="img">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="BootStrap"
            width="60"
            height="100"
          ></img>
        </div>
        <h3>Sign In Page</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
