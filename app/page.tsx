import Image from 'next/image'

export default function Home() {
  return (
    <main className="my-2">
      <div>
        <Image
          className="dark:invert mx-auto"
          src="/next.svg"
          alt="Next.js Logo"
          width={300}  
          height={60}
          priority
        />
      </div>

      <div className="py-1 flex justify-center mt-4">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="bg-neutral-900 rounded-xl border border-transparent px-5 pt-4 pb-5 max-w-md transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-2xl font-semibold text-center">
            Docs{' '}
            <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </div>
          <p className="text-sm opacity-50">
            Find in-depth information about Next.js features and API.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus eros ante, ac sodales metus venenatis rhoncus. Praesent vel velit pharetra, vestibulum mauris id, mollis elit. Integer nec leo laoreet, pretium urna ac, venenatis enim.
          </p>

        </a>
      </div>

    </main>
  )
}
