import React from 'react'

const Breadcrumb = (): JSX.Element => (
  <section className="py-3 border-bottom d-none d-md-flex">
    <div className="container">
      <div className="page-breadcrumb d-flex align-items-center">
        <div className="ms-auto">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="javascript:;">
                  <i className="bx bx-home-alt" /> Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="javascript:;">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shop List Left Sidebar
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
)

export default Breadcrumb
