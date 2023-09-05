import Image from 'next/image'

type Section = {id: number, title:string, link:string; info:string}

export default function Home() {
  const sections :Section[] = [
    {
      id: 11,
      title: "Docs", 
      link: "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", 
      info: "Find in-depth information about Next.js features and API."
    }, {
      id: 12,
      title: "Setup", 
      link: "https://nextjs.org", 
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus eros ante, ac sodales metus venenatis rhoncus. Praesent vel velit pharetra, vestibulum mauris id, mollis elit. Integer nec leo laoreet, pretium urna ac, venenatis enim."
    }
  ];
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

      <div className="mt-4">
        {sections.map(section => 
          <SectionBlock key={section.id} section={section}/>
        )}
      </div>
    </main>
  )
}

type SectionBlockProps = {section:Section};

function SectionBlock({section}: SectionBlockProps){
  return(
    <section className="flex justify-center my-4">
      <a
      href={section.link}
      className="bg-neutral-900 rounded-xl border border-transparent px-5 pt-4 pb-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-2xl font-semibold text-center">
        {section.title+' '}
        <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </div>
      <p className="text-sm w-[28rem] mt-2 opacity-50">
        {section.info}  
      </p>
    </a>
  </section>
);
}
