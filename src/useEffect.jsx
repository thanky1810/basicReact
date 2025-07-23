import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
function UseE() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  const show = (tab) => {
    setName(tab);
  };

  useEffect(() => {
    if (name) {
      fetch(`https://jsonplaceholder.typicode.com/${name}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }, [name]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {showBtn && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
          }}
        >
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            ON TOP
          </button>
        </div>
      )}
    </div>
  );
}

export default UseE;
