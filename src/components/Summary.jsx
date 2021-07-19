import React from "react";
function Summary() {
  return (
    <div className="sum" id="summary">
      <br />
      <div className="new">
        <h3>Match Summary</h3>
      </div>
      <div className="match">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Aberdeen_FC_logo.svg/1200px-Aberdeen_FC_logo.svg.png"
          class="rounded float-left"
          width="70px"
          height="70px"
          alt="aberdeen"
        />
        <h5 class="rounded float-left">Aberdeen</h5>
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d0/Club_Brugge_KV_logo.svg/1200px-Club_Brugge_KV_logo.svg.png"
          class="rounded float-right"
          width="70px"
          height="70px"
          alt="bruge"
        />
        <h5 class="rounded float-right">Club Bruge</h5>
      </div>
      <h1>0-3</h1>
      <div className="stats">
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
                  TimeLine
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body time">
                <i class="fas fa-stopwatch"></i>
                END OF Match
                <div class="card bg-light mb-3">
                  <div class="card-header">Yellow Card</div>
                  <div class="card-body">
                    <p class="card-text timet">
                      Liam Smith defender#2 -Club Bruge
                    </p>
                  </div>
                </div>
                <div class="card bg-light mb-3">
                  <div class="card-header">Yellow Card</div>
                  <div class="card-body">
                    <p class="card-text timet">
                      Ian Harkes Midfielder#23 -Club Bruge <br />
                    </p>
                  </div>
                </div>
                <div class="card bg-light mb-3">
                  <div class="card-header">Substitution</div>
                  <div class="card-body">
                    <p class="card-text timet">
                      IN - Ethan Ross <br />
                      Aberdeen
                      <br />
                      OUT -Niall McGinn <br />
                      Aberdeen
                    </p>
                  </div>
                </div>
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <i class="fas fa-futbol"></i>
                    <br />
                    GOAL!!!
                    <br /> 54'
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Aberdeen 0-3 Club Bruge</h5>
                    <p class="card-text timet">
                      Marc McNulty <br />
                      Club Bruge Stricker#9
                    </p>
                  </div>
                </div>
                <div class="card bg-light mb-3">
                  <div class="card-header">Yellow Card</div>
                  <div class="card-body">
                    <p class="card-text timet">
                      Andrew Considine Defender#4 -Aberdeen <br />
                    </p>
                  </div>
                </div>
                <i class="fas fa-stopwatch"></i>
                HALF TIME
                <div class="card bg-light mb-3 ">
                  <div class="card-header">Yellow Card</div>
                  <div class="card-body">
                    <p class="card-text timet">
                      Marc McNulty Stricker#9 Club -Bruge
                    </p>
                  </div>
                </div>
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <i class="fas fa-futbol"></i>
                    <br />
                    GOAL!!!
                    <br /> 37'
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Aberdeen 0-2 Club Bruge</h5>
                    <p class="card-text timet">
                      Ryan Edwards <br />
                      Club Bruge Defender#9
                    </p>
                  </div>
                </div>
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <i class="fas fa-futbol"></i>
                    <br /> GOAL!!!
                    <br /> 18'
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Aberdeen 0-1 Club Bruge</h5>
                    <p class="card-text timet">
                      Marc McNulty <br />
                      Club Bruge Striker#9
                    </p>
                  </div>
                </div>
                <i class="fas fa-stopwatch"></i>
                KICK OFF
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
                    Line ups
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
                  <img
                    src="https://footballbh.net/wp-content/uploads/2019/03/lineups-1.jpg"
                    alt="lineup"
                    class="img-fluid col-lg-12"
                  />
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
                    Stats
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
                  <table class="table statst">
                    <caption>List of users</caption>
                    <thead>
                      <tr>
                        <th scope="col">Aberdeen</th>
                        <th scope="col">Team Stats</th>
                        <th scope="col">Club Bruge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>6</td>
                        <td>Shots</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Shots on Targe</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>68%</td>
                        <td>Possession</td>
                        <td>32%</td>
                      </tr>
                      <tr>
                        <td>0</td>
                        <td>Passes</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Fouls</td>
                        <td>31</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Yellow Cards</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>0</td>
                        <td>Red Cards</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>0</td>
                        <td>Off Sides</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Corners</td>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Summary;
