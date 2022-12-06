import { useRouter } from "next/router"
import React from "react"

export default function DocumentDetail() {
  const {
    query: { id },
  } = useRouter()
  console.log("pathname", id)
  return <div>rfa</div>
}
