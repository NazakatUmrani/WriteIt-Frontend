import { MainNav } from "@/components/MainNav";
import Notes from "@/components/Notes";
import { Search } from "@/components/Search";
import { UserNav } from "@/components/UserNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLoader } from '../context/LoaderContext';
import Loader from "@/components/Loader";
import { Plus } from "lucide-react";

interface Note {
	_id: string;
	title: string;
	description: string;
  }
  
const Dashboard = () => {
  const navigate = useNavigate();
  const { setIsLoading, isLoading } = useLoader();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("auth-token");
    if (!token) {
      navigate("/signin");
    } else {
		const fetchNotes = async () => {
			const token = localStorage.getItem("auth-token");
			const headers: HeadersInit = {};
	  
			if (token) {
			  headers["auth-token"] = token;
			}
	  
			try {
			  // Make the API request to fetch notes
			  const response = await fetch(
				"https://writeit-backend.up.railway.app/api/notes/fetchAllNotes",
				{
				  method: "GET",
				  headers,
				}
			  );
	  
			  // Check if the response is okay
			  if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			  }
	  
			  // Parse the JSON data
			  const data = await response.json();
	  
			  // Set the notes state
			  setNotes(data);
			} catch (error) {
			  console.error("Failed to fetch notes:", error);
			}
		  };
		  fetchNotes();
      setIsLoading(false);
    }
  }, [navigate, setIsLoading]);
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col w-screen h-screen min-h-screen">
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
        <Notes notes={notes}/>
      </div>
	  <div className="absolute bottom-[5vh] right-[5vw] md:bottom-10 md:right-10 bg-primary rounded-full p-1 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-2xl">
	  	<Plus className="text-background size-[6vw] sm:size-9" onClick={() => navigate("/create")}/>
	  </div>
    </>
  );
};

export default Dashboard;
