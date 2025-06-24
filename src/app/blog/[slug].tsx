import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { GetStaticPaths, GetStaticProps } from "next";

interface PostProps {
  title: string;
  date: string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Read all Markdown files in /posts
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);

  // Generate paths for each post
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false, // 404 for unknown slugs
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  // Type guard for params
  if (!params?.slug) {
    return { notFound: true };
  }

  // Read and parse the Markdown file
  const fullPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Convert Markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title as string,
      date: data.date as string,
      content: contentHtml,
    },
  };
};

export default function BlogPost({ title, date, content }: PostProps) {
  return (
    <article className="prose mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <time className="text-gray-500 block mb-6">{date}</time>
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
