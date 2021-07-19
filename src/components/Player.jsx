import React from "react";

function Player() {
  return (
    <div className="player" id="player">
      <div className="new">
        <h3>Player Stats</h3>
      </div>
      <div className="pstats">
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
                  NOA LANG
                </button>
              </h2>
            </div>
            <img src="https://pbs.twimg.com/media/Etj4nA1XUAAmpFp.jpg:large" />
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Team</th>
                      <td>Club Bruge</td>
                    </tr>
                    <tr>
                      <th scope="row">Position</th>
                      <td>Forward</td>
                    </tr>
                    <tr>
                      <th scope="row">Height/weight</th>
                      <td>1.78m, 73kg </td>
                    </tr>
                    <tr>
                      <th scope="row">DOB</th>
                      <td>17/6/1999 (22) </td>
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
                  Stats
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
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Season</th>
                      <td>2021 Champions Legue</td>
                    </tr>
                    <tr>
                      <th scope="row">Team</th>
                      <td>Club Bruge</td>
                    </tr>
                    <tr>
                      <th scope="row">Starts</th>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">Fouls Commited</th>
                      <td>5</td>
                    </tr>
                    <tr>
                      <th scope="row">Fouls Suffered</th>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">Yellow Cards</th>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">Red Cards</th>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Goals</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">Shots</th>
                      <td>6</td>
                    </tr>
                    <tr>
                      <th scope="row">Shots on Target</th>
                      <td>3</td>
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
                  Career History
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
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>Club Bruge - 1Season</td>
                      <td>Netherlands U21 -1Season</td>
                    </tr>
                    <tr>
                      <td>Ajax AMsterdam - 4Seasons</td>
                      <td>FC Twente - 1Season</td>
                    </tr>
                    <tr>
                      <td>Jong Ajax - 4Seasons</td>
                      <td>Netherlands U19 -1Season</td>
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
export default Player;
