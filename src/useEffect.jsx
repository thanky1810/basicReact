import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
function UseE() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");

  const show = (tab) => {
    setName(tab);
  };

  useEffect(() => {
    if (name) {
      fetch(`https://jsonplaceholder.typicode.com/${name}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        });
    }
  }, [name]);

  return (
    <div>
      {tabs.map((tab, index) => {
        return (
          <button key={index} onClick={() => show(tab)}>
            {tab}
          </button>
        );
      })}

      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title || post.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseE;
