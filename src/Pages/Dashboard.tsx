import { MainNav } from '@/components/MainNav'
import Notes from '@/components/Notes'
import { Search } from '@/components/Search'
import { UserNav } from '@/components/UserNav'

const Dashboard = () => {
        return (
                <>
                        <div className="flex flex-col w-screen">
                                <div className="border-b">
                                        <div className="flex h-[11vh] items-center px-4 w-screen">
                                                <span className="text-xl text-primary">WriteIt - Notes App</span>
                                                <MainNav />
                                                <div className="ml-auto flex items-center space-x-4">
                                                        <Search />
                                                        <UserNav />
                                                </div>
                                        </div>
                                </div>
                                <Notes />
                        </div>
                </>
        )
}

export default Dashboard