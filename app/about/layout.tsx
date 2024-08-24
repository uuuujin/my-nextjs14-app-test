export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        {children}
          & copy; Nextjs is good
      </div>
  )
}
