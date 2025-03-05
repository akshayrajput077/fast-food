
import SingleItem from '@/component/Singleitem/singleitem'; // Import the SingleItem component

export default async function ItemPage({ params }) {
  return (
    <main>
      <SingleItem id={params.id} />
    </main>
  )
}