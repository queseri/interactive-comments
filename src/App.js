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
        <ul className='comments-container initial-comments'>
          {result && result.comments.map(comment => {
            return <li
              key={comment.id}
              className='grid comments-item inital-comments-item'>
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
      </main>
    </div>
  );
}

export default App;
