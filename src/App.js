import React, { Fragment, PureComponent } from "react";

import { Formik, Field, Form } from "formik";
import axios from "axios";

import "./App.css";

class App extends PureComponent {
  state = {
    restaurantData: [],
  };

  handleSearchCity = (val) => {
    axios
      .get(`http://opentable.herokuapp.com/api/restaurants?city=${val}`)
      .then((response) => {
        console.log(response);
        this.setState({ restaurantData: response.data.restaurants });
      })
      .catch((error) => {
        alert(error);
      });
  };

  handleSearchOther = (val) => {
    axios
      .get(`http://opentable.herokuapp.com/api/restaurants?name=${val}`)
      .then((response) => {
        console.log("other", response);
        this.setState({ restaurantData: response.data.restaurants });
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    const { restaurantData } = this.state;
    return (
      <div className="App">
        <Formik
          enableReinitialize={true}
          validateOnBlur={false}
          initialValues={{
            searchCity: "",
            SearchAny: "",
          }}
          // onSubmit={this.onSubmit}
        >
          {(props) => {
            const { values } = props;
            return (
              <Fragment>
                <Form>
                  <div className="row d-flex justify-content-center mt-4">
                    <div className="col-lg-4 col-md-6 col-sm-2 ">
                      <div className="d-flex">
                        <Field
                          className="form-control "
                          name="searchCity"
                          placeholder="Search by City"
                          type="text"
                          value={values.searchCity}
                        />
                        <button
                          type="button"
                          className="custom-btn"
                          onClick={() =>
                            this.handleSearchCity(values.searchCity)
                          }
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-2 ">
                      <div className="d-flex">
                        <Field
                          className="form-control "
                          name="SearchAny"
                          placeholder="Search by Area,Name,Street"
                          type="text"
                        />
                        <button
                          type="button"
                          className="custom-btn"
                          onClick={() =>
                            this.handleSearchOther(values.SearchAny)
                          }
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>

                <div className="row d-flex justify-content-center mt-5">
                  {!restaurantData ? (
                    ""
                  ) : (
                    <Fragment>
                      {restaurantData.length > 0 ? (
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">City</th>
                                {/* <th scope="col">Rating of the restaurant</th> */}
                                <th scope="col">Address</th>
                              </tr>
                            </thead>
                            <tbody>
                              {restaurantData.map((val, key) => (
                                <tr key={key}>
                                  <td>{val.name}</td>
                                  <td>{val.price}</td>
                                  <td>{val.city}</td>
                                  {/* <td>22</td> */}
                                  <td>{val.address}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div>No Record Found</div>
                      )}
                    </Fragment>
                  )}
                </div>
              </Fragment>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default App;
