import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';
import Code from './blog/components/code/Code'
// import filter from './blog/assets/filtering.jpeg'
import filter from './blog/assets/filter4.jpg'

import './Post.css'

const Post = () => {
    const [content, setContent] = useState("")
    // console.log("🚀 ~ file: Post.js ~ line 6 ~ Post ~ content", content)

    useEffect(() => {
        import('../markdown/article.md')
        // import('../markdown/mastering-javascript.md')
        .then((res) => {
          fetch(res.default)
            .then((response) => response.text())
            .then((response) => setContent(response))
            .catch((err) => console.log(err));
        });
    }, [])

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          <header>
            <img
              alt="my avater"
              src={filter}
              // src="https://avatars.githubusercontent.com/u/45571546?v=4"
              style={{
                // clipPath: 'circle(50% at 50% 50%)',
                // maxWidth: '11vw',
                // maxHeight: '11vh',
                width: '100vw',
                height: '20rem',
              }}
            ></img>
          </header>
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
                // Code: {
                //   component: Code,
                // },
              },
            }}
          >
            {content}
          </Markdown>
          {/* <ReactMarkdown children={content}>{content}</ReactMarkdown> */}
        </div>
      </div>
    </article>
  );
}

export default Post