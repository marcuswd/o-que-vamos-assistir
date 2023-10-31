import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { db } from "../db";
import { collection, getDocs } from "firebase/firestore";

interface AddProgramInputProps {
  // addAt: string
  // editedAt: string,
  // watchedAt: string,
  nameProgram: string
  genre: string
  stream: []
  programs?: null
}

interface AddProgramContextProps {
  programs: AddProgramInputProps[]
  setPrograms: Dispatch<SetStateAction<AddProgramInputProps[]>>
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export const AddProgramContext = createContext<AddProgramContextProps>(
  { programs: [], setPrograms() { }, openModal: false, setOpenModal() { } }
)

export function AddProgramProvider({ children }: React.PropsWithChildren) {
  const [programs, setPrograms] = useState<AddProgramInputProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const getData = async () => {
    const newValue: AddProgramInputProps[] = [];
    await getDocs(collection(db, "programs")).then((QuerySnapshot) => {
      const newData = QuerySnapshot.docs.map((doc) => ({ ...doc.data() } as AddProgramInputProps));
      newData.filter((value) => {
        if (value.programs) {
          newValue.push(value.programs);
        }
      })

      setPrograms(newValue);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <AddProgramContext.Provider value={{ programs, setPrograms, openModal, setOpenModal }}>
      {children}
    </AddProgramContext.Provider>
  )
}