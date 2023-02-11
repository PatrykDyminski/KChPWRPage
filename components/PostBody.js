import ReactMarkdown from 'react-markdown'
import Image from "next/legacy/image";

import markdownStyles from './markdown-styles.module.css'
import MyProse from './MyProse'

const renderers = {
  image: image => {
    return  <div className="flex flex-col items-center">
              <Image src={image.src} alt={image.alt} height="337" width="600" />
            </div>
  },
  
  paragraph: (paragraph) => {
    const { node } = paragraph
    if (node.children[0].type === "image") {
      const image = node.children[0]
      return  <div className="flex flex-col items-center">
                <Image src={image.url} alt={image.alt} height="337" width="600" />
              </div>
    }

    return <p>{paragraph.children}</p>
  },
}

export default function PostBody({ content }) {
  return (
    <MyProse>
      <ReactMarkdown
        className={markdownStyles["markdown"]}
        children={content}
        renderers={renderers}
      />
    </MyProse>
  )
}