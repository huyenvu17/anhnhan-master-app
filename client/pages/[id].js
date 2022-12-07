import { useRouter } from "next/router"
import React, { useEffect } from "react"

export default function DocumentDetail({ documentInfo }) {
  const {
    query: { id },
  } = useRouter()
  console.log("documentInfo", documentInfo)
  const {
    data: { attributes },
  } = documentInfo
  console.log("attributes", attributes)
  return (
    <div>
      <div>{attributes?.name}</div>
      <div>{attributes?.content}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const response = await fetch(`${process.env.PUBLIC_URL}/documents?slug=${id}`)
  const document = await response.json()
  console.log("document", document)
  return {
    props: {
      documentInfo: document,
    },
  }
}
