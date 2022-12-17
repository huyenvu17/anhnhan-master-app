import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Header } from "../components/Header"
import styles from "../styles/Home.module.css"
import { API_HOST } from "../constants/auth"

export const Category = {
  DoanhNghiep: "doanhnghiep",
  CongDan: "congdan",
}

export default function Home({ documents }) {
  console.log("documents", documents)
  return (
    <div className={styles.container}>
      <Head>
        <title>Nhân Nguyễn - Dự Án Quản Lý Hồ Sơ Xây Dựng 2022</title>
        <meta name="description" content="Construction Documents Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-20">
        <p className="text-4xl font-semibold text-center mt-10">
          Danh Mục Văn Bản
        </p>

        <div className="grid grid-cols-2 gap-10 mx-20">
          <div className="">
            <p className="text-2xl font-semibold text-center mt-10">
              Doanh Nghiệp
            </p>
            <div className="flex flex-col mt-3">
              {documents?.data
                ?.filter(
                  (document) =>
                    document?.attributes?.category?.data?.attributes?.name ===
                    Category.DoanhNghiep,
                )
                ?.map(({ attributes, id }) => (
                  <Link
                    key={id}
                    href={attributes?.slug || ""}
                    className="w-full p-2 mx-auto my-1 border border-orange-300 hover:bg-orange-200 rounded-md shadow-lg space-x-4"
                  >
                    <span>&rarr;</span>
                    <span>{attributes?.name}</span>
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold text-center mt-10">Công Dân</p>
            <div className="flex flex-col mt-3">
              {documents?.data
                ?.filter(
                  (document) =>
                    document?.attributes?.category?.data?.attributes?.name ===
                    Category.CongDan,
                )
                ?.map(({ attributes, id }) => (
                  <Link
                    key={id}
                    href={attributes?.slug || ""}
                    className="w-full p-2 mx-auto my-1 border border-orange-300 hover:bg-orange-200 rounded-md shadow-lg space-x-4"
                  >
                    <span>&rarr;</span>
                    <span>{attributes?.name}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Nhan Nguyen 2022
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${API_HOST}/documents?populate[0]=category`)
  const data = await response.json()
  return {
    props: {
      documents: data,
    },
  }
}
