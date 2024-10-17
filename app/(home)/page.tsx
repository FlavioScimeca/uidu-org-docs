import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex h-screen flex-col justify-center text-center'>
      <h1 className='mb-4 text-2xl font-bold'>Hello Uiduer</h1>
      <p className='text-fd-muted-foreground'>
        This is the docs of{' '}
        <Link
          href='https://uidu.org/it'
          target='_blank'
          className='text-fd-foreground font-semibold underline'
        >
          Uidu-org
        </Link>{' '}
        feel free to contribute to the docs.
      </p>
    </main>
  );
}
