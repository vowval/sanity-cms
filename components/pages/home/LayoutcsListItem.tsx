import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseLayoutcs } from 'types'

interface LayoutcsProps {
  layoutcs: ShowcaseLayoutcs
  odd: number
}

export function LayoutcsListItem(props: LayoutcsProps) {
  const { layoutcs, odd } = props
  //console.log("Hai Here", layoutcs)
  return (
    <div
      className={`flex# flex-col# gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-t border-b xl:flex-row-reverse'
      }`}
    >
      {/* <div className="w-full xl:w-9/12">
        <ImageBox
          image={layoutcs.coverImage}
          alt={`Cover image from ${layoutcs.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div> */}
      <div className="widget-columns">
        <div dangerouslySetInnerHTML={{__html:layoutcs.myCodeField.code}} ></div>
      </div>
      {/* <div className="flex xl:w-1/4">
        <TextBox layoutcs={layoutcs} />
      </div> */}
    </div>
  )
}

function TextBox({ layoutcs }: { layoutcs: ShowcaseLayoutcs }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {layoutcs.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">
          <CustomPortableText value={layoutcs.overview} />
        </div>
      </div>
      {/* Tags */}
      <div className="mt-4 flex flex-row gap-x-2">
        {layoutcs.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}
