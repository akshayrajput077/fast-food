
import Hero from "@/component/Home/hero";
import About from "@/component/Home/about";
import Statistic from "@/component/Home/statistic";
import Whyus from "@/component/Home/whyus";
import GotoShop from "@/component/Home/gotoshop";
import ShopNow from "@/component/Home/shop";
import Blog from "@/component/Home/blog";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Statistic />
      <Whyus />
      {/* <GotoShop /> */}
      <ShopNow />
      <Blog />
    </main>
  )
}