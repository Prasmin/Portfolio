import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const fileContents = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    };
  });

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <a key={post.slug} href={`/blog/${post.slug}`}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </a>
      ))}
    </div>
  );
}
