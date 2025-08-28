import { Link } from "react-router-dom";

export const posts = [
  { id: 1, title: "Первый пост", content: "Это самый крутой пост" },
  { id: 2, title: "Второй пост", content: "Прошлый просто фейк я куче" },
  { id: 3, title: "Третий пост", content: "Я пост :)" }
];

export default function Posts() {
  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
