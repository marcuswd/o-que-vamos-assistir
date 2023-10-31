import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { db } from "../db";
import { collection, getDocs } from "firebase/firestore";

interface AddProgramInputProps {
  addAt: string
  editedAt: string,
  watchedAt: string,
  nameProgram: string
  genre: string
  stream: []
  programs?: null
}

interface AddProgramContextProps {
  programs: AddProgramInputProps[]
  setPrograms: Dispatch<SetStateAction<AddProgramInputProps[]>>
}

export const AddProgramContext = createContext<AddProgramContextProps>(
  { programs: [], setPrograms() { } }
)

export function AddProgramProvider({ children }: React.PropsWithChildren) {
  const [programs, setPrograms] = useState<AddProgramInputProps[]>([]);

  const getData = async () => {
    const newValue: AddProgramInputProps[] = [];
    await getDocs(collection(db, "programs")).then((QuerySnapshot) => {
      const newData = QuerySnapshot.docs.map((doc) => ({ ...doc.data() } as AddProgramInputProps));
      newData.filter((value) => {
        return newValue.push(value.programs);
      })

      setPrograms(newValue);
    })
  }

  useEffect(() => {
    // const ListPrograms = localStorage.getItem("programs");
    // if (ListPrograms && JSON.parse(ListPrograms).length > 0) {
    //   setPrograms(JSON.parse(ListPrograms))
    // }
    getData();
  }, [])

  return (
    <AddProgramContext.Provider value={{ programs, setPrograms }}>
      {children}
    </AddProgramContext.Provider>
  )
}