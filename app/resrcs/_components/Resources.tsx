import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RESOURCES = [
  "Fonts",
  "Images",
  "Videos and Sound",
  "Colours",
  "Animations & Interactions",
  "Content Management System (CMS)",
];

const Resources = () => {
  return (
    <div className="w-auto h-auto  ">
      <Accordion type="single" collapsible className="">
        {RESOURCES.map((resource) => (
          <AccordionItem key={resource} value={resource}>
            <AccordionTrigger>{resource}</AccordionTrigger>
            <AccordionContent>
              <div className="flex relative justify-around ">
                <div className="flex flex-col">
                  <h1 className="text-center font-bold text-lg">
                    {resource} tbc
                  </h1>
                  <ul className="list-disc">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      Lorem ipsum dolor sit amet, consectetur.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      Lorem ipsum dolor sit amet, consectetur.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col md:my-12 max-w-4/5">
                  <span className="gap-x-2">
                    •
                    <a href="" className="hover:underline transition">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                  </span>
                  <span className="gap-x-2">
                    •
                    <a href="" className="hover:underline transition">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                  </span>
                  <span className="gap-x-2">
                    •
                    <a href="" className="hover:underline transition">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Resources;

{
  /* </Accordion>
      <div className="flex flex-col">
        {RESOURCES.map((resource) => (
          <div key={resource} className="p-5 border border-black">
            <h2>{resource}</h2>
          </div>
        ))}
      </div> */
}
