import Header from '@/components/home/card/header/template'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div className="grid grid-rows-8">
          <div className="row-span-1"><Header/></div>
          <div className="row-span-7">{children}</div>
        </div>
    </div>
  )
}