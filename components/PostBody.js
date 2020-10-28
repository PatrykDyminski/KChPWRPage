import ReactMarkdown from 'react-markdown'

import markdownStyles from './markdown-styles.module.css'
import MyProse from './MyProse'


export default function PostBody({ content }) {
  return (
    <MyProse>
      <ReactMarkdown source={content} 
        className={markdownStyles['markdown']}
      />
    </MyProse>
  )
}