import { useRouter } from "next/router"
import React, { useEffect } from "react"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"
import { API_HOST } from "../../../constants/auth"

export default function Project() {
  const {
    query: { id },
  } = useRouter()
  return <div className="p-5 m-auto max-w-600">project</div>
}

// export async function getServerSideProps({ params }) {
//   const { slug } = params
//   const response = await fetch(`${API_HOST}/documents?filters[slug]=${slug}`)
//   const document = await response.json()
//   return {
//     props: {
//       documentInfo: document,
//     },
//   }
// }
