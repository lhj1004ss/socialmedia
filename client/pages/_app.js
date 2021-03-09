//dealing with some common things,  and this app.js is a parent of index.js(home)
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head'

const SocialMedia = ({ Component }) => {
  return (
    <>
      <Head>
        <meta chartSet='utf-8' />
        <title>Hyoje Social Media</title>
      </Head>
      <Component />
    </>
  )
}
SocialMedia.propTypes = {
  Component: PropTypes.elementType.isRequired,
}
export default SocialMedia
