import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ManageAddress from '@/components/Profile/Info/ManageAddress'
import PersonalInfo from '@/components/Profile/Info/PersonalInfo'

const Profile = (): JSX.Element => {
  const router = useRouter()

  const lastPathname = router.route.split('/').at(-1)

  const renderComponent = (pathname: string): JSX.Element => {
    switch (pathname) {
      case 'user-details':
        return <PersonalInfo />
      case 'manage-address':
        return <ManageAddress />
      default:
        return <PersonalInfo />
    }
  }

  return (
    <section className="py-4 product-list-view">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-3">
            <div className="card side-bar rounded-1 w-100 mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="/assets/images/avatars/profile-image.png" className="profile-avatar" />
                  <div>
                    <strong className="fs-7">Hello,</strong>
                    <p className="fs-5 mb-0">Kamalesh Maity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card side-bar rounded-1 w-100">
              <div className="card-body">
                <div className="product-categories">
                  <h6 className="text-uppercase mb-3">Categories</h6>
                  <ul className="list-unstyled mb-0 categories-list">
                    <li>
                      <Link href="/profile/info/user-details">
                        Personal Info <span className="float-end badge rounded-pill bg-dark">42</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/profile/info/manage-address">
                        Manage Address <span className="float-end badge rounded-pill bg-dark">42</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-9">{renderComponent(lastPathname)}</div>
        </div>
      </div>
    </section>
  )
}

export default Profile
