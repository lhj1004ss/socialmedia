import AppLayout from '../components/AppLayout/AppLayout'
import Head from 'next/head'
import NameEditForm from '../components/NameEditForm/NameEditForm'
import FollowList from '../components/FollowList/FollowList'
// import FollowerList from '../components/FollowerList/FollowerList'

function profile() {
  const followList = [
    { name: 'hyoje' },
    { name: 'hello' },
    { name: 'hi' },
    { name: 'hey' },
  ]
  const followerList = [
    { name: 'how' },
    { name: 'are' },
    { name: 'you' },
    { name: 'doing?' },
  ]

  return (
    <>
      <Head>
        <title>My Profile | Social Media</title>
      </Head>
      <AppLayout>
        <NameEditForm />
        <FollowList header='followList' data={followList} />
        {/* <FollowerList header='follwerList' data={followerList} /> */}
      </AppLayout>
    </>
  )
}

export default profile
