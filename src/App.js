import { useState, useEffect } from 'react';
import './sass/style.scss';
import Main from './main/main';

function App() {
  const [result, setResult] = useState("")
  const getData = async () => {
    await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (response) {
        console.log(response.type)
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setResult(data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <main className="App-header">
        <ul>
          {result && result.comments.map(comment => {
            return <li
              key={comment.id}>
              <Main profile={comment.user.image.webp}
                alt={`Profile of ${comment.user.username}`}
                username={comment.user.username}
                created={comment.createdAt}
                content={comment.content}
                score={comment.score}
                replies={comment.replies}
              />
            </li>
          })}
        </ul>


        {/*
        <ul>
          {result && result.comments.map(comment => {
            return <li
              key={comment.id}>
              <figure className="intro-comment">
                <img src={comment.user.image.webp} alt={`Profile of ${comment.user.username}`} />
                <figcaption>
                  <h2>{comment.user.username}</h2>
                  <p>{comment.createdAt}</p>
                </figcaption>
              </figure>
              <p>
                {comment.content}
              </p>
              <div className="controls">
                <div className="control-likes">
                  <button className="btn-minus">-</button>
                  <span className="likes-quantity">
                    {comment.score}
                  </span>
                  <button className="btn-add">+</button>
                </div>
              </div>
              {comment.replies.length === 0 ? "" : <ul>
                {comment.replies.map(reply => {
                  return <li key={reply.id}>
                    <figure className="intro-comment">
                      <img src={reply.user.image.webp}
                        alt={`Profile of ${reply.user.username}`} />
                      <figcaption>
                        <h2>{reply.user.username}</h2>
                        <p>{reply.createdAt}</p>
                      </figcaption>
                    </figure>
                    <p>
                      {reply.content}
                    </p>
                    <div className="controls">
                      <div className="control-likes">
                        <button className="btn-minus">-</button>
                        <span className="likes-quantity">
                          {reply.score}
                        </span>
                        <button className="btn-add">+</button>
                      </div>
                    </div>
                  </li>
                })}
              </ul>}
            </li>
          })}
        </ul>
        */}

      </main>
    </div>
  );
}

export default App;
