import React from "react";

function League() {
  return (
    <div className="league" id="league">
      <br />
      <div className="new">
        <h3>FootBALL Leagues & Cups</h3>
      </div>
      <div className="leagues">
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
                  UEFA Europa League
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
                <div className="row">
                  <div className="logo col-lg-5 col-md-6">
                    <img
                      src="https://seeklogo.com/images/U/uefa-europa-league-2016-logo-BDCC44BCBF-seeklogo.com.png"
                      alt="uefa logo"
                    />
                  </div>
                  <div className="teams">
                    <h5>Teams</h5>
                    <h6>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Aberdeen_FC_logo.svg/1200px-Aberdeen_FC_logo.svg.png"
                        alt="aberdeen logo"
                        width="50px"
                        height="50px"
                      />{" "}
                      Aberdeen
                    </h6>
                    <h6>
                      <img
                        src="https://seeklogo.net/wp-content/uploads/2013/10/beitar-jerusalem-fc-vector-logo-400x400.png"
                        alt="beitar logo"
                        width="52px"
                        height="55px"
                      />
                      Beitar Jeruselem
                    </h6>
                    <h6>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d0/Club_Brugge_KV_logo.svg/1200px-Club_Brugge_KV_logo.svg.png"
                        alt="bruge"
                        width="50px"
                        height="50px"
                      />{" "}
                      Club Bruge
                    </h6>
                    <h6>
                      <img
                        src="https://seeklogo.com/images/F/FK_Krasnodar-logo-98DC208C3B-seeklogo.com.png"
                        alt="logo"
                        width="50px"
                        height="50px"
                      />
                      Krasnodar
                    </h6>
                  </div>
                </div>
                <div className="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Pos</th>
                        <th scope="col">Team</th>
                        <th scope="col">P</th>
                        <th scope="col">W</th>
                        <th scope="col">D</th>
                        <th scope="col">L</th>
                        <th scope="col">F</th>
                        <th scope="col">A</th>
                        <th scope="col">+/-</th>
                        <th scope="col">PTS</th>
                        <th scope="col">Form</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Aberdeen</td>
                        <td>6</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>13</td>
                        <td>5</td>
                        <td>+8</td>
                        <td>13</td>
                        <td>L W W W D</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Club Bruge</td>
                        <td>6</td>
                        <td>3</td>
                        <td>1</td>
                        <td>2</td>
                        <td>9</td>
                        <td>7</td>
                        <td>+2</td>
                        <td>10</td>
                        <td>W L W W D</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Beiter Jeruselem</td>
                        <td>6</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>10</td>
                        <td>-4</td>
                        <td>5</td>
                        <td>W D L L D</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Krasnodar</td>
                        <td>6</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>3</td>
                        <td>7</td>
                        <td>-6</td>
                        <td>5</td>
                        <td>L D L L D</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                  FIFA World Cup
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
                <div className="row">
                  <div className="logo col-lg-5 col-md-6">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2FXVrZBgJOdre5rl7WtlVAkEnMVdwfK5tga7PTzDnxyQcQ-7KoKrjGfus24kOSWIoI0&usqp=CAU"
                      alt="uefa logo"
                    />
                  </div>
                  <div className="teams">
                    <h5>Teams</h5>
                    <h6>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Aberdeen_FC_logo.svg/1200px-Aberdeen_FC_logo.svg.png"
                        alt="aberdeen logo"
                        width="50px"
                        height="50px"
                      />{" "}
                      Aberdeen
                    </h6>
                    <h6>
                      <img
                        src="https://seeklogo.net/wp-content/uploads/2013/10/beitar-jerusalem-fc-vector-logo-400x400.png"
                        alt="beitar logo"
                        width="52px"
                        height="55px"
                      />
                      Beitar Jeruselem
                    </h6>
                    <h6>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d0/Club_Brugge_KV_logo.svg/1200px-Club_Brugge_KV_logo.svg.png"
                        alt="bruge"
                        width="50px"
                        height="50px"
                      />{" "}
                      Club Bruge
                    </h6>
                    <h6>
                      <img
                        src="https://seeklogo.com/images/F/FK_Krasnodar-logo-98DC208C3B-seeklogo.com.png"
                        alt="logo"
                        width="50px"
                        height="50px"
                      />
                      Krasnodar
                    </h6>
                  </div>
                </div>
                <div className="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Pos</th>
                        <th scope="col">Team</th>
                        <th scope="col">P</th>
                        <th scope="col">W</th>
                        <th scope="col">D</th>
                        <th scope="col">L</th>
                        <th scope="col">F</th>
                        <th scope="col">A</th>
                        <th scope="col">+/-</th>
                        <th scope="col">PTS</th>
                        <th scope="col">Form</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Aberdeen</td>
                        <td>6</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>13</td>
                        <td>5</td>
                        <td>+8</td>
                        <td>13</td>
                        <td>L W W W D</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Club Bruge</td>
                        <td>6</td>
                        <td>3</td>
                        <td>1</td>
                        <td>2</td>
                        <td>9</td>
                        <td>7</td>
                        <td>+2</td>
                        <td>10</td>
                        <td>W L W W D</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Beiter Jeruselem</td>
                        <td>6</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>10</td>
                        <td>-4</td>
                        <td>5</td>
                        <td>W D L L D</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Krasnodar</td>
                        <td>6</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>3</td>
                        <td>7</td>
                        <td>-6</td>
                        <td>5</td>
                        <td>L D L L D</td>
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

export default League;
