export default function Home() {
  return (
    <div className="max-w-[700px] w-full text-white pt-16 mx-auto font-[family-name:var(--font-geist-mono)] text-sm px-4">
      <h1 className="font-semibold">
        Hey! I&apos;m <span className="font-semibold">monto</span>
      </h1>
      <p className="text-text-mute">I&apos;m a software engineer</p>{' '}
      <div className="flex flex-col gap-2 mt-6">
        <h2 className="font-semibold">About</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          - I live in Buenos Aires,
          <div className="text-text-mute">Argentina</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          - I work at{' '}
          <a
            href="https://pluggy.ai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e44963] hover:underline cursor-pointer transition-all"
          >
            Pluggy
          </a>{' '}
          <div className="text-text-mute">as founding engineer</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          - I&apos;m a magician.{' '}
          <div className="text-text-mute">I do weird things with cards idk</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          - I&apos;m a Hacker{' '}
          <div className="text-text-mute">I love doing reverse engineering</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h2 className="font-semibold">Links</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://github.com/nicolasmontone"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - Github
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://x.com/montonenico"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - X
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://nicolas-montone.notion.site/Reading-177639a6a7ff803ea6a0d3713cc61d6c"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - My Internet Reading List
          </a>
          <div className="text-text-mute">
            I read a lot of stuff, here is the best of them
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h2 className="font-semibold">Projects</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://github.com/pluggyai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - Pluggy{' '}
          </a>
          <div className="text-text-mute">
            SDKs, APIs, Reverse Engineering, Frontend
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://github.com/nicolasmontone/chat-with-your-base"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - Chat with your Database
          </a>
          <div className="text-text-mute">Postgres + LLMs</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://translatemenu.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - Translate Menu
          </a>
          <div className="text-text-mute">
            Translate your menu to any language
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://obsequi.ar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - Obsequiar
          </a>
          <div className="text-text-mute">Create Mercado Libre wishlists</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://github.com/NicolasMontone/cryptosapp-wallet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - Cryptosapp Wallet
          </a>
          <div className="text-text-mute">
            Whatsapp bot where you can transfer crypto
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://github.com/NicolasMontone/kill-node-modules-raycast"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline cursor-pointer transition-all"
          >
            - Kill Node Modules
          </a>
          <div className="text-text-mute">Raycast extension</div>
        </div>
      </div>
    </div>
  )
}
