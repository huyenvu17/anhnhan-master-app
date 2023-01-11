import React, { useEffect } from "react"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"
import TinhChatDuAn from "../../child-pages/TinhChatDuAn"
import { API_HOST } from "../../constants/auth"

export default function DocumentDetail({ documentInfo, slug }) {
  const Content = ({ slug }) => {
    switch (slug) {
      case "chap-thuan-chu-truong-dau-tu":
        return <TinhChatDuAn />

      default:
        return <DefaultContent documentInfo={documentInfo} />
    }
  }
  const DefaultContent = ({ documentInfo }) => {
    return documentInfo?.data?.map((document) => {
      const { name, content } = document?.attributes
      return (
        <div key={name}>
          <p className="text-2xl font-semibold">{name}</p>
          <div className="m-auto max-w-screen-md">
            {ReactHtmlParser(content)}
          </div>
        </div>
      )
    })
  }
  return (
    <div className="p-5 ">
      <Content slug={slug} />
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
      slug,
    },
  }
}
