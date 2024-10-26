import React, { useEffect, useState } from 'react'
import Note from './Note'

interface Note {
        _id: string;
        title: string;
        description: string;
}

const Notes = () => {
        const [notes, setNotes] = useState<Note[]>([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                const fetchNotes = async () => {
                        const token = localStorage.getItem('auth-token');
                        const headers: HeadersInit = {};

                        if (token) {
                                headers['auth-token'] = token;
                        }

                        try {
                                // Make the API request to fetch notes
                                const response = await fetch('https://writeit-backend.up.railway.app/api/notes/fetchAllNotes', {
                                        method: 'GET',
                                        headers
                                });

                                // Check if the response is okay
                                if (!response.ok) {
                                        throw new Error(`HTTP error! Status: ${response.status}`);
                                }

                                // Parse the JSON data
                                const data = await response.json();

                                // Set the notes state
                                setNotes(data);
                        } catch (error) {
                                console.error('Failed to fetch notes:', error);
                        }
                        finally {
                                setLoading(false);
                        }
                }
                fetchNotes();
        }, []);
        if (loading) {
                return <div className='min-h-[89vh] grid place-items-center'>Loading...</div>                
        }
        return (
                <div className='h-max min-h-[89vh]'>
                        <div className="flex flex-wrap p-[2.5vw] justify-evenly gap-y-4">
                                {notes.map((note) => {
                                        return (
                                                <div key={note._id} className="w-[30vw]">
                                                        <Note note={{ title: note.title, description: note.description }} />
                                                </div>
                                        )
                                })}
                        </div>
                </div>
        )
}

export default Notes