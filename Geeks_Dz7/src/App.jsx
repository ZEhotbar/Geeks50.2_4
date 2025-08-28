import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);   
  const [title, setTitle] = useState("");   
  const [body, setBody] = useState("");     
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState("");    


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setPosts(response.data.posts);
      } catch (err) {
        console.error("Ошибка при загрузке:", err);
      }
    };
    fetchPosts();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      setMessage("Заполните все поля!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title,
        body,
        userId: 1,
      });


      setPosts((prev) => [response.data, ...prev]);

      setMessage("Пост успешно добавлен!");
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Ошибка при добавлении:", err);
      setMessage("Ошибка при добавлении поста");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial" }}>
      <h1>Список постов</h1>

      {}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Текст поста"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          {loading ? "Отправка..." : "Добавить пост"}
        </button>
      </form>

      {}
      {message && <p style={{ color: message.includes("Ошибка") ? "red" : "green" }}>{message}</p>}

      {}
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
