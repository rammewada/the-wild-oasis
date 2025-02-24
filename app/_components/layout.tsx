export default function Layout({ children }: { children: any }) {
    return <div className="grid grid-cols-[16rem_1fr] h-full  gap-12">
        <div>
            Navigations
        </div>
        <div className="py-1">
            {children}
        </div>
    </div>

}