
export default function ExplorePage({ params }: { params: { mediaType: string } }) {
 
  const { mediaType } = params;
  
  return (
    <div>
      <h1>Explore {mediaType}</h1>
      <p>This is a placeholder for the explore {mediaType} page.</p>
    </div>
  );
}
