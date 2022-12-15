import React, { useEffect, useState } from "react"
import Link from "next/link"
import { USER_ITEM } from "../constants/auth"
import { useRouter } from "next/router"

export const Header = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user_item = JSON.parse(localStorage.getItem(USER_ITEM))
    user_item && setUser(user_item)
  }, [])

  console.log("user", user)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-orange-700 p-6">
      <Link href="/" className="flex items-center text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-xl tracking-tight">
            Cổng Dịch Vụ Quản Lý Xây Dựng
          </span>
          <span className="font-light text-sm tracking-tight">
            Kết nối, cung cấp thông tin và dịch vụ mọi lúc mọi nơi
          </span>
        </div>
      </Link>
      {user ? (
        <div className="text-white">
          <span
            className="inline-block leading-none text-white border-orange-300
          hover:text-white hover:border-white mt-4 lg:mt-0"
          >
            {" "}
            {user?.name}
          </span>
          <button
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
            className="inline-block leading-none border ml-2 rounded px-4 py-2 text-white border-orange-300 hover:text-white hover:border-white mt-4 lg:mt-0"
          >
            Thoát
          </button>
        </div>
      ) : (
        <div>
          <Link
            href="/register"
            className="inline-block text-sm px-4 py-2 leading-none border mr-2 rounded text-white border-orange-300 hover:text-white hover:border-white mt-4 lg:mt-0"
          >
            Đăng Ký
          </Link>
          <Link
            href="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-orange-300 hover:text-white hover:border-white mt-4 lg:mt-0"
          >
            Đăng Nhập
          </Link>
        </div>
      )}
    </nav>
  )
}
