import LanguageFlashcards from "@/components/flashcards/language_flashcards"

const UIUx = () => {
    return (
        <div className=" w-full p-0 sm:p-4 sm:pt-0 h-full flex flex-col gap-4  ">
            <div className="grow flex flex-col w-full  ">
                <LanguageFlashcards language="ui_ux" />
            </div>
        </div>
    )
}
export default UIUx
