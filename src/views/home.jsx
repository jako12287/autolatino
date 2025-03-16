import Advertising from "@/components/advertising";
import TopLabel from "@/components/topLabel";
import BlogSection from "./sections/blog";
import CommunityQuestions from "./sections/communityQuestions";

const Home = () => {
  return (
    <div className="h-full">
      <Advertising />
      <TopLabel title="Blog" />
      <BlogSection />
      <TopLabel title="Preguntas de la Comunidad" />
      <CommunityQuestions/>
    </div>
  );
};

export default Home;
