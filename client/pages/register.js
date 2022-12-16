import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import axios from "axios"
import { useRouter } from "next/router"
import { AUTH_TOKEN } from "../constants/auth"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  })

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)
    axios
      .post("http://localhost:1337/api/auth/local/register", data)
      .then((response) => {
        console.log("Well done!")
        console.log("User profile", response.data.user)
        console.log("User token", response.data.jwt)
        router.push({
          pathname: "/login",
          query: { returnUrl: router.asPath },
        })
      })
      .catch((error) => {
        console.log("An error occurred:", error.response)
      })
  }
  useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    authToken &&
      router.push({
        pathname: "/",
        query: { returnUrl: router.asPath },
      })
  }, [])
  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <p className="text-3xl font-semibold text-center my-5">
        Đăng Ký Tài Khoản
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-8">
          <label
            htmlFor="username"
            className={`block font-bold text-sm mb-2 ${
              errors?.name ? "text-red-400" : "text-gray-700"
            }`}
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className={`shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors?.username ? "border-red-400" : "text-gray-700"
            }`}
            {...register("username")}
          />
          {errors?.username && (
            <p className="text-red-500 text-sm mt-2">Vui lòng nhập username.</p>
          )}
        </div>

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
          Đăng Ký
        </button>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Nhan Nguyen. All rights reserved.
      </p>
    </div>
  )
}
