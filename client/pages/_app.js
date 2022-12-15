import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout"
import { AUTH_TOKEN } from "../constants/auth"
import "../styles/globals.css"
import Login from "./login"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [authorized, setAuthorized] = useState(false)
  const isAuthenticated = false

  useEffect(() => {
    authCheck(router.asPath)

    const hideContent = () => setAuthorized(false)
    router.events.on("routeChangeStart", hideContent)

    router.events.on("routeChangeComplete", authCheck)

    return () => {
      router.events.off("routeChangeStart", hideContent)
      router.events.off("routeChangeComplete", authCheck)
    }
  }, [])

  function authCheck(url) {
    setUser(isAuthenticated)
    const authToken = localStorage.getItem(AUTH_TOKEN)
    const publicPaths = ["/login", "/register"]
    const path = url.split("?")[0]
    if (!authToken && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      })
    } else {
      setAuthorized(true)
    }
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
