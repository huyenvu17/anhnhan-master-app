import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Header } from "../components/Header"
import styles from "../styles/Home.module.css"

export const Category = {
  DoanhNghiep: "doanhnghiep",
  CongDan: "congdan",
}

export default function Home({ documents }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nhân Nguyễn - Dự Án Quản Lý Hồ Sơ Xây Dựng 2022</title>
        <meta name="description" content="Construction Documents Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-4xl font-semibold text-center mt-10">
          Danh Mục Văn Bản
        </p>

        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <p className="text-2xl font-semibold text-center mt-10">
              Doanh Nghiệp
            </p>
            <div className="flex flex-col">
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
                    className="w-2/4 p-2 mx-auto border border-orange-300 hover:bg-orange-200 rounded-md shadow-lg space-x-4"
                  >
                    <span>&rarr;</span>
                    <span>{attributes?.name}</span>
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold text-center mt-10">Công Dân</p>
            <div className="flex flex-col">
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
                    className="w-2/4 p-2 mx-auto border border-orange-300 hover:bg-orange-200 rounded-md shadow-lg space-x-4"
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nhan Nguyen 2022
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/documents?populate[0]=category`,
  )
  const data = await response.json()

  return {
    props: {
      documents: data,
    },
  }
}
