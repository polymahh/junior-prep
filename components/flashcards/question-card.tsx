"use client"

import React, { useEffect } from "react"
import { ArrowRightCircle, CheckCircle, HelpCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

function QuestionCard() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="grow relative z-10 rounded-xl  p-2 group flex jjustify-center items-center  ">
      <div className="relative flex flex-col justify-between mx-auto border rounded-xl h-4/6 w-full max-w-[800px] pt-12 pb-4 px-4 md:px-12 gap-6 overflow-hidden">
        <div className="absolute top-4 left-8 flex gap-1 items-center ">
          <span className="h-2 w-2 bg-again rounded-full"></span>
          <span className="text-sm text-muted-foreground">12/43</span>
        </div>

        <Carousel className="flex h-4/6 w-fit" setApi={setApi}>
          <CarouselContent className="h-full">
            <CarouselItem className="h-full flex gap-4 w-[90%]">
              {/* <div className="rounded-3xl bg-secondary border h-full w-[90vw] md:w-[60vw] max-w-[660px] flex  justify-center items-center"> */}
              <div className="rounded-3xl bg-secondary border h-full flex  justify-center items-center">
                <div className="max-w-[80%]">
                  <h2 className="text-3xl text-muted-foreground pb-4">
                    Question:
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <ArrowRightCircle
                  className={cn(
                    "h-8 w-8 my-auto text-border",
                    current === 2 ? "rotate-180" : ""
                  )}
                />
              </div>
            </CarouselItem>

            <CarouselItem className=" h-full w-[90%]">
              <div className="rounded-3xl bg-secondary border h-full flex  justify-center items-center">
                <div className="max-w-[80%]">
                  <h2 className="text-3xl text-muted-foreground pb-4">
                    Answer:
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="flex gap-4 p-4 bg-secondary max-w-[300px] rounded-2xl mx-auto">
          <div
            className={cn(
              "rounded-xl   grow flex gap-2 p-2 px-4 flex-1 cursor-pointer",
              current === 1 ? "border border-again bg-background" : ""
            )}
            onClick={() => api?.scrollPrev()}
          >
            <HelpCircle className="text-again" />
            <span>question</span>
          </div>

          <div
            className={cn(
              "rounded-xl   grow flex gap-2 p-2 px-4 flex-1 cursor-pointer",
              current === 2 ? "border border-easy bg-background" : ""
            )}
            onClick={() => api?.scrollNext()}
          >
            <CheckCircle className="text-easy" />
            <span>answer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
