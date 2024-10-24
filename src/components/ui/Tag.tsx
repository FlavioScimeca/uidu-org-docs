export default function Tag({ title }: { title: string }) {
  return (
    <span className='text-xl font-medium text-orange-400 bg-orange-400 !important'>
      {title}
    </span>
  );
}
