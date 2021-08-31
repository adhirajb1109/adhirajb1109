import React from "react";

function Accordion() {
  return (
    <div className="mt-4">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Front End Technologies :
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">HTML</li>
                <li class="list-group-item">CSS</li>
                <li class="list-group-item">Bootstrap</li>
                <li class="list-group-item">Tailwind</li>
                <li class="list-group-item">Sass</li>
                <li class="list-group-item">JavaScript</li>
                <li class="list-group-item">TypeScript</li>
                <li class="list-group-item">React</li>
                <li class="list-group-item">Next.js</li>
                <li class="list-group-item">Firebase</li>
                <li class="list-group-item">Strapi</li>
                <li class="list-group-item">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Version Control Technologies :
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">Git</li>
                <li class="list-group-item">Github</li>
                <li class="list-group-item">Markdown</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Backend End Technologies :
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">Node.js</li>
                <li class="list-group-item">Express</li>
                <li class="list-group-item">MongoDB</li>
                <li class="list-group-item">Python</li>
                <li class="list-group-item">Django</li>
                <li class="list-group-item">Flask</li>
                <li class="list-group-item">PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
