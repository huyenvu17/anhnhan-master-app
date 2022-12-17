import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { API_HOST } from "../constants/auth"

export default function DocumentDetail({ documentInfo }) {
  const {
    query: { id },
  } = useRouter()
  return (
    <div className="p-5">
      {documentInfo?.data?.map((document) => {
        const { name, content } = document?.attributes
        return (
          <div key={name}>
            <p className="text-2xl font-semibold">{name}</p>
            <div>{content}</div>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const response = await fetch(`${API_HOST}/documents?filters[slug]=${slug}`)
  const document = await response.json()
  return {
    props: {
      documentInfo: document,
    },
  }
}
