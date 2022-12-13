import React from "react"
import Link from "next/link"
import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
