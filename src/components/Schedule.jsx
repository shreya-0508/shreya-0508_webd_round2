import React from "react";

function Schedule() {
  return (
    <div id="schedule">
      <br />
      <div className="new">
        <h3>FootBALL Fixtures</h3>
      </div>
      <div className="schedule">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  20 July 21'
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table table-hover">
                  <tbody>
                    <tr>
                      <th scope="row">UEFA Champions League</th>
                      <td>AlashKert</td>
                      <td>Sheriff</td>
                      <td>20:30</td>
                    </tr>
                    <tr>
                      <th scope="row">UEFA Champions League</th>
                      <td>Lincoln Red Imps</td>
                      <td>CFR Cluj</td>
                      <td>21:30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  14 August 21'
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table table-hover">
                  <tbody>
                    <tr>
                      <th scope="row">Premier League</th>
                      <td>Manchester United</td>
                      <td>Leeds United</td>
                      <td>17:00</td>
                    </tr>
                    <tr>
                      <th scope="row">Primers Division</th>
                      <td>Osasuna </td>
                      <td>Espanyol</td>
                      <td>20:30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  29 August 21'
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table table-hover">
                  <tbody>
                    <tr>
                      <th scope="row">Premier League</th>
                      <td>Burnley</td>
                      <td>Leeds United</td>
                      <td>18:30</td>
                    </tr>
                    <tr>
                      <th scope="row">Bundesliga</th>
                      <td>Union Berlin </td>
                      <td>Borussia M'gladbach</td>
                      <td>19:30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
