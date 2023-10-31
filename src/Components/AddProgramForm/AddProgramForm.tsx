import "./styles.css";

import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddProgramContext } from "../../Context/ProgramContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../db";

interface AddProgramInputProps {
  // addAt: string
  // editedAt: string,
  // watchedAt: string,
  nameProgram: string
  genre: string
  stream: []
}

export const AddProgramForm = () => {

  const { programs, setPrograms } = useContext(AddProgramContext);

  const {
    register,
    handleSubmit,
    reset,
    //watch,
    //formState: { erros }
  } = useForm<AddProgramInputProps>()

  const onSubmit: SubmitHandler<AddProgramInputProps> = async (data: AddProgramInputProps) => {
    try {
      const docRef = await addDoc(collection(db, "programs"), {
        programs: data
      })
      setPrograms([...programs, data]);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
        <div className="single-input">
          <label htmlFor="nameProgram">Nome do Programa</label>
          <input type="text" {...register("nameProgram", { required: true })} name="nameProgram" id="nameProgram" placeholder="Digite o nome do programa" className="h-10 px-3 bg-teal-50 border border-teal-500 rounded block w-full" />
        </div>
        <div className="single-input">
          <label htmlFor="genre">Genre</label>
          <select {...register("genre", { required: true })} id="genre" name="genre" className="h-10 px-3 bg-teal-50 border border-teal-500 rounded block w-full">
            <option value="">Escolha uma opção</option>
            <option value="Ação">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Cinema de arte">Cinema de arte</option>
            <option value="Chanchada">Chanchada</option>
            <option value="Comédia">Comédia</option>
            <option value="Comédia de ação">Comédia de ação</option>
            <option value="Comédia de terror">Comédia de terror</option>
            <option value="Comédia dramática">Comédia dramática</option>
            <option value="Comédia romântica">Comédia romântica</option>
            <option value="Dança">Dança</option>
            <option value="Documentário">Documentário</option>
            <option value="Docuficção">Docuficção</option>
            <option value="Drama">Drama</option>
            <option value="Espionagem">Espionagem</option>
            <option value="Faroeste">Faroeste</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Fantasia científica">Fantasia científica</option>
            <option value="Ficção científica">Ficção científica</option>
            <option value="Filmes com truques">Filmes com truques</option>
            <option value="Filmes de guerra">Filmes de guerra</option>
            <option value="Mistério">Mistério</option>
            <option value="Musical">Musical</option>
            <option value="Filme policial">Filme policial</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>

        <div className="single-input">
          <label htmlFor="stream">Onde Assistir</label>
          <select id="stream" {...register("stream", { required: true })} name="stream" className="w-full p-3 bg-teal-50 border border-teal-500 rounded" multiple>
            <option value="Netflix">Netflix</option>
            <option value="Prime">Prime Vídeo</option>
            <option value="Youtube">Youtube</option>
            <option value="AppleTV+">AppleTV+</option>
          </select>
        </div>

        <div className="single-input">
          <button type="submit" className="mt-6 bg-teal-500 py-4 text-white uppercase font-bold text-sm hover:bg-teal-800 border-0 rounded transition-colors w-full">Adicionar</button>
        </div>
      </form>
    </>
  )
}
