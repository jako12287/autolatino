import Advertising from "@/components/advertising";
import TopLabel from "@/components/topLabel";
import BlogSection from "./sections/blog";
import CommunityQuestions from "./sections/communityQuestions";
import Contact from "./sections/contact";
import Testimonial from "./sections/testimonials";
import Video from "./sections/videos";

const Home = () => {
  return (
    <div className="h-full">
      <Advertising />
      <TopLabel title="Blog" />
      <BlogSection />
      <TopLabel title="Preguntas de la Comunidad" />
      <CommunityQuestions />
      <Contact />
      <div className="mt-1.5">
        <TopLabel title="Testimonios" />
      </div>
      <Testimonial />
      <div className="mt-10">
        <TopLabel title="Videos" />
      </div>
      <Video />
      <Advertising />
    </div>
  );
};

export default Home;
