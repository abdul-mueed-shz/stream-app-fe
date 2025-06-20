'use client';
import Head from 'next/head';
import Broadcast from '../../Organisms/Broadcast';

const Page = () => {
  const broadcastData = {
    title: 'Broadcast Title',
    scheduledDate: new Date('2023-12-31T23:59:59'),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    chapters: [
      { title: 'What is product design?', duration: '13:09' },
      // ... more chapters
    ],
  };

  return (
    <div>
      <Head>
        <title>Hello World</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <Broadcast {...broadcastData} showCountDown={true} />
    </div>
  );
};
export default Page;
