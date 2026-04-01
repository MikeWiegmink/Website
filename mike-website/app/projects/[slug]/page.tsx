export default async function ProjectDetails({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  // const project = await getProjectBySlug(slug);

  return (
    <p>{slug}</p>
  );
}