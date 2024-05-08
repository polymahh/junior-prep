import LanguageFlashcards from "@/components/flashcards/language_flashcards"
import { Icons } from "@/components/icons"
import { flashcardsApi } from "@/lib/api/flashcardsApi"

const Javascript = async () => {
    return (
        <div className=" m-auto w-full  md:px-4 h-full flex flex-col gap-4 md:py-4 py-2 ">
            <div className="flex  w-full items-center justify-center md:justify-start gap-2 rounded-md bg-secondary px-4 py-2 ">
                <Icons.javascript className="h-6 w-6" />
                <h1 className="font-semibold">JavaScript</h1>
            </div>
            <div className="grow flex flex-col w-full px-2 md:px-4 ">
                <LanguageFlashcards language="javascript" />
            </div>
        </div>
    )
}
export default Javascript
