import React from 'react'

const FilterMenu = (): JSX.Element => (
  <div className="card filter-menu rounded-1 w-100">
    <div className="card-body">
      <div className="product-categories">
        <h6 className="text-uppercase mb-3">Categories</h6>
        <ul className="list-unstyled mb-0 categories-list">
          <li>
            <a href="#">
              Clothings <span className="float-end badge rounded-pill bg-dark">42</span>
            </a>
          </li>
          <li>
            <a href="#">
              Sunglasses <span className="float-end badge rounded-pill bg-dark">32</span>
            </a>
          </li>
          <li>
            <a href="#">
              Bags <span className="float-end badge rounded-pill bg-dark">17</span>
            </a>
          </li>
          <li>
            <a href="#">
              Watches <span className="float-end badge rounded-pill bg-dark">217</span>
            </a>
          </li>
          <li>
            <a href="#">
              Furniture <span className="float-end badge rounded-pill bg-dark">28</span>
            </a>
          </li>
          <li>
            <a href="#">
              Shoes <span className="float-end badge rounded-pill bg-dark">145</span>
            </a>
          </li>
          <li>
            <a href="#">
              Accessories <span className="float-end badge rounded-pill bg-dark">15</span>
            </a>
          </li>
          <li>
            <a href="#">
              Headphones <span className="float-end badge rounded-pill bg-dark">8</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="price-range">
        <h6 className="text-uppercase mb-3">Price</h6>
        <div className="my-4" id="slider" />
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-white btn-sm text-uppercase rounded-1 font-13 fw-500">
            Filter
          </button>
          <div className="ms-auto">
            <p className="mb-0">Price: $200.00 - $900.00</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="size-range">
        <h6 className="text-uppercase mb-3">Size</h6>
        <ul className="list-unstyled mb-0 categories-list">
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="Small" />
              <label className="htmlForm-check-label" htmlFor="Small">
                Small
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="Medium" />
              <label className="htmlForm-check-label" htmlFor="Medium">
                Medium
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="Large" />
              <label className="htmlForm-check-label" htmlFor="Large">
                Large
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="ExtraLarge" />
              <label className="htmlForm-check-label" htmlFor="ExtraLarge">
                Extra Large
              </label>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className="product-brands">
        <h6 className="text-uppercase mb-3">Brands</h6>
        <ul className="list-unstyled mb-0 categories-list">
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="Adidas" />
              <label className="htmlForm-check-label" htmlFor="Adidas">
                Adidas (15)
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="Armani" />
              <label className="htmlForm-check-label" htmlFor="Armani">
                Armani (26)
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="CalvinKlein" />
              <label className="htmlForm-check-label" htmlFor="CalvinKlein">
                Calvin Klein (24)
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="Columbia" />
              <label className="htmlForm-check-label" htmlFor="Columbia">
                Columbia (38)
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="JhonPlayers" />
              <label className="htmlForm-check-label" htmlFor="JhonPlayers">
                Jhon Players (48)
              </label>
            </div>
          </li>
          <li>
            <div className="htmlForm-check">
              <input className="htmlForm-check-input" type="checkbox" value="" id="Diesel" />
              <label className="htmlForm-check-label" htmlFor="Diesel">
                Diesel (64)
              </label>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className="product-colors">
        <h6 className="text-uppercase mb-3">Colors</h6>
        <ul className="list-unstyled mb-0 categories-list">
          <li>
            <div className="d-flex align-items-center cursor-pointer">
              <div className="color-indigator bg-black" />
              <p className="mb-0 ms-3">Black</p>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center cursor-pointer">
              <div className="color-indigator bg-warning" />
              <p className="mb-0 ms-3">Yellow</p>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center cursor-pointer">
              <div className="color-indigator bg-danger" />
              <p className="mb-0 ms-3">Red</p>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center cursor-pointer">
              <div className="color-indigator bg-primary" />
              <p className="mb-0 ms-3">Blue</p>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center cursor-pointer">
              <div className="color-indigator bg-white" />
              <p className="mb-0 ms-3">White</p>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center cursor-pointer">
              <div className="color-indigator bg-success" />
              <p className="mb-0 ms-3">Green</p>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center cursor-pointer">
              <div className="color-indigator bg-info" />
              <p className="mb-0 ms-3">Sky Blue</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default FilterMenu
