import { CardStack } from "./core/CardStack";

const items = [
  { id: 1, img: "/projects/NotebookLM.png"},
  { id: 2, img: "/projects/snowboard.jpg" },
  { id: 3, img: "/projects/fallhacks.jpg" },
  { id: 4, img: "/projects/hiking.jpg" },
  { id: 5, img: "/projects/sus.jpg" },
  { id: 6, img: "/projects/svtrip.JPG" },
];

export function ImageCardStack() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-25 px-8 py-16">
      
      {/* LEFT — Card Stack */}
      <div className="flex-shrink-0">
        <CardStack items={items}>
          {(card) => (
            <img
              src={card.img}
              alt="Project preview"
              className="pointer-events-none h-full w-full rounded-2xl object-cover shadow-2xl"
            />
          )}
        </CardStack>
      </div>

      {/* RIGHT — Text */}
      <div className="flex flex-col gap-4 text-center md:text-left max-w-xs">
        <div className="flex items-center gap-2">
          <span className="block w-8 h-[2px] bg-primary" />
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Gallery
          </span>
        </div>

        {/* <h2 className="text-4xl font-bold tracking-tight leading-tight">
          Photo
          <span className="text-primary">  Gallery</span>
        </h2> */}

        <p className="text-muted-foreground text-sm leading-relaxed">
          Here are some photo highlights, featuring the Computing Science Student
          Society, and activities that I like to do for fun!
        </p>

        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          {items.length} photos
        </div>
      </div>

    </div>
  );
}