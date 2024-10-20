import { MainNav } from '@/components/MainNav'
import { Search } from '@/components/Search'
import { UserNav } from '@/components/UserNav'

const Dashboard = () => {
        return (
                <>
                        <div className="border-b">
                                <div className="flex h-16 items-center px-4">
                                        <span className="text-xl text-primary">WriteIt - Notes App</span>
                                        <MainNav />
                                        <div className="ml-auto flex items-center space-x-4">
                                                <Search />
                                                <UserNav />
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Dashboard