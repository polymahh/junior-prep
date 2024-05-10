import LanguageFlashcards from "@/components/flashcards/language_flashcards"

const Javascript = async () => {
    return (
        <div className=" w-full p-2 md:p-4 h-full flex flex-col gap-4  ">
            <div className="grow flex flex-col w-full  ">
                <LanguageFlashcards language="javascript" />
            </div>
        </div>
    )
}
export default Javascript
