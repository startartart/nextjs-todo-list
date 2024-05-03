import Image from 'next/image';

export default function Home() {
  return (
    <div className="m-5 flex flex-col items-center justify-center content-center gap-4">
      <h1 className="text-2xl">간단한 Next.js 투두 리스트</h1>
      <ul>
        <li>
          <p>할 것 1</p>
        </li>
        <li>
          <p>할 것 2</p>
        </li>
        <li>
          <p>할 것 3</p>
        </li>
      </ul>
    </div>
  );
}
