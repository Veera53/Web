import Link from "next/link"

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 md:p-16 lg:p-24 font-mono">
      <nav className="mb-16">
        <div className="text-gray-400">
          press:{" "}
          <Link href="/" className="text-white hover:underline">
            [h] home
          </Link>{" "}
          <Link href="/blog" className="text-white hover:underline">
            [b] blog
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Blog</h1>

        <div className="space-y-8">
          <article className="border-l-2 border-gray-800 pl-4">
            <h2 className="text-xl font-bold mb-2">
              <Link href="/blog/sample-post" className="hover:underline">
                Hi there!
              </Link>
            </h2>
            <div className="text-gray-400 mb-2">03 Sept 2022 </div>
            <p className="text-gray-300">
              
            </p>
          </article>

          <article className="border-l-2 border-gray-800 pl-4">
            <h2 className="text-xl font-bold mb-2">
              <Link href="/blog/another-post" className="hover:underline">
                
              </Link>
            </h2>
            <div className="text-gray-400 mb-2"></div>
            <p className="text-gray-300"></p>
          </article>
        </div>
      </main>
    </div>
  )
}
