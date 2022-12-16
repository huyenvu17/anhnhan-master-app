import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import axios from "axios"
import { AUTH_TOKEN, USER_ITEM } from "../constants/auth"
import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  })

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const info = {
      identifier: data?.email,
      password: data?.password,
    }
    axios
      .post("http://localhost:1337/api/auth/local", info)
      .then((result) => {
        localStorage.setItem(AUTH_TOKEN, result?.data?.jwt)
        localStorage.setItem(USER_ITEM, JSON.stringify(result?.data?.user))
        window.location.reload()
      })
      .catch((error) => {
        if (error?.response?.status) {
        }
      })
  }

  useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    authToken && router.replace("/")
  }, [])

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <p className="text-3xl font-semibold text-center my-5">Đăng Nhập</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-8">
          <label
            htmlFor="email"
            className={`block font-bold text-sm mb-2 ${
              errors?.email ? "text-red-400" : "text-gray-700"
            }`}
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className={`shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors?.email ? "border-red-400" : "text-gray-700"
            }`}
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-2">Vui lòng nhập email.</p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className={`block font-bold text-sm mb-2 ${
              errors?.password ? "text-red-400" : "text-gray-700"
            }`}
          >
            Mật Khẩu
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700 ${
              errors?.password ? "border-red-400" : "text-gray-700"
            }`}
            {...register("password")}
          />

          {errors?.password && (
            <p className="text-red-500 text-sm mt-2">Vui lòng nhập mật khẩu.</p>
          )}
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Đăng Nhập
        </button>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Nhan Nguyen. All rights reserved.
      </p>
    </div>
  )
}
