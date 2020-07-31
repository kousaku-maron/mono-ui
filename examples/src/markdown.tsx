import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
// import github from 'prism-react-renderer/themes/github'
import vsDark from 'prism-react-renderer/themes/vsDark'

const A: React.FC = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

const H2 = styled.h2`
  margin-top: 2rem;
  font-size: 1.25rem;
`

const H3 = styled.h3`
  margin-top: 2rem;
  font-size: 1.125rem;
`

const Hr = styled.hr`
  margin: 3rem 0;
  border: none;
  border-bottom: 1px solid #dadada;
`

const Img = styled.img`
  max-width: 100%;
`

const Blockquote = styled.blockquote`
  margin: 2rem 0;
  padding: 1rem 1.25rem;
  background: #f7f7f7;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const Code: React.FC<{ className: string }> = ({ children, className }) => {
  const language = className.replace(/language-/, '')
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Highlight {...defaultProps} theme={vsDark} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px', borderRadius: '5px', fontSize: '18px', overflow: 'auto' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                if (token.empty && tokens.length - 1 !== i) {
                  return <br key={key} />
                }
                const { style, ...rest } = getTokenProps({ token, key })
                return <span key={key} {...rest} style={{ ...style, lineHeight: 1.5 }} />
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const InlineCode = styled.code`
  color: rgb(212, 0, 255);
  font-size: 0.875em;
  white-space: pre-wrap;
  &::before {
    content: '';
  }
  &::after {
    content: '';
  }
`

const components = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  h2: H2,
  h3: H3,
  img: Img,
  hr: Hr,
  inlineCode: InlineCode,
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Markdown: React.FC = ({ children }) => <MDXProvider components={components}>{children}</MDXProvider>

export default Markdown
