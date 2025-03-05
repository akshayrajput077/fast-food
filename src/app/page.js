
// import SignIn from "@/component/Auth/Signin"
// export default function Login() {
//   return (
//     <main>
//       <SignIn />
//     </main>
//   )
// }

import Hero from "@/component/Home/hero";
import About from "@/component/Home/about";
import Statistic from "@/component/Home/statistic";
import Portfolios from "@/component/Home/portfolios";
import Whyus from "@/component/Home/whyus";
import GotoShop from "@/component/Home/gotoshop";
import Blog from "@/component/Home/blog";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Statistic />
      <Whyus />
      <GotoShop />
      <Portfolios />
      <Blog />
    </main>
  )
}