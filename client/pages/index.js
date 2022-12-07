import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Header } from "../components/Header"
import styles from "../styles/Home.module.css"

const data = [
  {
    name: "Khởi Sự Kinh Doanh",
    url: "khoi-su-kinh-doanh",
  },
  {
    name: "Văn bản kinh doanh",
    url: "van-ban-kinh-doanh",
  },
  {
    name: "Văn bản đất đai 1",
    url: "van-ban-dat-dai-1",
  },
  {
    name: "Văn bản đất đai 2",
    url: "van-ban-dat-dai-2",
  },
  {
    name: "Văn bản đất đai 3",
    url: "van-ban-dat-dai-3",
  },
  {
    name: "Văn bản đất đai 4",
    url: "van-ban-dat-dai-4",
  },
  {
    name: "Văn bản đất đai 5",
    url: "van-ban-dat-dai-5",
  },
  {
    name: "Văn bản đất đai 6",
    url: "van-ban-dat-dai-6",
  },
]
export default function Home({ documents }) {
  console.log("documents", documents)
  return (
    <div className={styles.container}>
      <Head>
        <title>Nhan Nguyen - Construction Documents Management</title>
        <meta name="description" content="Construction Documents Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Management List</h1>

        <div className={styles.description}>List</div>
        <div className="flex flex-col">
          {documents?.data?.map(({ attributes, id }) => (
            <Link
              key={id}
              href={attributes?.slug || ""}
              className="p-2 max-w-sm mx-auto border border-orange-300 hover:bg-orange-200 rounded-md shadow-lg space-x-4"
            >
              <span>&rarr;</span>
              <span>{attributes?.name}</span>
            </Link>
          ))}
        </div>
        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
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
  const response = await fetch(`${process.env.PUBLIC_URL}/documents`)
  const data = await response.json()

  return {
    props: {
      documents: data,
    },
  }
}
