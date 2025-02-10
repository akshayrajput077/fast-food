
import { data } from '@/component/Common/data';// Import your data
import SingleItem from '@/component/Singleitem/singleitem'; // Import the SingleItem component

export default async function ItemPage({ params }) {
  const { id } = params;
  const item = data.find(i => i.id === parseInt(id));
  return <SingleItem item={item} />;
}