import Image from 'next/image'
import collectionData from '@/db/10ncollection.json'

export default function CollectionFooter() {
  return (
    <footer className="relative min-h-80 bg-[#232323] fl-m-0/0.5 fl-px-4/5 fl-py-8/4 max-lg:fl-py-8/28">
      <div className="flex max-lg:flex-col justify-between gap-4 max-lg:gap-42">
        <div className="flex flex-col justify-between size-full">
          <a href={'https://10ncollective.com/'} target="_blank" rel="noopener noreferrer">
            <Image
              src={'/images/logos/10n-collection-logo.svg'}
              alt="Collection logo"
              width={115}
              height={115}
              sizes="115px"
              className="w-auto h-auto object-cover"
            />
          </a>

          <a href="https://amzngm.com/" target="_blank" rel="noopener noreferrer" className="group">
            remade by {` `}
            <span className="group-hover:text-main">NGM</span>
          </a>
        </div>

        <div className="flex max-lg:flex-col justify-between gap-4 max-lg:fl-gap-14/44 size-full lg:px-4">
          <a href={'https://10ncollective.com/'} target="_blank" rel="noopener noreferrer" className="w-full">
            <Image
              src={'/images/logos/10n-collection-text-logo.svg'}
              alt="Collection logo"
              width={150}
              height={150}
              sizes="150px"
              className="w-auto h-auto object-cover"
            />
          </a>

          <ul className="flex flex-col gap-2 w-full">
            {collectionData.collection.map((item) => (
              <li key={item.name} className="w-full min-w-45 last:border-0 border-b-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-bold hover:text-main text-xl normal-case leading-none tracking-wide pb-1.5"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-full">
            <Image
              src={'/images/collection-para.svg'}
              alt="Collection logo"
              width={150}
              height={150}
              sizes="150px"
              className="w-auto max-lg:w-50 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
