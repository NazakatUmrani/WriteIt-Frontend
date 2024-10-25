import { MainNav } from '@/components/MainNav'
import Note from '@/components/Note'
import { Search } from '@/components/Search'
import { UserNav } from '@/components/UserNav'

const Dashboard = () => {
        const notes = [
                { id: 1, title: 'Note 1', desctiption: 'Dolor nisi elit proident magna aliquip excepteur aute. Officia non dolor proident elit nisi fugiat ad anim anim irure. Exercitation in aliquip anim proident nostrud amet eu labore nostrud occaecat consequat tempor irure adipisicing. Nisi irure do duis aute sint ullamco adipisicing id quis voluptate amet nisi et.' },
                { id: 2, title: 'Note 2', desctiption: 'Sint aute dolor dolore ex. Anim nostrud nostrud culpa laborum quis qui exercitation sint excepteur veniam proident commodo cillum cillum. Occaecat sunt reprehenderit qui excepteur excepteur consequat. Labore ut eu incididunt dolor nostrud veniam dolore ex fugiat aliquip et consequat exercitation. Duis adipisicing dolore ut nisi magna consequat do Lorem aute. Sunt eu mollit magna esse irure pariatur enim occaecat et aliquip. Nostrud eu sit nisi duis fugiat aute.' },
                { id: 3, title: 'Note 3', desctiption: 'Sint aute cupidatat nostrud sunt sint excepteur anim. Nulla ad ad non occaecat aliquip ut. Tempor do amet irure veniam in Lorem. Anim adipisicing nisi elit nulla ex deserunt reprehenderit qui elit veniam dolor aliquip minim qui. Cillum in deserunt consequat dolore ex. Exercitation aute enim eu mollit.' }, { id: 4, title: 'Note 4', desctiption: 'Elit est dolor culpa labore sunt tempor sint eu labore id irure duis nulla. Amet sint culpa excepteur incididunt esse. Commodo veniam sint do tempor sint eiusmod minim ut nulla cillum do minim. Incididunt dolore amet amet ea commodo fugiat amet amet dolore deserunt sint commodo. Id pariatur cillum esse do deserunt officia aliqua officia voluptate eiusmod cupidatat. Aliqua irure cupidatat ex elit ad aliqua consequat irure qui dolor amet fugiat deserunt sint.' },
                { id: 5, title: 'Note 5', desctiption: 'Lorem cupidatat voluptate sunt do ut ullamco mollit quis id et qui do Lorem adipisicing. Laborum deserunt reprehenderit consectetur incididunt eu consequat consectetur. Ea aliquip ad laborum labore ex. Do laborum cillum aute minim labore. Nostrud veniam tempor officia dolor ea excepteur culpa enim fugiat tempor Lorem.' },
                { id: 6, title: 'Note 6', desctiption: 'Cillum ea nostrud commodo reprehenderit eiusmod tempor ea quis deserunt proident id qui. Aute sunt est magna commodo. Deserunt veniam aliquip Lorem labore incididunt ipsum in nisi culpa nulla consectetur fugiat ea culpa. Irure ut minim laborum ullamco non. Et sint excepteur nulla non officia Lorem.' }, { id: 7, title: 'Note 7', desctiption: 'Cillum proident Lorem ad reprehenderit officia sint. Exercitation do do pariatur velit velit adipisicing deserunt quis sint aute officia. Exercitation duis in reprehenderit laborum enim magna est deserunt est adipisicing pariatur occaecat in.' },
                { id: 8, title: 'Note 8', desctiption: 'In dolor dolore proident incididunt magna aute exercitation eiusmod. Quis esse do cillum elit esse esse sit. Proident proident aliquip officia nisi.' },
                { id: 9, title: 'Note 9', desctiption: 'Occaecat do ex culpa occaecat cupidatat minim eiusmod occaecat quis commodo laborum sit. Id ea proident officia labore est sunt. Aliquip dolore consectetur exercitation exercitation esse esse nulla officia ipsum ex in. Aliqua velit ipsum culpa eu culpa in. Tempor tempor aliqua est ex do voluptate aliquip velit exercitation dolore ea officia ullamco. Aliqua cillum nisi elit deserunt sint. Proident non in quis sit qui et laboris amet Lorem nisi adipisicing officia ut sit.' }, { id: 10, title: 'Note 10', desctiption: 'Consectetur ipsum aliquip exercitation occaecat. Labore mollit laborum laboris adipisicing exercitation excepteur elit minim veniam voluptate culpa enim elit sint. Mollit Lorem deserunt amet do incididunt. Anim pariatur fugiat tempor incididunt quis anim eiusmod laborum adipisicing Lorem pariatur ullamco.' },
                { id: 11, title: 'Note 11', desctiption: 'Et incididunt sint velit incididunt dolor magna Lorem adipisicing. Qui cupidatat tempor minim aute enim officia laboris elit veniam laborum duis esse. Veniam est ad Lorem cupidatat est labore. Mollit pariatur ea commodo nisi in cupidatat occaecat ex mollit sunt adipisicing. Ex exercitation aute consequat consectetur commodo pariatur eu irure mollit occaecat cillum nostrud exercitation reprehenderit. Velit fugiat fugiat est ea. Consectetur Lorem eiusmod veniam amet aute in commodo deserunt esse pariatur incididunt anim commodo.' },
                { id: 12, title: 'Note 12', desctiption: 'Duis est reprehenderit enim eiusmod nostrud ullamco do. Excepteur nisi est mollit ad ipsum aute quis commodo ipsum ullamco. Id magna sit quis non dolore voluptate est anim deserunt cupidatat exercitation. Eiusmod laborum non deserunt in ut cillum commodo. Pariatur ullamco mollit aute ullamco minim. Sint duis ad elit incididunt qui officia non velit enim proident mollit eiusmod aliqua sunt. Enim reprehenderit elit pariatur magna veniam elit irure proident esse id labore exercitation.' },
        ]
        return (
                <>
                        <div className="flex flex-col w-screen">
                                <div className="border-b">
                                        <div className="flex h-16 items-center px-4 w-screen">
                                                <span className="text-xl text-primary">WriteIt - Notes App</span>
                                                <MainNav />
                                                <div className="ml-auto flex items-center space-x-4">
                                                        <Search />
                                                        <UserNav />
                                                </div>
                                        </div>
                                </div>
                                <div className='h-max'>
                                        <div className="flex flex-wrap p-[2.5vw] justify-evenly gap-y-4">
                                                {notes.map((note) => {
                                                        return (
                                                                <div key={note.id} className="w-[30vw]">
                                                                        <Note note={{ title: note.title, description: note.desctiption }} />
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Dashboard