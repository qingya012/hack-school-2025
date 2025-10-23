export default function PollPage({ params }){
    const slug = params.slug;
    return <h1>The poll's slug: {slug}</h1>
}