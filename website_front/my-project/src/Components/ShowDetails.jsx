import { useParams } from 'react-router-dom';

export default function ShowDetails() {
  const { id } = useParams(); 
  return <h1>Details for Item: {id}</h1>;
}
