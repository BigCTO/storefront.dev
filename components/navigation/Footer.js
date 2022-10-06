

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-24 border-t">
      <a
        className="flex justify-center items-center text-xs text-gray-700"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        We believe the internet is the best platfrom for commerce.{' '}
      </a>
      <span className="font-bold text-sm uppercase mt-3">storefront.dev</span>
    </footer>
  )
}