import Link from "next/link";

type PostProps = {
  metadata: {
    title: string,
    summary: string,
    publishedAt: string
  },
  slug: string
}

export default function Post({ metadata, slug }: PostProps) {
  return (
    <Link href={"blog/" + slug}>
      <div className="border p-2">
        <h2 className="lg:text-xl">{metadata.title}</h2>
        <p className="text-xs mb-2">{metadata.publishedAt}</p>
        <p className="text-sm">{metadata.summary}</p>
      </div>
    </Link>
  );
}