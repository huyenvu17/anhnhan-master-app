import Link from "next/link"
import React from "react"

export default function register() {
  return (
    <div class="w-full max-w-lg mx-auto mt-10">
      <p className="text-3xl font-semibold text-center my-5">
        Đăng Ký Tài Khoản
      </p>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullname"
          >
            Họ Tên
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullname"
            type="text"
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Mật Khẩu
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Đăng Ký
          </button>
          <Link
            class="inline-block align-baseline font-bold text-sm"
            href="/login"
          >
            Đã có tài khoản?{" "}
            <span className="text-blue-500 hover:text-blue-800">Đăng Nhập</span>
          </Link>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2022 Nhan Nguyen. Dịch Vụ Quản Lý Hồ Sơ Xây Dựng
      </p>
    </div>
  )
}
