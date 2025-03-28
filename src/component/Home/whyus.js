import { HandPlatter } from 'lucide-react';
import { UtensilsCrossed } from 'lucide-react';
import { HandCoins } from 'lucide-react';
export default function Whyus() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="text-orange-600 text-sm font-medium mb-4">POPULAR FOOD CATEGORY</h1>
          <h1 className="title-font xl:text-4xl lg:text-2xl md:text-xl sm:text-xl font-extrabold mb-4 text-gray-900 mt-3">WE PROVIDE AMAZING & QUALITY FOOD FOR
            <br className="hidden lg:inline-block" />YOUR GOOD HEALTH
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in" data-aos-duration='1000'>
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <HandPlatter className="text-orange-600 mr-4" size={60} />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">BEST QUALITY FOOD</h2>
                <p className="text-gray-500">Sed ut perspiciatis unde omnis
                  <br className="hidden lg:inline-block" />este natus sit voluptatem
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in" data-aos-duration='1000'>
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <HandCoins className="text-orange-600 mr-4" size={60} />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">MONEY BACK GUARANTEE</h2>
                <p className="text-gray-500">Sed ut perspiciatis unde omnis
                  <br className="hidden lg:inline-block" />este natus sit voluptatem
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in" data-aos-duration='1000'>
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <UtensilsCrossed className="text-orange-600 mr-4" size={60} />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">100% NATURAL FOOD</h2>
                <p className="text-gray-500">Sed ut perspiciatis unde omnis
                  <br className="hidden lg:inline-block" />este natus sit voluptatem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}