import Food from "@/component/Home/food.js";
import HeadlineCards from "@/component/Home/headlineCards";
import Category from "@/component/Home/category";
import Hero from "@/component/Home/hero";
export default function Home() {
  return (
    <main>
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </main>
  )
}