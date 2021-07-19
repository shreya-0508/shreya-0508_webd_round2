import React from "react";

function Team() {
  return (
    <div className="team" id="team">
      <div className="newteam">
        <h3>Team Stats</h3>
      </div>
      <div>
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
                  Club Bruge
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
                <table class="table ">
                  <thead>
                    <tr>
                      <th scope="col">Ranking</th>
                      <th scope="col">Name</th>
                      <th scope="col">Games Played</th>
                      <th scope="col">Goals Scored</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Noa Lang</td>
                      <td>29</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Hans Vanaken</td>
                      <td>36</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Krepin Diatta </td>
                      <td>19</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Bas Dost</td>
                      <td>19</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>RRuud Vormer</td>
                      <td>37</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>David Okerreke</td>
                      <td>28</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Youssouph Badji</td>
                      <td>26</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Charles De Ketelaeren</td>
                      <td>38</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Michael Krmencik</td>
                      <td>9</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Mats Rits</td>
                      <td>37</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Brandon Mechele</td>
                      <td>35</td>
                      <td>2</td>
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
                  Aberdeen
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
                <table class="table ">
                  <thead>
                    <tr>
                      <th scope="col">Ranking</th>
                      <th scope="col">Name</th>
                      <th scope="col">Games Played</th>
                      <th scope="col">Goals Scored</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Michael Krmencik</td>
                      <td>29</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Hans Vanaken</td>
                      <td>36</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Krepin Diatta </td>
                      <td>19</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Bas Dost</td>
                      <td>19</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>RRuud Vormer</td>
                      <td>37</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>David Okerreke</td>
                      <td>28</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Youssouph Badji</td>
                      <td>26</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Charles De Ketelaeren</td>
                      <td>38</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Michael Krmencik</td>
                      <td>9</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Mats Rits</td>
                      <td>37</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Brandon Mechele</td>
                      <td>35</td>
                      <td>2</td>
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
                  Krasnador
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
                <table class="table ">
                  <thead>
                    <tr>
                      <th scope="col">Ranking</th>
                      <th scope="col">Name</th>
                      <th scope="col">Games Played</th>
                      <th scope="col">Goals Scored</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mats Rits</td>
                      <td>29</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Hans Vanaken</td>
                      <td>36</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Krepin Diatta </td>
                      <td>19</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Bas Dost</td>
                      <td>19</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>RRuud Vormer</td>
                      <td>37</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>David Okerreke</td>
                      <td>28</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Youssouph Badji</td>
                      <td>26</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Charles De Ketelaeren</td>
                      <td>38</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Michael Krmencik</td>
                      <td>9</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Mats Rits</td>
                      <td>37</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Brandon Mechele</td>
                      <td>35</td>
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
  );
}
export default Team;
