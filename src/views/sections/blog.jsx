import { dataFake } from "@/data/dataBlog"
import LongCard from "@/components/longCard"


const BlogSection = ()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:p-10 p-2">
        {dataFake.map(({ id, title, header, text, image }, index) => (
          <div
            key={id}
            className={index === 0 ? "md:col-span-2" : "col-span-1"}
          >
            <LongCard
              header={header}
              title={title}
              text={text}
              image={image}
              small={index !== 0}
            />
          </div>
        ))}
      </div>
    )
}
export default BlogSection