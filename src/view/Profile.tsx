import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'react-bootstrap'
import { BiBasket, BiChevronRight, BiNotepad, BiPowerOff, BiUserCircle, BiWallet } from 'react-icons/bi'
import ManageAddress from '@/components/Profile/Info/ManageAddress'
import PersonalInfo from '@/components/Profile/Info/PersonalInfo'

const Profile = (): JSX.Element => {
  const router = useRouter()

  const lastPathname = router.route.split('/').at(-1)

  const menuArray = [
    {
      label: 'My Orders',
      url: '/profile/orders',
      icon: <BiBasket />,
      submenu: [],
      extra: <BiChevronRight />,
    },
    {
      label: 'Account Settings',
      icon: <BiUserCircle />,
      submenu: [
        {
          label: 'My Information',
          url: '/profile/account-setting/user-details',
        },
        {
          label: 'Manage Address',
          url: '/profile/account-setting/manage-address',
        },
      ],
    },
    {
      label: 'Payment Setting',
      icon: <BiWallet />,
      submenu: [
        {
          label: 'Manage UPI',
          url: '/profile/info/user-details',
        },
        {
          label: 'Manage Cards',
          url: '/profile/info/manage-address',
        },
      ],
    },
    {
      label: 'Others',
      icon: <BiNotepad />,
      submenu: [
        {
          label: 'My Reviews',
          url: '/profile/info/user-details',
        },
        {
          label: 'My Wishlist',
          url: '/profile/info/manage-address',
        },
        {
          label: 'Notifications',
          url: '/profile/info/manage-address',
        },
      ],
    },
    // {
    //   label: 'Logout',
    //   url: '/profile/orders',
    //   icon: <BiPowerOff />,
    //   submenu: [],
    // },
  ]

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
            <div className="card side-bar rounded-1 w-100">
              <div className="card-body">
                <div className="d-flex align-items-center w-100 mb-3">
                  <img src="/assets/images/avatars/profile-image.png" className="profile-avatar" />
                  <div>
                    <p className="fs-5 mb-0">Kamalesh Maity</p>
                    <Button variant="link" className="p-0 text-danger" size="sm">
                      <BiPowerOff className="fs-5" />
                      Logout
                    </Button>
                  </div>
                </div>
                {/* <hr className="mb-2" /> */}
                <div className="profile-menu">
                  <ul className="list-unstyled mb-0 menu-list">
                    {menuArray.map(obj =>
                      obj.submenu?.length > 0 ? (
                        obj.submenu.map((item, index) => (
                          <>
                            {index === 0 && (
                              <p className="main-menu">
                                <span className="menu-icon">{obj.icon}</span> {obj.label}
                              </p>
                            )}
                            <li className="sub-menu">
                              <Link href={item.url}>{item.label}</Link>
                            </li>
                          </>
                        ))
                      ) : (
                        <li className="main-menu" key={obj.label}>
                          <Link href={obj.url}>
                            <div>
                              <span className="menu-icon">{obj.icon}</span> {obj.label}
                              <span className="float-end fs-4">{obj.extra}</span>
                            </div>
                          </Link>
                        </li>
                      ),
                    )}
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
